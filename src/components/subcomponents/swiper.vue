<template>
    <div>
           <mt-swipe :auto="4000">
                         <!-- 将来谁使用此轮播图组件，谁为我们传递lunbotuList -->
          <!-- 此时，lunbotuList应该是父组件向子组件传值来设置 -->
      <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
        <img :src="item.img"  :class="{'full':isfull}" alt />
      </mt-swipe-item>
    </mt-swipe>
    </div>
</template>
<script>
export default {
    props:["lunbotuList","isfull"],
    data(){
        return{

        }
    },
    methods:{

    },
}
</script>
<style lang="scss" scoped>
    .mint-swipe {
  height: 200px;
  .mint-swipe-item {
      text-align: center;
    // &:nth-child(1) {
    //   background-color: pink;
    // }
    // &:nth-child(2) {
    //   background-color: cyan;
    // }
    // &:nth-child(3) {
    //   background-color: yellowgreen;
    // }
    // &:nth-child(4) {
    //   background-color: green;
    // }
    img {
    //   width: 100%;
      height: 100%;
    }
  }
}
.full{
    width: 100%;
}
</style>