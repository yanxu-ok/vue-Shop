import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            redirect:'/login'
        },
        {
            path: '/login',
            component: () => import('./components/Login.vue')
        },
        {
            path: '/home',
            component: () => import('./components/Home.vue')
        }
    ]
})
export default router