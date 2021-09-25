import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../views/SignIn.vue'
import ActivityReport from '../views/ActivityReport.vue'
import DetailedReport from '../views/DetailedReport.vue'
import OtherReport from '../views/OtherReport.vue'

import store  from '@/store'

Vue.use(VueRouter)
    const routes = [
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
    {
        path: '/otherreport',
        name: 'otherreport',
        component: OtherReport,
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
    else if (to.name === 'signin' && currentUser) next({ name: 'activityreport' })
    else next()
})

export default router
