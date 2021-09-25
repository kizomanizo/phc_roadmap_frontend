<template>
    <div>
        <b-navbar v-if="authenticated" type="dark" variant="dark">
            <b-container>
                <b-navbar-nav>
                    <b-navbar-brand>Roadmap-Costing Tool</b-navbar-brand>
                    <b-nav-item v-if="$route.name!='activityreport'" href="#" @click.prevent="getActivityReport">Activity Report</b-nav-item>
                    <b-nav-item href="#" v-if="$route.name!='detailedreport'" @click.prevent="getDetailedReport">Detailed Report</b-nav-item>
                    <b-nav-item href="#" v-if="$route.name!='otherreport'" @click.prevent="getOtherReport">Other Report</b-nav-item>
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
        <b-alert v-if="alert==true" variant="info" show>{{ message }}</b-alert>
        <b-alert v-if="authAlert==true" variant="danger" show>{{ authMessage }}</b-alert>
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
            authAlert: 'auth/alert',
            message: 'endpoints/message',
            authMessage: 'auth/message',
        }),
    },

    methods: {
        ...mapActions ({
            signOutAction: 'auth/signOut',
            getActivityReportAction: 'endpoints/getActivityReport',
            getDetailedReportAction: 'endpoints/getDetailedReport',
            getOtherReportAction: 'endpoints/getOtherReport',
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
        getOtherReport () {
            this.getOtherReportAction().then(() => {
                this.$router.replace({
                    name: 'otherreport'
                })
            })
        },
    }
}
</script>