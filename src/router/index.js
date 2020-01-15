import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import HomeContainer from '@/components/tabbar/HomeContainer'
import MemberContainer from '@/components/tabbar/MemberContainer'
import SearchContainer from '@/components/tabbar/SearchContainer'
import ShopcarContainer from '@/components/tabbar/ShopcarContainer'

Vue.use(Router)

export default new Router({
    routes: [
        // {
        //   path: '/',
        //   name: 'HelloWorld',
        //   component: HelloWorld
        // }
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: HomeContainer,
        }, {
            path: '/member',
            component: MemberContainer,
        }, {
            path: '/search',
            component: SearchContainer
        }, {
            path: '/shopcar',
            component: ShopcarContainer
        }
    ],
    linkActiveClass: 'mui-active' //覆盖默认的路由高亮的类：‘router-link-active’
})