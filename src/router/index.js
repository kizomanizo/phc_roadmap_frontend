import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from '../views/SignIn.vue'
import Dashboard from '../views/Dashboard.vue'
import Form from '../views/Form.vue'
import User from '../views/Users.vue'
import Settings from '../views/Settings.vue'
import store  from '@/store'

Vue.use(VueRouter)
    const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/signin',
        name: 'signin',
        component: SignIn
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
    },
    {
        path: '/settings',
        name: 'settings',
        component: Settings,
    },
    {
        path: '/form',
        name: 'form',
        component: Form,
    },
    {
        path: '/user',
        name: 'user',
        component: User,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.name !== 'signin' && !store.getters['auth/authenticated']) next({ name: 'signin' }) 
    else next()
})

export default router
