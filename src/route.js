import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
    routes: [{
            //     点击首页的时候，需要在二级路由中显示，所以要加显示二级路由的routerview的组件，
            //     也就是Home组件,默认重定向为子路由
            path: '/',
            // component: () => import('@/components/Home.vue'),
            redirect: '/login',
            // children: [{
            //     path: 'homepage',
            //     component: () => import('@/components/HomePage/HomePage.vue'),
            //     meta: {
            //         name: '项目添加'
            //     }
            // }, ]
        },
        {
            path: '/login',
            // hiddle: true,
            component: () => import('./components/Login/Login.vue'),
            meta: {
                name: '登录'
            }
        },
        // 二级路由坑在home.vue中放着，所以要在home中放着chilren属性，只要匹配到children下面的
        // path就在Home坑中显示
        {
            path: '/home',
            component: () => import('@/components/Home.vue'),
            meta: {
                name: '主页'
            },
            children: [{
                    path: '/project/projectAdd',
                    component: () => import('@/components/Project/ProjectAdd.vue'),
                    meta: {
                        name: '项目添加'
                    }
                },
                {
                    path: '/project/projectList',
                    component: () => import('@/components/Project/ProjectList.vue'),
                    meta: {
                        name: '项目列表'
                    }
                }
            ]
        }
        // {
        //     path: '/project',
        //     component: () => import('@/components/Home.vue'),
        //     meta: {
        //         name: '主页'
        //     },
        //     children: [{
        //         path: 'projectAdd',
        //         component: () => import('@/components/Project/ProjectAdd.vue'),
        //         meta: {
        //             name: '项目添加'
        //         }
        //     }, ]
        // }
    ]
})

// 挂载路由导航守卫,必须在登录的状态下才能进入home

router.beforeEach((to, from, next) => {
    // to 表示将要访问的路径
    // from代表从哪个路径调转过来
    // next是一个函数，表示放行
    // next（）放行 next（'login'）强制跳转
    const tokenStr = window.sessionStorage.getItem('token')
    if (to.path === '/login') {
        return next()
    } else if (tokenStr) {
        next()
    } else {
        next('/login')
    }
})

export default router