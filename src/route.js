import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
    routes: [{
            path: '/',
            redirect: '/login',
            hiddle: true,
            meta: {
                name: '主页'
            }
        },
        {
            path: '/login',
            hiddle: true,
            component: () => import('./components/Login.vue'),
            meta: {
                name: '登录'
            }
        },
        {
            path: '/home',
            component: () => import('./components/Home.vue'),
            meta: {
                name: '用户操作'
            },
            children: [{
                    aaa: '/home/',
                    path: 'user/userManager',
                    component: () => import('./components/user/Userman.vue'),
                    meta: {
                        name: '用户管理'
                    }
                },
                {
                    aaa: '/home/',
                    path: 'user/userManager1',
                    component: () => import('./components/user/Users.vue'),
                    meta: {
                        name: '用户管理1'
                    }
                }
            ]
        },
        {
            path: '/user',
            component: () => import('./components/Home.vue'),
            meta: {
                name: '权限管理'
            },
            children: [{
                    aaa: '/user/',
                    path: 'user/userManager',
                    component: () => import('./components/user/Userman.vue'),
                    meta: {
                        name: '用户管理'
                    },
                    children: [{
                        path: 'user/userManager/aaaa',
                        component: () => import('./components/user/Userman.vue'),
                        meta: {
                            name: '用户管理下面的'
                        },
                    }]
                },
                {
                    aaa: '/user/',
                    path: 'user/userManager1',
                    component: () => import('./components/user/Users.vue'),
                    meta: {
                        name: '用户管理1'
                    }
                }
            ]
        },
        {
            path: '/Manage',
            component: () => import('./components/Home.vue'),
            meta: {
                name: '商品管理'
            },
            children: [{
                    aaa: '/Manage/',
                    path: 'user/userManager',
                    component: () => import('./components/user/Userman.vue'),
                    meta: {
                        name: '垃圾商品'
                    }
                },
                {
                    aaa: '/Manage/',
                    path: 'user/userManager1',
                    component: () => import('./components/user/Users.vue'),
                    meta: {
                        name: '湿商品'
                    }
                }
            ]
        }
    ]
})
export default router