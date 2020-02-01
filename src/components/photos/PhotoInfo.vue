<template>
  <div class="photoinfo-container">
    <h3>{{photoinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间:{{photoinfo.add_time|dateFormat}}</span>
      <span>点击：{{photoinfo.click}}次</span>
    </p>
    <hr />

    <!-- 缩略图区域 -->
    <div class="thumbs">
      <!-- <img class="preview-img" v-for="(item,index) in list" :src="item.src" 
      height="100" @click="$preview.open(index,list)" :key="item.src">-->

      <vue-preview :slides="list" height="50" class="imgPrev"></vue-preview>
    </div>

    <!-- 图片内容区域 -->
    <div class="content" v-html="photoinfo.content"></div>
    <!-- 放置一个现成的评论子组件 -->
    <cmt-box :id="id"></cmt-box>
  </div>
</template>

<script>
import axios from 'axios'
//导入评论子组件
import comment from "../subcomponents/comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id, //从路由中获取到的图片id
      photoinfo: {}, //图片详情
      list: [] //缩略图数组
    };
  },
  created() {
    this.getPhotoInfo();
    this.getThumbs();
  },
  methods: {
    getPhotoInfo() {
      // 获取图片详情
      axios.get("api/getimageInfo/" + this.id).then(result => {
        if (result.data.status === 0) {
          this.photoinfo = result.data.message[0];
        }
      });
    },
    getThumbs() {
      //获取缩略图
      axios.get("api/getthumimages/" + this.id).then(result => {
        if (result.data.status === 0) {
          result.data.message.forEach(item => {
            //循环每个图片的数据，补全图片的宽和高
            item.w = 600;
            item.h = 400;
            item.src = item.src; //大图路径
            item.msrc = item.src; //原小图路径
          });
          //把完整的数据保存到list中
          this.list = result.data.message;
        }
      });
    }
  },
  components: {
    //注册评论子组件
    "cmt-box": comment
  }
};
</script>

<style lang="scss" >
.photoinfo-container {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .content {
    font-size: 13px;
    line-height: 30px;
  }
}
.thumbs {
  .imgPrev {
    .my-gallery {
      figure {
        display: inline-block;
        margin: 8px;
        img {
          width: 80px;
          height: 60px;
          margin: 5px;
          box-shadow: 0 0 8px #999;
        }
      }
    }
  }
}
</style>

