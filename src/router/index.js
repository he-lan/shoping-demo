import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import HomeContainer from '@/components/tabbar/HomeContainer'
import MemberContainer from '@/components/tabbar/MemberContainer'
import SearchContainer from '@/components/tabbar/SearchContainer'
import ShopcarContainer from '@/components/tabbar/ShopcarContainer'
import NewsList from '@/components/news/NewsList'
import NewsInfo from '@/components/news/NewsInfo'
import PhotoList from '@/components/photos/PhotoList'
import PhotoInfo from '@/components/photos/PhotoInfo'
import GoodsList from '@/components/goods/GoodsList'
import GoodsInfo from '@/components/goods/GoodsInfo'
import GoodsDesc from '@/components/goods/GoodsDesc'
import GoodsComment from '@/components/goods/GoodsComment'

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
        }, {
            path: '/home/newslist',
            component: NewsList
        }, {
            path: '/home/newsinfo/:id',
            component: NewsInfo
        }, {
            path: '/home/photolist',
            component: PhotoList
        }, {
            path: '/home/photoinfo/:id',
            component: PhotoInfo
        }, {
            path: '/home/goodslist',
            component: GoodsList
        }, {
            path: '/home/goodsinfo/:id',
            name: 'goodsinfo',
            component: GoodsInfo
        }, {
            path: '/home/goodsdesc/:id',
            component: GoodsDesc,
            name: 'goodsdesc'
        }, {
            path: '/home/goodscomment/:id',
            component: GoodsComment,
            name: 'goodscomment'
        }
    ],
    linkActiveClass: 'mui-active' //覆盖默认的路由高亮的类：‘router-link-active’
})