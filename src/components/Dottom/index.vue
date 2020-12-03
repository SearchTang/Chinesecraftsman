<template>
    <div class="dottom">
          <van-tabbar v-model="active">
            <van-tabbar-item icon="wap-home" to="/Mian1">首页</van-tabbar-item>
            <van-tabbar-item icon="cash-back-record" to="/Jishi">集市</van-tabbar-item>
            <van-tabbar-item icon="chat-o">社区</van-tabbar-item>
            <van-tabbar-item icon="comment-o">消息</van-tabbar-item>
            <van-tabbar-item icon="like-o">我的</van-tabbar-item>
          </van-tabbar>          
    </div>
</template>
<script>
export default {
    name:"dottom",
     data() {
        return {
          active: 0,
        };
  },
  methods:{
      shouye(){
          this.$router.push({
              path:'/Mian'
          })
      },
      jishu(){
           this.$router.push({
              path:'/Mian1'
          })
      }
  }

}
</script>
<style scoped>
.dottom{
    width: 100%;
    height: 30px;
    position:fixed;
    bottom: 0;
    background: #050c1f;
    z-index: 10;
}
.van-tabbar {
    z-index: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    box-sizing: content-box;
    width: 100%;
    height: 50px;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
    background-color: #050c1f;
}
.van-tabbar-item--active {
    color: #fff;
    background-color: #050c1f;
}
.van-tabbar-item--active>>>.van-tabbar-item__icon{
    color: red;
}
</style>