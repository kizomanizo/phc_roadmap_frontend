<template>
    <div>
        <template>
            <h2>Other Report</h2>
        </template>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
    name: 'otherReport',
    components: {
        
    },
    computed: {
        ...mapGetters ({
            authenticated: 'auth/authenticated',
            otherReport: 'endpoints/payload'
        })
    },
}
</script>
