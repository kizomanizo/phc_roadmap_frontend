<template>
    <div>
        <b-navbar v-if="authenticated" type="dark" variant="dark">
            <b-container>
                <b-navbar-nav>
                    <b-navbar-brand>Roadmap-Costing Tool</b-navbar-brand>
                        <b-nav-item href="#" @click.prevent="getActivityReport">Activity Report</b-nav-item>
                        <b-nav-item href="#" @click.prevent="getDetailedReport">Detailed Report</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav ml="auto">
                    <b-nav-text><strong>{{ user }}</strong></b-nav-text>
                    <b-nav-item href="#" @click.prevent="signOut">Logout</b-nav-item>
                </b-navbar-nav>
            </b-container>
        </b-navbar>
        <b-navbar v-else type="dark" variant="dark">
            <b-container>
                <b-navbar-nav>
                    <b-navbar-brand>Roadmap-Costing Tool</b-navbar-brand>
                </b-navbar-nav>
                <b-navbar-nav ml="auto">
                    <b-nav-item to="signin">Login</b-nav-item>
                </b-navbar-nav>
            </b-container>
        </b-navbar>
        <b-alert v-if="alert==true" variant="danger" show>{{ message }}</b-alert>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: {
        ...mapGetters ({
            authenticated: 'auth/authenticated',
            user: 'auth/user',
            alert: 'endpoints/alert',
            message: 'endpoints/message',
        }),
    },

    methods: {
        ...mapActions ({
            signOutAction: 'auth/signOut',
            getActivityReportAction: 'endpoints/getActivityReport',
            getDetailedReportAction: 'endpoints/getDetailedReport',
        }),

        signOut () {
            this.signOutAction().then(() => {
                this.$router.replace({
                    name: 'signin'
                })
            })
        },
        getActivityReport () {
            this.getActivityReportAction().then(() => {
                this.$router.replace({
                    name: 'activityreport'
                })
            })
        },
        getDetailedReport () {
            this.getDetailedReportAction().then(() => {
                this.$router.replace({
                    name: 'detailedreport'
                })
            })
        },
    }
}
</script>