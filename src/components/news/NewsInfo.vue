<template>
    <div class="newsinfo-container">
        <h3 class="title">{{newsinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间：{{newsinfo.add_time | dateFormat}}</span>
            <span>点击：{{newsinfo.click}}次</span>
        </p>
        <hr>
        <div class="content" v-html="newsinfo.content"></div>
    <!-- 评论子组件 -->
    <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
import axios from 'axios'
import comment from '../subcomponents/comment'
export default {
    data(){
        return{
            id:this.$route.params.id, //将url地址中传递过来的id值挂载到data上方便调用
            newsinfo:{}//新闻对象
        }
    },
    components:{
        'comment-box':comment
    },
    methods:{
        getNewsInfo(){
            axios.get('/api/getnew/'+this.id).then(result=>{
               if(result.data.status===0){
                   this.newsinfo=result.data.message[0];
//  console.log(this.newsinfo)
               }else{
                   Toast('获取新闻失败')
               }
            })
        }
    },
    created(){
        this.getNewsInfo();
    }
}
</script>

<style lang="scss" >
  .newsinfo-container{
       padding: 0 4px;
      .title{
         font-size: 16px;
         text-align: center;
         margin: 15px 0;
         color: red;
      }
      .subtitle{
          font-size: 13px;
          color: #226aff;
          display: flex;
          justify-content: space-between;
      }
      .content{
          img{
              width: 100%;
          }
      }
  }  
</style>