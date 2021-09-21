<template>
    <div>
        <template>
            <h2>Settings</h2>
            <p>{{ alert }}</p>
            <div>
                <b-table striped hover :items="users" :fields="[
                    { key: 'person.firstname', label: 'First Name' },
                    { key: 'person.lastname', label: 'last Name' },
                    { key: 'username', label: 'Username'  },
                    { key: 'email', label: 'email'  },
                    { key: 'person.organization', label: 'Organization' },
                    { key: ':href', label: 'Action'},
                    'join_date',
                    ]">
                    <b-table-column>
                    <button class="button is-small is-light">
                        <b-icon icon="edit" size="is-small"></b-icon>
                    </button>
                    <button class="button is-small is-danger">
                        <b-icon icon="delete" size="is-small"></b-icon>
                    </button>
                    </b-table-column>
                </b-table>
            </div>
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
            users: 'users/list',
            alert: 'auth/alert',
        })
    },
    data() {
      return {
        // Note `isActive` is left out and will not appear in the rendered table
        // fields: ['firstname', 'lastname', 'age'],
        // items: [users]
      }
    },

}
</script>