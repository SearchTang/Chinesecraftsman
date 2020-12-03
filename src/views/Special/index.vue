<template>
    <div class="special">
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

       <van-row class="xia">
           <van-col span="1"></van-col>
           <van-col span="22">
               <div class="tiao"><img src="../../assets/Special/1.png" width="100%"/></div>
               <div class="jiao">教师节 以传击致匠心</div>
           </van-col>
           <van-col span="1"></van-col>
       </van-row>

       <van-row class="xia">
           <van-col span="1"></van-col>
           <van-col span="22">
               <div class="tiao"><img src="../../assets/Special/2.png" width="100%"/></div>
               <div class="jiao">缘定七夕 相遇爱“礼”</div>
           </van-col>
           <van-col span="1"></van-col>
       </van-row>

       <van-row class="xia">
           <van-col span="1"></van-col>
           <van-col span="22">
               <div class="tiao"><img src="../../assets/Special/3.png" width="100%"/></div>
               <div class="jiao">毕业季谢师礼首选</div>
           </van-col>
           <van-col span="1"></van-col>
       </van-row>

       <van-row class="xia">
           <van-col span="1"></van-col>
           <van-col span="22">
               <div class="tiao"><img src="../../assets/Special/4.png" width="100%"/></div>
               <div class="jiao">焚香消夏 诗意端午</div>
           </van-col>
           <van-col span="1"></van-col>
       </van-row>

       <van-row class="xia">
           <van-col span="1"></van-col>
           <van-col span="22">
               <div class="tiao"><img src="../../assets/Special/5.png" width="100%"/></div>
               <div class="jiao">618匠造好物不止五折</div>
           </van-col>
           <van-col span="1"></van-col>
       </van-row>

       <van-row class="xia">
           <van-col span="1"></van-col>
           <van-col span="22">
               <div class="tiao"><img src="../../assets/Special/6.png" width="100%"/></div>
               <div class="jiao">520新国货大赏</div>
           </van-col>
           <van-col span="1"></van-col>
       </van-row>


       <van-row class="xia">
           <van-col span="1"></van-col>
           <van-col span="22">
               <div class="tiao"><img src="../../assets/Special/7.png" width="100%"/></div>
               <div class="jiao">【母新箭好禨】</div>
           </van-col>
           <van-col span="1"></van-col>
       </van-row>

       <van-row class="xia">
           <van-col span="1"></van-col>
           <van-col span="22">
               <div class="tiao"><img src="../../assets/Special/8.png" width="100%"/></div>
               <div class="jiao">#五一劳动节#致敬每一份辛勤付出!</div>
           </van-col>
           <van-col span="1"></van-col>
       </van-row>


       <van-row class="xia">
           <van-col span="1"></van-col>
           <van-col span="22">
               <div class="tiao"><img src="../../assets/Special/9.png" width="100%"/></div>
               <div class="jiao">3.8女王驾到!</div>
           </van-col>
           <van-col span="1"></van-col>
       </van-row>

        <van-row class="xia">
           <van-col span="1"></van-col>
           <van-col span="22">
               <div class="tiao"><img src="../../assets/Special/10.png" width="100%"/></div>
               <div class="jiao">情人节|疫情可以隔离,但爱永不缺席</div>
           </van-col>
           <van-col span="1"></van-col>
       </van-row>

        <van-row class="xia">
           <van-col span="1"></van-col>
           <van-col span="22">
               <div class="tiao"><img src="../../assets/Special/11.png" width="100%"/></div>
               <div class="jiao">新年焕新</div>
           </van-col>
           <van-col span="1"></van-col>
       </van-row>

        <van-row class="xia">
           <van-col span="1"></van-col>
           <van-col span="22">
               <div class="tiao"><img src="../../assets/Special/12.png" width="100%"/></div>
               <div class="jiao">双旦礼遇</div>
           </van-col>
           <van-col span="1"></van-col>
       </van-row>

        <van-row class="xia">
           <van-col span="1"></van-col>
           <van-col span="22">
               <div class="tiao"><img src="../../assets/Special/13.png" width="100%"/></div>
               <div class="jiao">双12省钱大作战</div>
           </van-col>
           <van-col span="1"></van-col>
       </van-row>

        <van-row class="xia">
           <van-col span="1"></van-col>
           <van-col span="22">
               <div class="tiao"><img src="../../assets/Special/14.png" width="100%"/></div>
               <div class="jiao">周年庆欢乐购</div>
           </van-col>
           <van-col span="1"></van-col>
       </van-row>

        <van-row class="xia">
           <van-col span="1"></van-col>
           <van-col span="22">
               <div class="tiao"><img src="../../assets/Special/15.png" width="100%"/></div>
               <div class="jiao">双11等你来战!</div>
           </van-col>
           <van-col span="1"></van-col>
       </van-row>

        <van-row class="xia">
           <van-col span="1"></van-col>
           <van-col span="22">
               <div class="tiao"><img src="../../assets/Special/16.png" width="100%"/></div>
               <div class="jiao">喜迎国庆、爱献重阳</div>
           </van-col>
           <van-col span="1"></van-col>
       </van-row>

        <van-row class="xia">
           <van-col span="1"></van-col>
           <van-col span="22">
               <div class="tiao"><img src="../../assets/Special/17.png" width="100%"/></div>
               <div class="jiao">情满双节带礼回家</div>
           </van-col>
           <van-col span="1"></van-col>
       </van-row>

        <van-row class="xia">
           <van-col span="1"></van-col>
           <van-col span="22">
               <div class="tiao"><img src="../../assets/Special/18.png" width="100%"/></div>
               <div class="jiao">泉州首届文创展线上购</div>
           </van-col>
           <van-col span="1"></van-col>
       </van-row>

        <van-row class="xia">
           <van-col span="1"></van-col>
           <van-col span="22">
               <div class="tiao"><img src="../../assets/Special/19.png" width="100%"/></div>
               <div class="jiao">华夏匠人·父亲节|用匠心感怀，用臻品表达</div>
           </van-col>
           <van-col span="1"></van-col>
       </van-row>

        <van-row class="xia">
           <van-col span="1"></van-col>
           <van-col span="22">
               <div class="tiao"><img src="../../assets/Special/20.png" width="100%"/></div>
               <div class="jiao">华夏匠人|端午节:粽有风情万种匠有鬼是</div>
           </van-col>
           <van-col span="1"></van-col>
       </van-row>

        <van-row class="xia">
           <van-col span="1"></van-col>
           <van-col span="22">
               <div class="tiao"><img src="../../assets/Special/21.png" width="100%"/></div>
               <div class="jiao">520戏剧一幕:女子向男友逼婚，指定礼物不...</div>
           </van-col>
           <van-col span="1"></van-col>
       </van-row>

        <van-row class="xia">
           <van-col span="1"></van-col>
           <van-col span="22">
               <div class="tiao"><img src="../../assets/Special/22.png" width="100%"/></div>
               <div class="jiao">母亲节|这一天，我给妈妈带点好的</div>
           </van-col>
           <van-col span="1"></van-col>
       </van-row>

        <van-row class="xia">
           <van-col span="1"></van-col>
           <van-col span="22">
               <div class="tiao"><img src="../../assets/Special/23.png" width="100%"/></div>
               <div class="jiao">五一节|2019华夏匠人，致敬拥有一颗勤劳匠...</div>
           </van-col>
           <van-col span="1"></van-col>
       </van-row>

        <van-row class="xia">
           <van-col span="1"></van-col>
           <van-col span="22">
               <div class="tiao"><img src="../../assets/Special/24.png" width="100%"/></div>
               <div class="jiao">女神节|女神节礼遇，开启宠爱之旅</div>
           </van-col>
           <van-col span="1"></van-col>
       </van-row>

        <van-row class="xia">
           <van-col span="1"></van-col>
           <van-col span="22">
               <div class="tiao"><img src="../../assets/Special/25.png" width="100%"/></div>
               <div class="jiao">匠选好礼小程序上线|新年送礼头疼?点进来...</div>
           </van-col>
           <van-col span="1"></van-col>
       </van-row>

        <van-row class="xia">
           <van-col span="1"></van-col>
           <van-col span="22">
               <div class="tiao"><img src="../../assets/Special/26.png" width="100%"/></div>
               <div class="jiao">榜单揭晓!扒—扒年终爆款匠心美物</div>
           </van-col>
           <van-col span="1"></van-col>
       </van-row>

       <van-row>
             <van-col span="24" class="jiazhai"><van-loading size="24px">加载中...</van-loading></van-col>
         </van-row>

        </van-pull-refresh>
    </div>
</template>
<script>
export default {
    name:'special',
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
.jiazhai{
    text-align: center;
    line-height: 0rem;
    margin-top: 32px;
}
.jiao{
    padding: 0.5rem 0rem;
}
.tiao{
    margin-top: 10px;
}
.special{
    width: 100%;
    margin-top: 47px;
    margin-bottom: 100px;
    border-top: 1px solid #b1b1b1;
}
.xia{
 border-bottom: 1.2rem solid #dadada;
    padding-bottom: 10px;
}
</style>