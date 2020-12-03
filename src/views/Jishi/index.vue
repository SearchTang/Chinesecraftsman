<template>
    <div class="jishi">
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
        <van-row>
            <van-col span="24"><img src="../../assets/Jishi/1.png" width="100%"/></van-col>
        </van-row>
        <van-row class="diaoke">
            <van-col span="2"></van-col>
            <van-col span="20">
                <van-row>
                    <van-col span="6" class="zhu">
                        <div><img src="../../assets/Jishi/2.png" width="65%"/></div>
                        <div>雕刻工艺</div>
                    </van-col>
                    <van-col span="6" class="zhu">
                        <div><img src="../../assets/Jishi/3.png" width="65%"/></div>
                        <div>雕刻工艺</div>
                    </van-col>
                     <van-col span="6" class="zhu">
                        <div><img src="../../assets/Jishi/4.png" width="65%"/></div>
                        <div>雕刻工艺</div>
                    </van-col>
                     <van-col span="6" class="zhu">
                        <div><img src="../../assets/Jishi/5.png" width="65%"/></div>
                        <div>雕刻工艺</div>
                    </van-col>
                </van-row>
            </van-col>
            <van-col span="2"></van-col>
        </van-row>

        <van-row class="daozai" type="flex" justify="space-between">
             <van-col span="12"><img src="../../assets/Jishi/6.png" width="100%"/></van-col>
             <van-col span="12"><img src="../../assets/Jishi/7.png" width="100%"/></van-col>
        </van-row>
        <van-row class="xiangpin">
            <van-col span="24"><img src="../../assets/Jishi/8.png" width="100%"></van-col>
        </van-row>



        <van-row>
            <van-col>

            </van-col>
        </van-row>


        <van-row class="renqitueijian">
            <van-col span="1"></van-col>
            <van-col span="22">
                <van-row>
                    <van-col span="24" class="renq">人气推荐</van-col>
                </van-row>
                <van-row type="flex" justify="space-between" class="shuan">
                    <van-col span="6"><img src="../../assets/Jishi/9.png" width="100%"/></van-col>
                    <van-col span="17">
                        <div class="liwei">
                            <p>双11爆款特价--六花旦茶杯套装</p>
                            <p>李为成·泉州市</p>
                            <p>￥98.00</p>
                        </div>
                    </van-col>
                </van-row>

                 <van-row type="flex" justify="space-between" class="shuan">
                    <van-col span="6"><img src="../../assets/Jishi/10.png" width="100%"/></van-col>
                    <van-col span="17">
                        <div class="liwei">
                            <p>老山檀安心手串·梵</p>
                            <p>俞万奇·莆田市</p>
                            <p>￥398.00</p>
                        </div>
                    </van-col>
                </van-row>

                 <van-row type="flex" justify="space-between" class="shuan">
                    <van-col span="6"><img src="../../assets/Jishi/11.png" width="100%"/></van-col>
                    <van-col span="17">
                        <div class="liwei">
                            <p>太湖石小摆件</p>
                            <p>李丽娇·泉州市</p>
                            <p>￥38.00</p>
                        </div>
                    </van-col>
                </van-row>
            </van-col>
            <van-col span="1"></van-col>
        </van-row>

        <van-row class="renqitueijian">
            <van-col span="1"></van-col>
            <van-col span="22">
                <van-row>
                    <van-col span="24" class="ru">猜你喜欢</van-col>
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

            </van-col>
            <van-col span="1"></van-col>
        </van-row>
        <van-row class="tiajie">
           <van-col span="24" style=" text-align: center;">
             <van-loading size="20px">加载中...</van-loading>
           </van-col>
         </van-row>
         </van-pull-refresh>
    </div>
</template>
<script>
export default {
    name:'jishi',
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
.tiajie{
    margin-top: 10px;
}
.ru{
    text-align: center;
    height: 65px;
    line-height: 65px;
    font-size: 1.1rem;
    font-weight: 500;
    color: #a88058;
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

.renqitueijian{
    
        border-bottom: 20px solid #e2e2e2;
}
.jishi{
    margin-bottom: 60px;
}
.liwei{
    line-height: 30px;

}
.liwei>p:nth-of-type(2){
    font-size: 0.5rem;
    color: #8f8f8f;
}
.liwei>p:nth-of-type(3){
        font-size: 0.9rem;
    color: red;
}
.shuan{
    padding-top: 15px;
padding-bottom: 15px;
      border-bottom: 1px solid #cfcfcf;
}
.renq {
    text-align: center;
    height: 50px;
    line-height: 50px;
    font-size: 1.1rem;
    font-weight: 500;
    color: #a88058;
    border-bottom: 0.1px solid #c6c6c6;
}
.xiangpin{
    margin-top: 20px;
    margin-bottom: 20px;
}
.daozai>.van-col--12 {
    width: 49.6%;
}
.zhu>div:nth-of-type(2){
    margin-top: 5px;
        font-size: 0.8rem;
    color: #2e2e2e;
}
.diaoke{
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
}
.zhu{
    text-align: center;
}
</style>