<template>
    <div class="goods-list">
        <!-- <router-link :to="'/home/goodsinfo/'+item.id" tag="div" class="goods-item" v-for="item in goodslist" :key="item.id">
            <img :src="item.img_url" alt="图片找不到啦~~~">
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
               <p class="price">
                   <span class="now">￥{{item.sell_price}}</span>
                   <span class="old">￥{{item.market_price}}</span>
                   </p> 
               <p class="sell">
                   <span>热卖中</span>
                   <span>剩{{item.stock_quantity}}件</span>
               </p>
            </div>
        </router-link> -->
        <!-- 在网页中有两种跳转方式： -->
        <!-- 方式一：使用a标签的形式叫做标签跳转 -->
        <!-- 方式二：使用window.location.href的形式，叫做编程式 -->
          <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="goDetail(item.id)">
            <img :src="item.img_url" alt="图片找不到啦~~~">
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
               <p class="price">
                   <span class="now">￥{{item.sell_price}}</span>
                   <span class="old">￥{{item.market_price}}</span>
                   </p> 
               <p class="sell">
                   <span>热卖中</span>
                   <span>剩{{item.stock_quantity}}件</span>
               </p>
            </div>
        </div>
        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            pageindex:1,//分页的页数
            goodslist:[],
        }
    },
    methods:{
        getGoodsList(){
            //获取商品列表
            axios.get('api/getgoods?pageindex='+this.pageindex).then(result=>{
                if(result.data.status==0){
                    this.goodslist=this.goodslist.concat(result.data.message);
                }
            })
        },
        getMore(){
            // 加载更多
            this.pageindex++;
            this.getGoodsList();
        },
        goDetail(id){
            // 使用js的形式进行路由导航
            // 注意：区分this.$route和this.$router
            // 其中：this.$route是路由参数对象，所有路由中的参数，params，query都属于它
            // 其中：this.$router是一个路由导航对象，用它可以方便地使用js代码实现路由地前进后退，跳转到新的url地址
            // this.$router.push('/home/goodsinfo/'+id);
            // this.$router.push({path:'/home/goodsinfo/'+id});
            this.$router.push({name:"goodsinfo",params:{id:id}})
        }
    },
    created(){
        this.getGoodsList();
    }
}
</script>
<style lang="scss" scoped>
  .goods-list{
      display: flex;
      flex-wrap: wrap;
      padding: 7px;
      justify-content: space-between;
      .goods-item{
          padding: 2px;
          margin: 3px 0;
          width: 49%;
          border: 1px solid #ccc;
          box-shadow: 0 0 8px #ccc;
          display: flex;
          flex-direction:column;
          justify-content: space-between;
          min-height: 293px;
          img{
              width: 100%;
          }
          .title{
              font-size: 14px;
          }
          .info{
              background-color: #eee;
              p{
                  margin: 0;
                  padding: 5px;
              }
              .price{
                  .now{
                      color: red;
                      font-weight: bold;
                      font-size: 16px;
                  }
                  .old{
                      text-decoration: line-through;
                      font-size: 12px;
                      margin-left: 10px;
                  }
              }
              .sell{
                  display: flex;
                  justify-content: space-between;
                  font-size: 12px;
                  
              }
          }
      }
  }
</style>