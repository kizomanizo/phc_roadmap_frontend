<template>
    <div>
        <template>
            <h2>Activities</h2>
            <p>{{ message }}</p>
        </template>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
    name: 'activities',
    components: {
        
    },
    computed: {
        ...mapGetters ({
            authenticated: 'auth/authenticated',
            alert: 'auth/alert',
            message: 'auth/message',
            activities: 'endpoints/payload'
        })
    },
}
</script>
