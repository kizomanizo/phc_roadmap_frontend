<template>
    <div>
        <template>
            <h2>{{ user }} Dashboard</h2>
            <p>{{ message }}</p>
            <div v-for="(goal, index) in goals" :key="goal.goal" :value="goal.value">
                <strong>{{index}}: </strong> {{goal}}
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
            user: 'auth/user',
            alert: 'auth/alert',
            message: 'auth/message',
            goals: 'dashboard/goals',
        })
    },
}
</script>
