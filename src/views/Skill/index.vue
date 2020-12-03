<template>
    <div class="skill">
         <van-pull-refresh v-model="isLoading" :head-height="80" @refresh="onRefresh">
          <!-- 下拉提示，通过 scale 实现一个缩放效果 -->
  <template #pulling="props">
    <img
      class="doge"
      src="../../assets/Recommend/huaichuan1.png"
      :style="{ transform: `scale(${props.distance / 80})` }"
    />
  </template>

  <!-- 释放提示 -->
  <template #loosing>
    <img class="doge" src="../../assets/Recommend/huaichuan2.png" />
  </template>

  <!-- 加载提示 -->
  <template #loading>
    <img class="doge" src="../../assets/Recommend/huaichuan1.png" />
  </template>
        <van-row class="huan">
            <van-col span="24">
                <img src="../../assets/skill/1.png" width="100%"/>
            </van-col>
            <van-col span="24">
                <img src="../../assets/skill/2.png" width="100%"/>
            </van-col>
             <van-col span="24">
                <img src="../../assets/skill/3.png" width="100%"/>
            </van-col>
             <van-col span="24">
                <img src="../../assets/skill/4.png" width="100%"/>
            </van-col>
             <van-col span="24">
                <img src="../../assets/skill/5.png" width="100%"/>
            </van-col>
             <van-col span="24">
                <img src="../../assets/skill/6.png" width="100%"/>
            </van-col>
             <van-col span="24">
                <img src="../../assets/skill/7.png" width="100%"/>
            </van-col>
             <van-col span="24">
                <img src="../../assets/skill/8.png" width="100%"/>
            </van-col>
             <van-col span="24">
                <img src="../../assets/skill/9.png" width="100%"/>
            </van-col>
             <van-col span="24">
                <img src="../../assets/skill/10.png" width="100%"/>
            </van-col>
             <van-col span="24">
                <img src="../../assets/skill/11.png" width="100%"/>
            </van-col>
             <van-col span="24">
                <img src="../../assets/skill/12.png" width="100%"/>
            </van-col>
             <van-col span="24">
                <img src="../../assets/skill/13.png" width="100%"/>
            </van-col>
             <van-col span="24">
                <img src="../../assets/skill/14.png" width="100%"/>
            </van-col>
             <van-col span="24">
                <img src="../../assets/skill/15.png" width="100%"/>
            </van-col>
             <van-col span="24">
                <img src="../../assets/skill/16.png" width="100%"/>
            </van-col>
             <van-col span="24">
                <img src="../../assets/skill/17.png" width="100%"/>
            </van-col>
             <van-col span="24">
                <img src="../../assets/skill/18.png" width="100%"/>
            </van-col>
             <van-col span="24">
                <img src="../../assets/skill/19.png" width="100%"/>
            </van-col>

             <van-col span="24">
                <img src="../../assets/skill/20.png" width="100%"/>
            </van-col>
             <van-col span="24">
                <img src="../../assets/skill/21.png" width="100%"/>
            </van-col>
             <van-col span="24">
                <img src="../../assets/skill/22.png" width="100%"/>
            </van-col>
             <van-col span="24">
                <img src="../../assets/skill/23.png" width="100%"/>
            </van-col>
             <van-col span="24">
                <img src="../../assets/skill/24.png" width="100%"/>
            </van-col>
             <van-col span="24">
                <img src="../../assets/skill/25.png" width="100%"/>
            </van-col>
             <van-col span="24">
                <img src="../../assets/skill/26.png" width="100%"/>
            </van-col>
             <van-col span="24">
                <img src="../../assets/skill/27.png" width="100%"/>
            </van-col>
             <van-col span="24">
                <img src="../../assets/skill/28.png" width="100%"/>
            </van-col>
             <van-col span="24">
                <img src="../../assets/skill/29.png" width="100%"/>
            </van-col>

             
             <van-col span="24">
                <img src="../../assets/skill/30.png" width="100%"/>
            </van-col>
            
             <van-col span="24">
                <img src="../../assets/skill/31.png" width="100%"/>
            </van-col>
           
             <van-col span="24">
                <img  src="../../assets/skill/32.png" width="100%" />
            </van-col>

        </van-row>
         </van-pull-refresh>
    </div>
</template>
<script>
export default {
    name:'skill',
     data() {
      return {
        isLoading: false,
      }
    },
    methods: {
       onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
      }, 1000);
    },
    },
}
</script>
<style scoped>
.huan{
    display: flex;
   flex-wrap: wrap;
}
.skill{
    width: 100%;
     margin-top: 47px;
    margin-bottom: 100px;
    border-top: 1px solid #b1b1b1;
}
</style>