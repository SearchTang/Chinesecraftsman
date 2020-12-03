<template>
    <div class="recommend">
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
         <van-swipe class="my-swipe" :autoplay="3000" indicator-color="red">
               <van-swipe-item><img src="../../assets/Login/luenbu1.png" width="100%"/></van-swipe-item>
               <van-swipe-item><img src="../../assets/Login/luenbu2.png" width="100%"/></van-swipe-item>
               <van-swipe-item><img src="../../assets/Login/luenbu3.png" width="100%"/></van-swipe-item>
         </van-swipe>
         <van-row type="flex" justify="center" style="align-items:center ">
             <van-col span="1"></van-col>
             <van-col span="4"><img src="../../assets/Login/toutiao.png" width="100%"/></van-col>
             <van-col span="18">
                 <van-notice-bar :scrollable="false">
                      <van-swipe
                        vertical
                        class="notice-swipe"
                        :autoplay="3000"
                        :show-indicators="false"
                      >
                        <van-swipe-item> 未来工美行业如何发展？用设计打破新..</van-swipe-item>
                        <van-swipe-item> 未来工美行业如何发展？用设计打破新..</van-swipe-item>
                        <van-swipe-item> 未来工美行业如何发展？用设计打破新..</van-swipe-item>
                      </van-swipe>
                    </van-notice-bar>
             </van-col>
             <van-col span="1"></van-col>
         </van-row>
         <van-row>
             <van-col span="1"></van-col>
             <van-col span="11"><img src="../../assets/Login/jiangxuan.png" width="100%"/></van-col>
             <van-col span="11"><img src="../../assets/Login/yiqi.png" width="100%"/></van-col>
             <van-col span="1"></van-col>
         </van-row>
         <van-row>
             <van-col span="16"><img src="../../assets/Login/jianrenzi.png" width="100%"/></van-col>
             <van-col span="8"><img src="../../assets/Login/yugao.png" width="100%"/></van-col>
         </van-row>
         <van-row>
             <van-col span="8"><img src="../../assets/Login/hanye.png" width="100%"/></van-col>
             <van-col span="8"><img src="../../assets/Login/gonyi.png" width="100%"></van-col>
             <van-col span="8"><img src="../../assets/Login/caiquan.png" width="100%"/></van-col>
         </van-row>
          <div class="jiexian"></div>
         <van-row>
             <van-col span="24" class="beijin">推荐匠人</van-col>
         </van-row>

         <van-row class="tiejianjianren">
           <van-col span="1"></van-col>
           <van-col span="22">
               <div class="dinwei">
                   <div>
                     <img src="../../assets/Recommend/tu1.png" width="100%"/>
                   </div>
                   <div>
                     <van-row type="flex"  justify="space-around" class="tiaojie">
                        <van-col span="4"><div class="tiao"><img src="../../assets/Recommend/tu15.png" width="100%"/></div></van-col>
                        <van-col span="14" class="zhuanyan"><p>庄颜遇</p><p>非物质文化遗产衍生详传几人</p></van-col>
                        <van-col span="4"><div class="guanzhu">已关注</div></van-col>
                     </van-row>
                   </div>
                   <div class="zhita">专业于制作天热生香，致力于对养生香的传姬挖掘与研究。</div>
               </div>
           </van-col>
           <van-col span="1"></van-col>
         </van-row>

         <van-row class="tiejianjianren">
           <van-col span="1"></van-col>
           <van-col span="22">
               <div class="dinwei">
                   <div>
                     <img src="../../assets/Recommend/tu2.png" width="100%"/>
                   </div>
                   <div>
                     <van-row type="flex"  justify="space-around" class="tiaojie">
                        <van-col span="4"><div class="tiao"><img src="../../assets/Recommend/tu13.png" width="100%"/></div></van-col>
                        <van-col span="14" class="zhuanyan"><p>催送维</p><p>中国传统工艺大师</p></van-col>
                        <van-col span="4"><div class="guanzhu">已关注</div></van-col>
                     </van-row>
                   </div>
                   <div class="zhita">钩瓷是活着的艺术</div>
               </div>
           </van-col>
           <van-col span="1"></van-col>
         </van-row>

          <van-row class="tiejianjianren">
           <van-col span="1"></van-col>
           <van-col span="22">
               <div class="dinwei">
                   <div>
                     <img src="../../assets/Recommend/tu19.png" width="100%"/>
                   </div>
                   <div>
                     <van-row type="flex"  justify="space-around" class="tiaojie">
                        <van-col span="4"><div class="tiao"><img src="../../assets/Recommend/tu17.png" width="100%"/></div></van-col>
                        <van-col span="14" class="zhuanyan"><p>邓建忠</p><p>福建省陶瓷艺术大师</p></van-col>
                        <van-col span="4"><div class="guanzhu">已关注</div></van-col>
                     </van-row>
                   </div>
                   <div class="zhita">见性成看佛，古道禅踪</div>
                   <div class="tubiao">
                     查看更多<van-icon name="arrow" />
                   </div>
               </div>
           </van-col>
           <van-col span="1"></van-col>
         </van-row>
         
          
         <div class="jiexian"></div>

          <van-row>
             <van-col span="24" class="beijin">匠心力作</van-col>
         </van-row>

          <van-row class="jiangxinglizuo">
            <van-col span="1"></van-col>
            <van-col span="22">
                 <div><img src="../../assets/Recommend/tu20.png" width="100%"/></div>
                 <div class="shishiruyi">
                     <div>事事如意</div>
                     <div>林明辉·福建省工艺美术大师</div>
                     <div>
                       <van-row type="flex" justify="space-between">
                         <van-col span="8"><p class="jiege">￥128880.00</p></van-col>
                         <van-col span="8"><p class="yongzhou">永州市</p></van-col>
                       </van-row>
                     </div>
                 </div>
            </van-col>
            <van-col span="1"></van-col>
          </van-row>

           <van-row class="jiangxinglizuo">
            <van-col span="1"></van-col>
            <van-col span="22">
                 <div><img src="../../assets/Recommend/tu21.png" width="100%"/></div>
                 <div class="shishiruyi">
                     <div>期许系列之银珠玛瑙款小叶子手持</div>
                     <div>渝万其·市级非物质文化遗产项目于是传统木刻叼版</div>
                     <div>
                       <van-row type="flex" justify="space-between">
                         <van-col span="8"><p class="jiege">￥1630.00</p></van-col>
                         <van-col span="8"><p class="yongzhou">薄田市</p></van-col>
                       </van-row>
                     </div>
                 </div>
            </van-col>
            <van-col span="1"></van-col>
          </van-row>

          <van-row class="jiangxinglizuo">
            <van-col span="1"></van-col>
            <van-col span="22">
                 <div><img src="../../assets/Recommend/tu22.png" width="100%"/></div>
                 <div class="shishiruyi">
                     <div>手工雕花孔雀双耳瓶</div>
                     <div>李丽娇·福建省工艺美术名人</div>
                     <div>
                       <van-row type="flex" justify="space-between">
                         <van-col span="8"><p class="jiege">￥1098.00</p></van-col>
                         <van-col span="8"><p class="yongzhou">泉州市</p></van-col>
                       </van-row>
                     </div>
                 </div>
                 <div class="tubiao">
                     查看更多<van-icon name="arrow" />
                   </div>

            </van-col>
            <van-col span="1"></van-col>
          </van-row>

            <div class="jiexian"></div>

          <van-row>
             <van-col span="24" class="beijin">专题精选</van-col>
         </van-row>

          <van-row class="jiangxinglizuo">
            <van-col span="1"></van-col>
            <van-col span="22">
                 <div><img src="../../assets/Recommend/tu23.png" width="100%"/></div>
                 <div class="shishiruyi">
                     <div>双11等你来战！</div>
                     
                 </div>
            </van-col>
            <van-col span="1"></van-col>
          </van-row>

           <van-row class="jiangxinglizuo">
            <van-col span="1"></van-col>
            <van-col span="22">
                 <div><img src="../../assets/Recommend/tu24.png" width="100%"/></div>
                 <div class="shishiruyi">
                     <div>月圆中秋 情蓉意蓉增心意</div>
                 </div>
            </van-col>
            <van-col span="1"></van-col>
          </van-row>

          <van-row class="jiangxinglizuo">
            <van-col span="1"></van-col>
            <van-col span="22">
                 <div><img src="../../assets/Recommend/tu25.png" width="100%"/></div>
                 <div class="shishiruyi">
                     <div>教师节 以传鸡致匠心</div>
                 </div>
                 <div class="tubiao">
                     查看更多<van-icon name="arrow" />
                   </div>

            </van-col>
            <van-col span="1"></van-col>
          </van-row>

         <div class="jiexian"></div>
         <van-row class="remen">
             <van-col span="24">热门推荐</van-col>
           </van-row>
         <van-row type="flex" justify="space-around" class="dibu">
            <van-col span="11">
              <div><img src="../../assets/Recommend/tu3.png" width="100%"/></div>
              <div class="zi">
                <div class="tiao1">西施壶  套餐</div>
                <div class="tiao2">陈荣春·福建省工艺美术名人</div>
                <div class="tiao3">￥688.00</div>
              </div>
            </van-col>
            <van-col span="11">
              <div><img src="../../assets/Recommend/tu4.png" width="100%"/></div>
              <div class="zi">
                <div class="tiao1">创意倒流香炉中式小和尚挂件</div>
                <div class="tiao2">苏荣德·福建省工艺美术名人</div>
                <div class="tiao3">￥129.00</div>
              </div>
            </van-col>
         </van-row>
         

          <van-row type="flex" justify="space-around" class="dibu">
            <van-col span="11">
              <div><img src="../../assets/Recommend/tu5.png" width="100%"/></div>
              <div class="zi">
                <div class="tiao1">黑招财摇钱佛</div>
                <div class="tiao2">黄泉福·福建省工艺美术名人</div>
                <div class="tiao3">￥138.00</div>
              </div>
            </van-col>
            <van-col span="11">
              <div><img src="../../assets/Recommend/tu6.png" width="100%"/></div>
              <div class="zi">
                <div class="tiao1">【国色天香】玉化还玉</div>
                <div class="tiao2">将清栏·福建省工艺美术名人</div>
                <div class="tiao3">￥129.00</div>
              </div>
            </van-col>
         </van-row>

          <van-row type="flex" justify="space-around" class="dibu">
            <van-col span="11">
              <div><img src="../../assets/Recommend/tu7.png" width="100%"/></div>
              <div class="zi">
                <div class="tiao1">西方三圣陶瓷小佛像</div>
                <div class="tiao2">苏荣德·福建省工艺美术名人</div>
                <div class="tiao3">￥78.00</div>
              </div>
            </van-col>
            <van-col span="11">
              <div><img src="../../assets/Recommend/tu8.png" width="100%"/></div>
              <div class="zi">
                <div class="tiao1">杨子玉陶套装加杯专选</div>
                <div class="tiao2">陈荣春·福建省工艺美术名人</div>
                <div class="tiao3">￥50.00</div>
              </div>
            </van-col>
         </van-row>

          <van-row type="flex" justify="space-around" class="dibu">
            <van-col span="11">
              <div><img src="../../assets/Recommend/tu9.png" width="100%"/></div>
              <div class="zi">
                <div class="tiao1">大胜归来</div>
                <div class="tiao2">林厚堂·福建省工艺美术名人</div>
                <div class="tiao3">￥168.00</div>
              </div>
            </van-col>
            <van-col span="11">
              <div><img src="../../assets/Recommend/tu10.png" width="100%"/></div>
              <div class="zi">
                <div class="tiao1">琴棋书画唐人女挂件</div>
                <div class="tiao2">林雨雪·福建省工艺美术名人</div>
                <div class="tiao3">￥289.00</div>
              </div>
            </van-col>
         </van-row>

         <van-row type="flex" justify="space-around" class="dibu">
            <van-col span="11">
              <div><img src="../../assets/Recommend/tu11.png" width="100%"/></div>
              <div class="zi">
                <div class="tiao1">双11爆款特价-六花旦茶杯套</div>
                <div class="tiao2">李为成·福建省工艺美术名人</div>
                <div class="tiao3">￥98.00</div>
              </div>
            </van-col>
            <van-col span="11">
              <div><img src="../../assets/Recommend/tu12.png" width="100%"/></div>
              <div class="zi">
                <div class="tiao1">相伴一生·根艺与陶艺的完..</div>
                <div class="tiao2">林厚堂·福建省工艺美术名人</div>
                <div class="tiao3">￥378.00</div>
              </div>
            </van-col>
         </van-row>

          <van-row type="flex" justify="space-around" class="dibu">
            <van-col span="11">
              <div><img src="../../assets/Recommend/tu13.png" width="100%"/></div>
              <div class="zi">
                <div class="tiao1">德化羊脂玉</div>
                <div class="tiao2">陈成海·福建省工艺美术名人</div>
                <div class="tiao3">￥160.00</div>
              </div>
            </van-col>
            <van-col span="11">
              <div><img src="../../assets/Recommend/tu14.png" width="100%"/></div>
              <div class="zi">
                <div class="tiao1">羊脂玉纯手工彩荷花花杯..</div>
                <div class="tiao2">林厚堂·福建省工艺美术名人</div>
                <div class="tiao3">￥48.00</div>
              </div>
            </van-col>
         </van-row>

          <van-row type="flex" justify="space-around" class="dibu">
            <van-col span="11">
              <div><img src="../../assets/Recommend/tu15.png" width="100%"/></div>
              <div class="zi">
                <div class="tiao1">龙泉宝剑郑宅辟邪汉剑长剑..</div>
                <div class="tiao2">曾宝东·福建省工艺美术名人</div>
                <div class="tiao3">￥160.00</div>
              </div>
            </van-col>
            <van-col span="11">
              <div><img src="../../assets/Recommend/tu16.png" width="100%"/></div>
              <div class="zi">
                <div class="tiao1">印度小金刚佛提108颗</div>
                <div class="tiao2">明风轩·福建省工艺美术名人</div>
                <div class="tiao3">￥189.00</div>
              </div>
            </van-col>
         </van-row>

          <van-row type="flex" justify="space-around" class="dibu">
            <van-col span="11">
              <div><img src="../../assets/Recommend/tu17.png" width="100%"/></div>
              <div class="zi">
                <div class="tiao1">非洲黑檀木艺术收藏品</div>
                <div class="tiao2">黄泉福·福建省工艺美术名人</div>
                <div class="tiao3">￥160.00</div>
              </div>
            </van-col>
            <van-col span="11">
              <div><img src="../../assets/Recommend/tu18.png" width="100%"/></div>
              <div class="zi">
                <div class="tiao1">【年轮】玉化碎手链..</div>
                <div class="tiao2">蒋清兰·福建省工艺美术名人</div>
                <div class="tiao3">￥48.00</div>
              </div>
            </van-col>
         </van-row>
         <van-row>
           <van-col span="24" style=" text-align: center;">
             <van-loading size="20px">加载中...</van-loading>
           </van-col>
         </van-row>
         <div class="di"></div>
         </van-pull-refresh>
    </div>
</template>
<script>
export default {
    name:"recommend",
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
.jiangxinglizuo{
  border-bottom: 1px solid #c9c9c9;
    margin-bottom: 10px;
    padding-bottom: 10px;
}
.shishiruyi{
  line-height: 2rem;
}
.shishiruyi>div:nth-of-type(1){
  font-size: 1.2rem;
   font-family: fangsong;
}
.shishiruyi>div:nth-of-type(2){
  font-family: cursive;
    font-size: 0.9rem;
    color: #858585;
}
.jiege{
  color: red;
    font-weight: 700;
}
.yongzhou{
      font-size: 0.8rem;
    text-align: right;
    color: #777777;
  }

.van-icon {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    font: normal normal normal 14px/1 vant-icon;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
}
.tubiao{
      width: 100%;
    height: 45px;
    font-size: 0.9rem;
    background: #eeebe6;
    text-align: center;
    line-height: 45px;
    color: #373737;
    margin-top: 15px;
    border-radius: 5px;
}
.zhita{
      margin-top: 10px;
    font-size: 0.8rem;
    color: #333333;
}
.guanzhu{
        font-size: 13px;
    border: 1px solid #999999;
    color: #999999;
    width: 78%;
    text-align: center;
    padding: 4px 3px;
    border-radius: 5px;
    margin-top: 10px;
}
.tiaojie{
width: 100%;
height: 3rem;
position: relative;
}
.zhuanyan{
line-height: 1.3rem;
}
.zhuanyan>p:nth-of-type(1){
      font-size: 0.8rem;
}
.zhuanyan>p:nth-of-type(2){
         font-size: 0.6rem;
    color: #bca890;
}
.tiejianjianren{
 border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    padding-top: 10px;
    padding-bottom: 20px;
}
.tiao{
     border-radius: 61px;
    width: 62px;
    height: 62px;
    overflow: hidden;
    position: absolute;
    top: -40%;
    border: 3px solid #fff;
    left: 1%;
}

.dibu{
 
  margin-bottom: 2rem;
}
.zi{
  line-height: 20px;
  margin-top: 5px;
}
.tiao1{
font-size: 13px;
}
.tiao2{
font-size: 12px;
    color: #a5a5a5;
}
.tiao3{
    color: red;
    font-weight: 600;
    font-size: 13px;
}
.remen{
 background: #fff;
    height: 3rem;
    text-align: center;
    color: #96806b;
    line-height: 2.5rem;
}
.di{
  width: 100%;
  height: 50px;
  
}
 .doge {
   height: 100%;
   width: 100%;
  }
.jiexian{
      width: 100%;
    height: 15px;
    background: #cfd5d6;
    margin-top: 10px;
    margin-bottom: 10px;
}
.recommend{
    width: 100%;
       margin-top: 47px;
}
 .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    text-align: center;
   
  }
  .beijin{
   height: 3rem;
    text-align: center;
    line-height: 30px;
    color: #96806b;
    
    line-height: 3rem;
  }
  .notice-swipe {
    height: 40px;
    line-height: 40px;
  }
  .van-notice-bar {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    height: 40px;
    padding: 0 16px;
    color: #939393;
    font-size: 13px;
    line-height: 25px;
    background-color: #fff;
}
</style>