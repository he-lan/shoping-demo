<template>
    <div class="goodsdesc-container">
       <h3>{{info.title}}</h3>
       <hr>
       <div class="content" v-html="info.content"></div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            info:{},//图文数据
        }
    },
    methods:{
        getGoodsDesc(){
            axios.get('api/goods/getdesc/'+this.$route.params.id).then(result=>{
                if(result.data.status===0){
                    this.info=result.data.message[0];
                    console.log(this.info)
                }
            })
        }
    },
    created(){
        this.getGoodsDesc();
    }
}
</script>
<style lang="scss" >
    .goodsdesc-container{
        padding: 4px;
        h3{
            font-size: 16px;
            color: #226aff;
            text-align: center;
            padding: 15px 0;
        }
        .content{
            img{
                width: 100%;
            }
        }
    }
</style>