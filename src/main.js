// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
Vue.use(Vuex) //注册vuex到vue中


// 按需导入mint-ui中的组件
// import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.use(Lazyload)
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 导入mui的样式

import '../static/mui/dist/css/mui.min.css'
import '../static/mui/dist/css/icons-extra.css'

axios.defaults.baseURL = 'http://www.liulongbin.top:3005'

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
Vue.prototype.axios = axios

// 安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// 格式化时间
import moment from 'moment'
Vue.filter('dateFormat', (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") => {
    return moment(dataStr).format(pattern)
})

// 当每次进入网站肯定会调用main.js,在刚调用的时候，先从本地存储中，把购物车数据读出来放到store中
var car = JSON.parse(localStorage.getItem('car') || [])
    // new 一个Vuex实例，得到一个数据仓储对象
const store = new Vuex.Store({
        state: {
            // 可以把state想象成组件中的data，专门用来存储数据
            // 如果在组件中想要访问store中的数据，职能通过this.$store.state.***来访问
            car: car //[ //购物车中商品的数据，在car数组中存储一些商品的对象
                // {
                //     id:商品的id,
                //     count: 0, //商品数量
                //     price:0 , //商品单价
                //     selected:false //商品在购物车中是否被选中
                // }
                // ]
        },
        mutations: {
            // 注意：如果要操作store中的state值，只能通过调用mutations提供的方法才能操作对应的数据，不推荐直接操作state中的数据，因为万一导致了数据的紊乱，不能快速定位到错误的原因，因为每个组件都可能有操作数据的方法
            // 注意：如果组件想要调用mutation中的方法，只能使用this.$store.commit("方法名")
            // 这种调用mutation方法的格式，和this.$emit("父组件传递过来的方法名")调用父组件方法名很像
            // 注意：mutation的函数参数列表中最多只支持两个参数，其中参数1是state状态，参数2是通过commit提交过来的参数，（多个参数可以封装为数组或者对象等）
            addToCar(state, goodsinfo) {
                // 点击加入购物车，把商品信息保存到store中的car上
                // 如果购物车中之前就已经有这个对应的商品了，那么只要更新数量
                // 如果没有，则直接把商品数据push到car中即可
                var flag = false; //假设购物车中没有找到对应的商品
                state.car.some(item => {
                        if (item.id == goodsinfo.id) {
                            item.count += parseInt(goodsinfo.count);
                            flag = true;
                            return true;
                        }
                    })
                    // 如果最终循环完毕。得到的flag还是false，则把商品数据直接push到car中
                if (!flag) {
                    state.car.push(goodsinfo)
                }
                //当更新car之后，把car数组存储到本地的localStorage中
                localStorage.setItem('car', JSON.stringify(state.car))

            },
            updateGoodsInfo(state, goodsinfo) {
                //修改购物车中商品数量值
                state.car.some(item => {
                        if (item.id == goodsinfo.id) {
                            item.count = parseInt(goodsinfo.count)
                            return true;
                        }
                    })
                    // 当修改完商品的数量，把最新的数量保存到本地存储中
                localStorage.setItem('car', JSON.stringify(state.car))
            },
            removeFormCar(state, id) {
                // 根据id，从store中的购物车中删除对应的那条商品的数据
                state.car.some((item, i) => {
                        if (item.id == id) {
                            state.car.splice(i, 1)
                            return true;
                        }
                    })
                    // 将删除完毕后的最新的购物车数据，同步到本地存储中
                localStorage.setItem('car', JSON.stringify(state.car))
            },
            updateGoodsSelected(state, info) {
                state.car.some(item => {
                        if (item.id == info.id) {
                            item.selected = info.selected
                        }
                    })
                    // 把最新的购物车商品状态保存到store中去
                localStorage.setItem('car', JSON.stringify(state.car))
            }
        },
        getters: {
            // 注意：这个getters只负责对外提供数据，不负责修改数据，如果想要修改state中的数据，去找mutations
            // getters中的方法和组件中的过滤器比较类似，因为过滤器和getters都没有修改原数据，都是把原数据做了一层包装提供给了调用者；
            // getters也和computed比较像，只要state中的数据发生了变化，那么如果getters正好也引用了这个数据，那么就会立即触发getters的重新求值；
            // getters相当于计算属性也相当于filters
            getAllCount(state) {
                var c = 0;
                state.car.forEach(item => {
                    c += item.count;
                })
                return c;
            },
            getGoodsCount(state) {
                var o = {};
                state.car.forEach(item => {
                    o[item.id] = item.count;
                })
                return o
            },
            getGoodsSelected(state) {
                var o = {};
                state.car.forEach(item => {
                    o[item.id] = item.selected
                })
                return o;
            },
            getGoodsCountAndAmount(state) {
                var o = {
                    count: 0, //勾选的数量
                    amount: 0, //勾选的总价
                };
                state.car.forEach(item => {
                    if (item.selected) {
                        o.count += item.count;
                        o.amount += item.price * item.count;
                    }
                })
                return o;
            }
        }
    })
    // 总结
    // 1.state中的数据不能直接修改，如果想要修改必须通过mutations
    // 2.如果组件想要直接从state上获取数据，需要this.$store.state.***
    // 3.如果组件想要修改数据，必须使用mutations提供的方法，需要通过this.$store.commit('方法名称',唯一的一个参数)
    // 4.如果store中state上的数据，在对外提供的时候，需要做一层包装，那么推荐使用getters，如果需要使用getters，则用this.$store.getters.***

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    store, //将vuex创建的store挂载到vm实例上，只要挂载到了vm上，任何组件都能使用store来存数据
})