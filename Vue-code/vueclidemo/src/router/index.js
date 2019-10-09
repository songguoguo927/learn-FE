import Vue from 'vue'
import Router from 'vue-router'
// @表示src
import Apple from '@/components/Apple'
import Banana from '@/components/Banana'
import MyTransfer from '@/components/MyTransfer'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
    mode: 'history', //去掉hash的#

    routes: [{
            path: '/',
            redirect: '/transfer'
        },
        {
            path: '/apple',
            // path:'/apple/:color/detail/:type',
            component: Apple
        },
        {
            path: '/banana',
            component: Banana
        },
        {
            path: '/transfer',
            component: MyTransfer
        }
    ]
})