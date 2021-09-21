<template>
    <div>
        <b-navbar v-if="authenticated" type="dark" variant="dark">
            <b-container>
                <b-navbar-nav>
                    <b-navbar-brand>RC Tool</b-navbar-brand>
                        <b-nav-item href="#" @click.prevent="getGoals">Dashboard</b-nav-item>
                        <b-nav-item to="goals">Goals</b-nav-item>
                        <b-nav-item to="investments">Investments</b-nav-item>
                        <b-nav-item to="activities">Activities</b-nav-item>
                        <b-nav-item to="inputs">Inputs</b-nav-item>
                        <b-nav-item href="#" @click.prevent="getSettings">Settings</b-nav-item>
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
                    <b-navbar-brand>RC Tool</b-navbar-brand>
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
            getSettingsAction: 'settings/getSettings',
            getGoalsAction: 'dashboard/getGoals'
        }),

        signOut () {
            this.signOutAction().then(() => {
                this.$router.replace({
                    name: 'home'
                })
            })
        },
        getSettings () {
            this.getSettingsAction().then(() => {
                this.$router.replace({
                    name: 'settings'
                })
            })
        },
        getGoals () {
            this.getGoalsAction().then(() => {
                this.$router.replace({
                    name: 'dashboard'
                })
            })
        }
    }
}
</script>