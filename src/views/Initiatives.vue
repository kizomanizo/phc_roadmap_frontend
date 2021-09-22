<template>
    <div>
        <template>
            <h2>Initiatives</h2>
            <p>{{ message }}</p>
        </template>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
    name: 'initiatives',
    components: {
        
    },
    computed: {
        ...mapGetters ({
            authenticated: 'auth/authenticated',
            alert: 'auth/alert',
            message: 'auth/message',
            initiatives: 'endpoints/payload'
        })
    },
}
</script>
