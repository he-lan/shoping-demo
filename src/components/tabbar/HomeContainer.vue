<template>
  <div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
        <img :src="item.img" alt />
      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格到六宫格的改造 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9 ">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../../static/images/icons/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <img src="../../../static/images/icons/menu2.png" alt="">
            <!-- <span class="mui-badge">5</span> -->
          <div class="mui-media-body">图片分享</div>
        </router-link> 
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodslist">
          <img src="../../../static/images/icons/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../../static/images/icons/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../../static/images/icons/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../../static/images/icons/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
     
    </ul>
  </div>
</template>

<script>
import axios from "axios";

import { Toast } from "mint-ui";
export default {
  data() {
    return {
      lunbotuList: [  //保存轮播图的数组
        {
          id:1,
          img:'../../../static/images/lunbotu/about2.jpg'
        },{
          id:2,
          img:'../../../static/images/lunbotu/pic03.jpg'
        },{
          id:4,
          img:'../../../static/images/lunbotu/pic08.jpg'
        },{
          id:3,
          img:'../../../static/images/lunbotu/pic07.jpg'
        }
      ] 
    };
  },
  methods: {
    // getLunbotu() {
    //   axios.get("http://www.liulongbin.top:3005/api/getlunbo").then(result => {
    //     console.log(result.data.message);
    //     if (result.data.status == 0) {
    //       this.lunbotuList = result.data.message;
    //       // console.log("ok")
    //     } else {
    //       Toast("加载轮播图失败");
    //     }
    //   });
    // }
  },
  created() {
    // this.getLunbotu();
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: pink;
    }
    &:nth-child(2) {
      background-color: cyan;
    }
    &:nth-child(3) {
      background-color: yellowgreen;
    }
    &:nth-child(4) {
      background-color: green;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.mui-grid-view.mui-grid-9 {
    background-color: #fff;
   border: none;
   img{
       width: 60px;
       height: 70px;
   }
   .mui-media-body{
       font-size: 13px;
   }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: none;

}
</style>