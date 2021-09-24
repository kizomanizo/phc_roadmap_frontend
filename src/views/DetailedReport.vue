<template>
    <div>
        <template>
            <h2>Goals</h2>
            <p>{{ message }}</p>
        </template>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
    name: 'goals',
    components: {
        
    },
    computed: {
        ...mapGetters ({
            authenticated: 'auth/authenticated',
            alert: 'auth/alert',
            message: 'auth/message',
            goals: 'endpoints/payload'
        })
    },
}
</script>
