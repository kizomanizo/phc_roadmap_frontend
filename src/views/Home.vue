<template>
    <div>
        <template>
            <h2>Home</h2>
            <p>{{ message }}</p>
        </template>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
    name: 'home',
    components: {
        
    },

    computed: {
        ...mapGetters ({
            authenticated: 'auth/authenticated',
            user: 'auth/user',
            alert: 'auth/alert',
            message: 'auth/message',
        })
    },
}
</script>
