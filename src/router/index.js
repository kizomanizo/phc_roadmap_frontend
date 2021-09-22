import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from '../views/SignIn.vue'
import Reports from '../views/Reports.vue'
import Goals from '../views/Goals.vue'
import Initiatives from '../views/Initiatives.vue'
import Activities from '../views/Activities.vue'
import Inputs from '../views/Inputs.vue'

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
        path: '/reports',
        name: 'reports',
        component: Reports,
    },
    {
        path: '/goals',
        name: 'goals',
        component: Goals,
    },
    {
        path: '/initiatives',
        name: 'initiatives',
        component: Initiatives,
    },
    {
        path: '/activities',
        name: 'activities',
        component: Activities,
    },
    {
        path: '/inputs',
        name: 'inputs',
        component: Inputs,
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
