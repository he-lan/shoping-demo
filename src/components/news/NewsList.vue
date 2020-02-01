<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
        <router-link :to="'/home/newsinfo/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url" />
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <span>发表时间：{{item.add_time | dateFormat}}</span>
              <span>点击：{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      newslist: [] //新闻列表
    };
  },
  methods: {
    getNewsList() {
      //   获取新闻列表
      axios.get("/api/getnewslist").then(result => {
        if (result.data.status === 0) {
          //    console.log(result.data.message)
          this.newslist = result.data.message;
        } else {
          Toast("获取新闻列表失败");
        }
      });
    }
  },
  created() {
    this.getNewsList();
  }
};
</script>

<style lang="scss" scoped>
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      display: flex;
      justify-content: space-between;
      span {
        font-size: 12px;
        color: #226aff;
      }
    }
  }
}
</style>