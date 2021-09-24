<template>
    <div>
        <b-navbar v-if="authenticated" type="dark" variant="dark">
            <b-container>
                <b-navbar-nav>
                    <b-navbar-brand>Roadmap-Costing Tool</b-navbar-brand>
                        <b-nav-item href="#" @click.prevent="getReports">Report</b-nav-item>
                        <b-nav-item href="#" @click.prevent="getGoals">Goals</b-nav-item>
                        <b-nav-item href="#" @click.prevent="getInitiatives">Initiatives</b-nav-item>
                        <b-nav-item href="#" @click.prevent="getActivities">Activities</b-nav-item>
                        <b-nav-item href="#" @click.prevent="getInputs">Inputs</b-nav-item>
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
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: {
        ...mapGetters ({
            authenticated: 'auth/authenticated',
            user: 'auth/user',
        }),
    },

    methods: {
        ...mapActions ({
            signOutAction: 'auth/signOut',
            getReportsAction: 'endpoints/getReports',
            getGoalsAction: 'endpoints/getGoals',
            getInitiativesAction: 'endpoints/getInitiatives',
            getActivitiesAction: 'endpoints/getActivities',
            getInputsAction: 'endpoints/getInputs',
        }),

        signOut () {
            this.signOutAction().then(() => {
                this.$router.replace({
                    name: 'signin'
                })
            })
        },
        getReports () {
            this.getReportsAction().then(() => {
                this.$router.replace({
                    name: 'reports'
                })
            })
        },
        getGoals () {
            this.getGoalsAction().then(() => {
                this.$router.replace({
                    name: 'goals'
                })
            })
        },
        getInitiatives () {
            this.getInitiativesAction().then(() => {
                this.$router.replace({
                    name: 'initiatives'
                })
            })
        },
        getActivities () {
            this.getActivitiesAction().then(() => {
                this.$router.replace({
                    name: 'activities'
                })
            })
        },
        getInputs () {
            this.getInputsAction().then(() => {
                this.$router.replace({
                    name: 'inputs'
                })
            })
        },
    }
}
</script>