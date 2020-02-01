<template>
  <div class="mui-numbox" data-numbox-min="1" style="height:25px;">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" :value="initcount" ref="numbox" @change="countChanged" readonly/>
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
  <!-- 分析：子组件什么时候把数据传给父组件 -->
  <!--  -->
</template>
<script>
import mui from "../../../static/mui/dist/js/mui.min.js";
export default {
  mounted() {
    // 初始化数字选择框
    mui(".mui-numbox").numbox();
  },
  props:["initcount","goodsid"],
  methods:{
      countChanged(){
          //数量改变了
          console.log(this.$refs.numbox.value)
        //   每当数量值改变，立即把最新的数量同步到购物车的store中，覆盖之前的数量值
          this.$store.commit('updateGoodsInfo',{
              id:this.goodsid,
              count:this.$refs.numbox.value
          })

    }
  }
};
</script>
<style lang="scss" scoped>
</style>