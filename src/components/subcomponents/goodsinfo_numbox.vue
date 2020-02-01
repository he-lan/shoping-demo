<template>
<!-- 问题：不知道什么时候才能拿到max，但是总有一刻会得到一个max -->
<!-- 可以使用watch属性监听父组件传递过来的max值，不管watch会被触发几次，但是最后一次，但是最后一次肯定是个合法的max值 -->
  <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="max">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="1" ref="numbox" @change="countChanged" />
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
    console.log(this.max)
  },
  props:["max"],
  watch:{
    max:function(newval,oldval){
      // 使用js api设置numbox的max
      mui(".mui-numbox").numbox().setOption('max',newval)
    }
  },
  methods:{
      countChanged(){
        //   每当文本框的数据被修改的时候，立即把最新的数据通过事件调用传递给父组件
        // console.log(this.$refs.numbox.value)
        this.$emit('getcount',parseInt(this.$refs.numbox.value))
    }
  }
};
</script>
<style lang="scss" scoped>
</style>