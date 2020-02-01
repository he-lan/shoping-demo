<template>
  <div>
    <!-- 顶部滑动条区域 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item', item.id==0 ? 'mui-active': '']"
            v-for="item in cates"
            :key="item.id"
            @click="getPhotoListByCateId(item.id)"
          >{{item.title}}</a>
        </div>
      </div>
    </div>

    <!--图片列表区域  -->
    <ul class="photo-list">
      <router-link v-for="item in list" :to="'/home/photoinfo/'+item.id" :key="item.id" tag="li">
        <img v-lazy="item.img_url" />
        <div class="info">
          <h1 class="info-title">{{item.title}}</h1>
          <div class="info-body">{{item.content}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
// 导入mui得js文件
import mui from "../../../static/mui/dist/js/mui.min.js";

export default {
  data() {
    return {
      cates: [], //所有分类的列表
      list: [] //图片列表
    };
  },
  methods: {
    getAllCategory() {
      axios.get("api/getimgcategory").then(result => {
        if (result.data.status === 0) {
          //   console.log(result.data);
          result.data.message.unshift({ title: "全部", id: 0 });
          this.cates = result.data.message;
        }
      });
    },
    getPhotoListByCateId(cateId) {
      // 根据分类id获取图片列表
      axios.get("api/getimages/" + cateId).then(result => {
        if (result.data.status === 0) {
          console.log(result.data);
          this.list = result.data.message;
        }
      });
    }
  },
  created() {
    this.getAllCategory();
    this.getPhotoListByCateId(0);
  },
  mounted() {
    //当组件中的dom结构渲染好并放到页面中后，会执行这个钩子函数
    //   如果要操作元素，最好在mounted里面
    // 初始化滑动控件
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>

<style lang="scss" scoped>
* {
  touch-action: pan-y; //消除chrome提高滑动流畅度会出现的警告
}
.photo-list {
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
  li {
    position: relative;
    margin-bottom: 10px;
    background-color: #ccc;
    text-align: center;
    box-shadow: 0 0 9px #999;
    img {
      width: 100%;
      vertical-align: middle; //解决图片三像素问题
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    .info {
      background-color: rgba(0,0,0,0.4);
      position: absolute;
      bottom: 0px;
      color: white;
      max-height: 84px;
      // text-align: left;
      .info-title {
        font-size: 14px;
      }
      .info-body {
        font-size: 13px;
      }
    }
  }
}
</style>