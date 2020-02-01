<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr />
    <textarea placeholder="请输入要评论的内容" maxlength="20" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,index) in comments" :key="item.add_timme">
        <div
          class="cmt-title"
        >第{{index+1}}楼：&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dateFormat}}</div>
        <div class="cmt-body">{{item.content==='undefined'? '此用户很懒，什么都没有说':item.content}}</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import axios from "axios";
import Qs from 'qs' 
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      pageIndex: 1, //默认展示第一页数据
      comments: [],
      msg:'', //评论输入的内容
    };
  },
  methods: {
    getComments() {
      axios
        .get("/api/getcomments/" + this.id + "?pageindex=" + this.pageIndex)
        .then(result => {
          if (result.data.status == 0) {
            // console.log(result);
            // this.comments = result.data.message;
            // 每当获取新评论数据的时候，不要把老数据清空覆盖，而是应该以老数据拼接上新数据
            this.comments=this.comments.concat(result.data.message);
          } else {
            Toast("获取评论失败");
          }
        });
    },
    getMore(){
        //加载更多
        this.pageIndex++;
        this.getComments();
    },
    postComment(){ //发表评论
    // post参数1：请求的url地址
    // 参数2：提交给服务器的数据对象{content：this.msg}
    // 参数3：定义提交时候表单中数据的格式{emulateJSON：true}
    // 校验是否为空内容
    if(this.msg.trim().length===0){
      return Toast("评论内容不能为空！")
    }
    var qs = require('qs');
      axios.post('api/postcomment/'+this.$route.params.id,qs.stringify({content:this.msg.trim()},{ indices: false }),
      // {"Content-Type":" application/x-www-form-urlencoded"}
      ).then(result=>{
        // axios({
        // headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' 
        // },
        // transformRequest: [function(data) {//在请求之前对data传参进行格式转换
        //     data = Qs.stringify(data)
        //     return data
        // }],
        // method: "POST",
        // url: 'api/postcomment/'+this.$route.params.id,
        // data:{"content":this.msg.trim()}
        // }).then(result=>{
                // console.log(result)
        if(result.data.status===0){
          var cmt={user_name:'匿名用户',add_time:Date.now(),content:this.msg.trim()};
          this.comments.unshift(cmt);
          this.msg="";
        }
      })
      .catch(error=>{
        console.log(error)
      }
      )
    },
  },
  created() {
    this.getComments();
  },
  props: ["id"]
};
</script>

<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        background-color: #ccc;
        line-height: 30px;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>