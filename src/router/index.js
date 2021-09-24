import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from '../views/SignIn.vue'
import ActivityReport from '../views/ActivityReport.vue'
import DetailedReport from '../views/DetailedReport.vue'

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
        path: '/activityreport',
        name: 'activityreport',
        component: ActivityReport,
    },
    {
        path: '/detailedreport',
        name: 'detailedreport',
        component: DetailedReport,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    const currentUser = store.getters['auth/authenticated']
    if (to.name !== 'signin' && !currentUser) next({ name: 'signin' })
    else if(to.name=='signin' && currentUser){ next('/')}
    else next()
})

export default router
