<template>
    <div>
        <template>
            <h2>Detailed Report</h2>
        </template>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
    name: 'detailedReport',
    components: {
        
    },
    computed: {
        ...mapGetters ({
            authenticated: 'auth/authenticated',
            detailedReport: 'endpoints/payload'
        })
    },
}
</script>
