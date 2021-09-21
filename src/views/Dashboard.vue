<template>
    <div>
        <template>
            <h2>{{ user.username }} Dashboard</h2>
            <p>{{ alert }}</p>
            <table>
                <caption>User actions</caption>
                <tr>
                    <th id="full_name">Full Name</th>
                    <th id="user_email">User Email</th>
                    <th id="users_tatus">Status</th>
                </tr>
                <tr>
                    <td>{{ user.person.firstname+' '+user.person.lastname }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.status }} </td>
                </tr>
            </table>
        </template>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
    name: 'dashboard',
    components: {
        
    },

    computed: {
        ...mapGetters ({
            authenticated: 'auth/authenticated',
            user: 'auth/user',
            alert: 'auth/alert',
        })
    },
}
</script>
