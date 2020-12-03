<template>
    <div class="craftsmanx">
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
         <van-row class="liouda">
             <van-col span="1"></van-col>
             <van-col span="22">
                 <div class="shang">
                     <van-row type="flex" justify="space-between">
                         <van-col span="4">
                             <div class="yuan">
                                 <img src="../../assets/Recommend/tu16.png" width="100%"/>
                             </div>
                         </van-col>
                         <van-col span="15" class="tian">
                             <div>柳宏达</div>
                             <div>鞍山市工艺美术大师</div>
                         </van-col>
                         <van-col span="4">
                             <div class="guanzhu">
                                 <span>+</span><span>关注</span>
                             </div>
                         </van-col>
                     </van-row>
                 </div>
                 <div class="lioutu">
                      <van-row type="flex" justify="space-between">
                          <van-col span="16" class="gai16"><img src="../../assets/craftsmanx/tu1.png" width="100%"/></van-col>
                          <van-col span="8">
                              <van-row class="huan"> 
                                  <van-col span="24"><img src="../../assets/craftsmanx/tu2.png" width="100%"/></van-col>
                                  <van-col span="24"><img src="../../assets/craftsmanx/tu3.png" width="100%"/></van-col>
                              </van-row>
                          </van-col>
                      </van-row>
                 </div>
                 <div class="wenzi">
                     柳宏大，自幼酷爱美术，精心于岫玉人物、山子，同<br/>时对翡翠、和田玉等各种石材均有研究。鞍山市工柳宏大，自幼酷爱美术，精心于岫玉人物、山子，同时对翡翠、和田玉等各种石材均有研究。鞍山市工...
                 </div>
             </van-col>
             <van-col span="1"></van-col>
         </van-row>

         <van-row class="liouda">
             <van-col span="1"></van-col>
             <van-col span="22">
                 <div class="shang">
                     <van-row type="flex" justify="space-between">
                         <van-col span="4">
                             <div class="yuan">
                                 <img src="../../assets/Recommend/tu17.png" width="100%"/>
                             </div>
                         </van-col>
                         <van-col span="15" class="tian">
                             <div>李廷怀</div>
                             <div>中国陶瓷设计艺术大师</div>
                         </van-col>
                         <van-col span="4">
                             <div class="guanzhu">
                                 <span>+</span><span>关注</span>
                             </div>
                         </van-col>
                     </van-row>
                 </div>
                 <div class="lioutu">
                      <van-row type="flex" justify="space-between">
                          <van-col span="16" class="gai16"><img src="../../assets/craftsmanx/tu4.png" width="100%"/></van-col>
                          <van-col span="8">
                              <van-row class="huan"> 
                                  <van-col span="24"><img src="../../assets/craftsmanx/tu7.png" width="100%"/></van-col>
                                  <van-col span="24"><img src="../../assets/craftsmanx/tu8.png" width="100%"/></van-col>
                              </van-row>
                          </van-col>
                      </van-row>
                 </div>
                 <div class="wenzi">
                     李廷怀，受国务院特殊津贴艺术专家，中国陶瓷设计<br/>艺术大师，河南省工艺美术大师，高级工艺美术师...
                 </div>
             </van-col>
             <van-col span="1"></van-col>
         </van-row>


         <van-row class="liouda">
             <van-col span="1"></van-col>
             <van-col span="22">
                 <div class="shang">
                     <van-row type="flex" justify="space-between">
                         <van-col span="4">
                             <div class="yuan">
                                 <img src="../../assets/Recommend/tu18.png" width="100%"/>
                             </div>
                         </van-col>
                         <van-col span="15" class="tian">
                             <div>徐长选</div>
                             <div>福建省工艺美术名人</div>
                         </van-col>
                         <van-col span="4">
                             <div class="guanzhu">
                                 <span>+</span><span>关注</span>
                             </div>
                         </van-col>
                     </van-row>
                 </div>
                 <div class="lioutu">
                      <van-row type="flex" justify="space-between">
                          <van-col span="16" class="gai16"><img src="../../assets/craftsmanx/tu5.png" width="100%"/></van-col>
                          <van-col span="8">
                              <van-row class="huan"> 
                                  <van-col span="24"><img src="../../assets/craftsmanx/tu9.png" width="100%"/></van-col>
                                  <van-col span="24"><img src="../../assets/craftsmanx/tu10.png" width="100%"/></van-col>
                              </van-row>
                          </van-col>
                      </van-row>
                 </div>
                 <div class="wenzi">
                    福建省工艺美术名人，泉州市工艺美术大师，2000<br/>年创办德化富洋玉瓷研究所。多年来作品在全国各项..
                 </div>
             </van-col>
             <van-col span="1"></van-col>
         </van-row>
          

           <van-row class="liouda">
             <van-col span="1"></van-col>
             <van-col span="22">
                 <div class="shang">
                     <van-row type="flex" justify="space-between">
                         <van-col span="4">
                             <div class="yuan">
                                 <img src="../../assets/Recommend/tu13.png" width="100%"/>
                             </div>
                         </van-col>
                         <van-col span="15" class="tian">
                             <div>王彩红</div>
                             <div>中国工美行业艺术大师</div>
                         </van-col>
                         <van-col span="4">
                             <div class="guanzhu">
                                 <span>+</span><span>关注</span>
                             </div>
                         </van-col>
                     </van-row>
                 </div>
                 <div class="lioutu">
                      <van-row type="flex" justify="space-between">
                          <van-col span="16" class="gai16"><img src="../../assets/craftsmanx/tu6.png" width="100%"/></van-col>
                          <van-col span="8">
                              <van-row class="huan"> 
                                  <van-col span="24"><img src="../../assets/craftsmanx/tu11.png" width="100%"/></van-col>
                                  <van-col span="24"><img src="../../assets/craftsmanx/tu12.png" width="100%"/></van-col>
                              </van-row>
                          </van-col>
                      </van-row>
                 </div>
                 <div class="wenzi">
                    王彩红，陕西铜川人，铜川市2015--2017年度拔尖<br/>人才、中国工美行业艺术大师、陕西一级工艺美术..
                 </div>
             </van-col>
             <van-col span="1"></van-col>
         </van-row>


          <van-row class="liouda">
             <van-col span="1"></van-col>
             <van-col span="22">
                 <div class="shang">
                     <van-row type="flex" justify="space-between">
                         <van-col span="4">
                             <div class="yuan">
                                 <img src="../../assets/Recommend/tu12.png" width="100%"/>
                             </div>
                         </van-col>
                         <van-col span="15" class="tian">
                             <div>张美华</div>
                             <div>丽水市工艺美术大师</div>
                         </van-col>
                         <van-col span="4">
                             <div class="guanzhu">
                                 <span>+</span><span>关注</span>
                             </div>
                         </van-col>
                     </van-row>
                 </div>
                 <div class="lioutu">
                      <van-row type="flex" justify="space-between">
                          <van-col span="16" class="gai16"><img src="../../assets/craftsmanx/tu13.png" width="100%"/></van-col>
                          <van-col span="8">
                              <van-row class="huan"> 
                                  <van-col span="24"><img src="../../assets/craftsmanx/tu14.png" width="100%"/></van-col>
                                  <van-col span="24"><img src="../../assets/craftsmanx/tu15.png" width="100%"/></van-col>
                              </van-row>
                          </van-col>
                      </van-row>
                 </div>
                 <div class="wenzi">
                   浙江省高级工艺美术师，丽水市工艺美术大师，中国<br/>陶瓷工业协会女陶艺家分会会员，现担任龙泉臻祥...
                 </div>
             </van-col>
             <van-col span="1"></van-col>
         </van-row>
         


         <van-row class="liouda">
             <van-col span="1"></van-col>
             <van-col span="22">
                 <div class="shang">
                     <van-row type="flex" justify="space-between">
                         <van-col span="4">
                             <div class="yuan">
                                 <img src="../../assets/Recommend/tu11.png" width="100%"/>
                             </div>
                         </van-col>
                         <van-col span="15" class="tian">
                             <div>黄泉福</div>
                             <div>中国工艺美术大师</div>
                         </van-col>
                         <van-col span="4">
                             <div class="guanzhu">
                                 <span>+</span><span>关注</span>
                             </div>
                         </van-col>
                     </van-row>
                 </div>
                 <div class="lioutu">
                      <van-row type="flex" justify="space-between">
                          <van-col span="16" class="gai16"><img src="../../assets/craftsmanx/tu16.png" width="100%"/></van-col>
                          <van-col span="8">
                              <van-row class="huan"> 
                                  <van-col span="24"><img src="../../assets/craftsmanx/tu17.png" width="100%"/></van-col>
                                  <van-col span="24"><img src="../../assets/craftsmanx/tu18.png" width="100%"/></van-col>
                              </van-row>
                          </van-col>
                      </van-row>
                 </div>
                 <div class="wenzi">
                   中国工艺美术大师、福建省第二批非物质文化遗产项<br/>目“惠安木雕技艺"代表性传承人，享受国务院特殊津...
                 </div>
             </van-col>
             <van-col span="1"></van-col>
         </van-row>

        
        <van-row class="liouda">
             <van-col span="1"></van-col>
             <van-col span="22">
                 <div class="shang">
                     <van-row type="flex" justify="space-between">
                         <van-col span="4">
                             <div class="yuan">
                                 <img src="../../assets/Recommend/tu10.png" width="100%"/>
                             </div>
                         </van-col>
                         <van-col span="15" class="tian">
                             <div>王顺</div>
                             <div>福建省工艺美术名人</div>
                         </van-col>
                         <van-col span="4">
                             <div class="guanzhu">
                                 <span>+</span><span>关注</span>
                             </div>
                         </van-col>
                     </van-row>
                 </div>
                 <div class="lioutu">
                      <van-row type="flex" justify="space-between">
                          <van-col span="16" class="gai16"><img src="../../assets/craftsmanx/tu21.png" width="100%"/></van-col>
                          <van-col span="8">
                              <van-row class="huan"> 
                                  <van-col span="24"><img src="../../assets/craftsmanx/tu19.png" width="100%"/></van-col>
                                  <van-col span="24"><img src="../../assets/craftsmanx/tu20.png" width="100%"/></van-col>
                              </van-row>
                          </van-col>
                      </van-row>
                 </div>
                 <div class="wenzi">
                   福建省工艺美术名人，泉州市工艺美术大师，高级<br/>技师(国家一级)，华夏雕塑名师，中国青年陶瓷艺术...
                 </div>
             </van-col>
             <van-col span="1"></van-col>
         </van-row>


         <van-row class="liouda">
             <van-col span="1"></van-col>
             <van-col span="22">
                 <div class="shang">
                     <van-row type="flex" justify="space-between">
                         <van-col span="4">
                             <div class="yuan">
                                 <img src="../../assets/Recommend/tu9.png" width="100%"/>
                             </div>
                         </van-col>
                         <van-col span="15" class="tian">
                             <div>李甲栈</div>
                             <div>福建省工艺美术名人</div>
                         </van-col>
                         <van-col span="4">
                             <div class="guanzhu">
                                 <span>+</span><span>关注</span>
                             </div>
                         </van-col>
                     </van-row>
                 </div>
                 <div class="lioutu">
                      <van-row type="flex" justify="space-between">
                          <van-col span="16" class="gai16"><img src="../../assets/craftsmanx/tu22.png" width="100%"/></van-col>
                          <van-col span="8">
                              <van-row class="huan"> 
                                  <van-col span="24"><img src="../../assets/craftsmanx/tu23.png" width="100%"/></van-col>
                                  <van-col span="24"><img src="../../assets/craftsmanx/tu24.png" width="100%"/></van-col>
                              </van-row>
                          </van-col>
                      </van-row>
                 </div>
                 <div class="wenzi">
                   中国传统工艺美术大师，福建省工艺美术大师，福建<br/>省陶瓷艺术大师，高级工艺美术师，国家一级/高级..
                 </div>
             </van-col>
             <van-col span="1"></van-col>
         </van-row>


          <van-row class="liouda">
             <van-col span="1"></van-col>
             <van-col span="22">
                 <div class="shang">
                     <van-row type="flex" justify="space-between">
                         <van-col span="4">
                             <div class="yuan">
                                 <img src="../../assets/Recommend/tu8.png" width="100%"/>
                             </div>
                         </van-col>
                         <van-col span="15" class="tian">
                             <div>王荣海</div>
                             <div>福建省工艺美术名人</div>
                         </van-col>
                         <van-col span="4">
                             <div class="guanzhu">
                                 <span>+</span><span>关注</span>
                             </div>
                         </van-col>
                     </van-row>
                 </div>
                 <div class="lioutu">
                      <van-row type="flex" justify="space-between">
                          <van-col span="16" class="gai16"><img src="../../assets/craftsmanx/tu25.png" width="100%"/></van-col>
                          <van-col span="8">
                              <van-row class="huan"> 
                                  <van-col span="24"><img src="../../assets/craftsmanx/tu26.png" width="100%"/></van-col>
                                  <van-col span="24"><img src="../../assets/craftsmanx/tu27.png" width="100%"/></van-col>
                              </van-row>
                          </van-col>
                      </van-row>
                 </div>
                 <div class="wenzi">
                   现为中国高级工艺美术师、福建省工艺美术名人。泉<br/>州市工艺美术协会常务理事，惠安雕刻艺术研究会....
                 </div>
             </van-col>
             <van-col span="1"></van-col>
         </van-row>
         

          <van-row class="liouda">
             <van-col span="1"></van-col>
             <van-col span="22">
                 <div class="shang">
                     <van-row type="flex" justify="space-between">
                         <van-col span="4">
                             <div class="yuan">
                                 <img src="../../assets/Recommend/tu7.png" width="100%"/>
                             </div>
                         </van-col>
                         <van-col span="15" class="tian">
                             <div>泉州锡雕</div>
                             <div>福建省工艺美术名人</div>
                         </van-col>
                         <van-col span="4">
                             <div class="guanzhu">
                                 <span>+</span><span>关注</span>
                             </div>
                         </van-col>
                     </van-row>
                 </div>
                 <div class="lioutu">
                      <van-row type="flex" justify="space-between">
                          <van-col span="16" class="gai16"><img src="../../assets/craftsmanx/tu28.png" width="100%"/></van-col>
                          <van-col span="8">
                              <van-row class="huan"> 
                                  <van-col span="24"><img src="../../assets/craftsmanx/tu29.png" width="100%"/></van-col>
                                  <van-col span="24"><img src="../../assets/craftsmanx/tu30.png" width="100%"/></van-col>
                              </van-row>
                          </van-col>
                      </van-row>
                 </div>
                 <div class="wenzi">
                  杨氏家族的"连发锡铺”，历经了160余年、前后六代手<br/>艺传承的杨氏锡雕世家，传承人有:杨炳坤(己故)、...
                 </div>
             </van-col>
             <van-col span="1"></van-col>
         </van-row>


         <van-row class="liouda">
             <van-col span="1"></van-col>
             <van-col span="22">
                 <div class="shang">
                     <van-row type="flex" justify="space-between">
                         <van-col span="4">
                             <div class="yuan">
                                 <img src="../../assets/Recommend/tu8.png" width="100%"/>
                             </div>
                         </van-col>
                         <van-col span="15" class="tian">
                             <div>陈荣春</div>
                             <div>福建省工艺美术名人</div>
                         </van-col>
                         <van-col span="4">
                             <div class="guanzhu">
                                 <span>+</span><span>关注</span>
                             </div>
                         </van-col>
                     </van-row>
                 </div>
                 <div class="lioutu">
                      <van-row type="flex" justify="space-between">
                          <van-col span="16" class="gai16"><img src="../../assets/craftsmanx/tu31.png" width="100%"/></van-col>
                          <van-col span="8">
                              <van-row class="huan"> 
                                  <van-col span="24"><img src="../../assets/craftsmanx/tu32.png" width="100%"/></van-col>
                                  <van-col span="24"><img src="../../assets/craftsmanx/tu33.png" width="100%"/></van-col>
                              </van-row>
                          </van-col>
                      </van-row>
                 </div>
                 <div class="wenzi">
                  中华传统工艺大师、福建省陶瓷艺术大师、福建省工<br/>艺美术名人、泉州市工艺美术大师。多件作品被作...
                 </div>
             </van-col>
             <van-col span="1"></van-col>
         </van-row>
        

         <van-row class="liouda">
             <van-col span="1"></van-col>
             <van-col span="22">
                 <div class="shang">
                     <van-row type="flex" justify="space-between">
                         <van-col span="4">
                             <div class="yuan">
                                 <img src="../../assets/Recommend/tu7.png" width="100%"/>
                             </div>
                         </van-col>
                         <van-col span="15" class="tian">
                             <div>林雪丽</div>
                             <div>福建省工艺美术名人</div>
                         </van-col>
                         <van-col span="4">
                             <div class="guanzhu">
                                 <span>+</span><span>关注</span>
                             </div>
                         </van-col>
                     </van-row>
                 </div>
                 <div class="lioutu">
                      <van-row type="flex" justify="space-between">
                          <van-col span="16" class="gai16"><img src="../../assets/craftsmanx/tu34.png" width="100%"/></van-col>
                          <van-col span="8">
                              <van-row class="huan"> 
                                  <van-col span="24"><img src="../../assets/craftsmanx/tu35.png" width="100%"/></van-col>
                                  <van-col span="24"><img src="../../assets/craftsmanx/tu36.png" width="100%"/></van-col>
                              </van-row>
                          </van-col>
                      </van-row>
                 </div>
                 <div class="wenzi">
                  中华传统工艺大师、福建省陶瓷艺术大师、福建省工<br/>艺美术名人、泉州市工艺美术大师。多件作品被作...
                 </div>
             </van-col>
             <van-col span="1"></van-col>
         </van-row>
        

         <van-row class="liouda">
             <van-col span="1"></van-col>
             <van-col span="22">
                 <div class="shang">
                     <van-row type="flex" justify="space-between">
                         <van-col span="4">
                             <div class="yuan">
                                 <img src="../../assets/Recommend/tu6.png" width="100%"/>
                             </div>
                         </van-col>
                         <van-col span="15" class="tian">
                             <div>林雪丽</div>
                             <div>福建省工艺美术名人</div>
                         </van-col>
                         <van-col span="4">
                             <div class="guanzhu">
                                 <span>+</span><span>关注</span>
                             </div>
                         </van-col>
                     </van-row>
                 </div>
                 <div class="lioutu">
                      <van-row type="flex" justify="space-between">
                          <van-col span="16" class="gai16"><img src="../../assets/craftsmanx/tu37.png" width="100%"/></van-col>
                          <van-col span="8">
                              <van-row class="huan"> 
                                  <van-col span="24"><img src="../../assets/craftsmanx/tu38.png" width="100%"/></van-col>
                                  <van-col span="24"><img src="../../assets/craftsmanx/tu39.png" width="100%"/></van-col>
                              </van-row>
                          </van-col>
                      </van-row>
                 </div>
                 <div class="wenzi">
                  中华传统工艺大师、福建省陶瓷艺术大师、福建省工<br/>艺美术名人、泉州市工艺美术大师。多件作品被作...
                 </div>
             </van-col>
             <van-col span="1"></van-col>
         </van-row>


          <van-row class="liouda">
             <van-col span="1"></van-col>
             <van-col span="22">
                 <div class="shang">
                     <van-row type="flex" justify="space-between">
                         <van-col span="4">
                             <div class="yuan">
                                 <img src="../../assets/Recommend/tu5.png" width="100%"/>
                             </div>
                         </van-col>
                         <van-col span="15" class="tian">
                             <div>林雪丽</div>
                             <div>福建省工艺美术名人</div>
                         </van-col>
                         <van-col span="4">
                             <div class="guanzhu">
                                 <span>+</span><span>关注</span>
                             </div>
                         </van-col>
                     </van-row>
                 </div>
                 <div class="lioutu">
                      <van-row type="flex" justify="space-between">
                          <van-col span="16" class="gai16"><img src="../../assets/craftsmanx/tu40.png" width="100%"/></van-col>
                          <van-col span="8">
                              <van-row class="huan"> 
                                  <van-col span="24"><img src="../../assets/craftsmanx/tu41.png" width="100%"/></van-col>
                                  <van-col span="24"><img src="../../assets/craftsmanx/tu42.png" width="100%"/></van-col>
                              </van-row>
                          </van-col>
                      </van-row>
                 </div>
                 <div class="wenzi">
                  中华传统工艺大师、福建省陶瓷艺术大师、福建省工<br/>艺美术名人、泉州市工艺美术大师。多件作品被作...
                 </div>
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
    name:'craftsman',
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
.liouda{
    border-bottom: 1.2rem solid #dadada;
    padding-bottom: 10px;
}
.wenzi{
       width: 100%;
    white-space: nowrap;
    color: #1c1c1c;
    line-height: 1.5rem;
    font-weight: 500;
    margin-top: 0.5rem;
    font-style: 微软雅黑;
    overflow: hidden;
    text-overflow: ellipsis;


}
.gai16{
        width: 65.666667%;
}
.lioutu{
        margin-top: 1rem;
}
.huan{
   display: flex;
   flex-wrap: wrap;
   
}
.guanzhu{
    border: 1px solid #999999;
    text-align: center;
    font-size: 0.6rem;
    padding: 0.3rem 0.5rem;
    border-radius: 0.3rem;
    /* padding: 0.1rem 1rem; */
    margin-top: 19px;
}
.guanzhu>span:nth-of-type(1){
    color: red;
}

.liouda{
    margin-top: 10px;
}
.tian{
    line-height: 1.5rem;
    padding-top: 10px;
}
.tian>div:nth-of-type(2){
        font-size: 0.8rem;
    color: #8f4702;
}
.yuan{
    width: 62px;
    height: 62px;
    border-radius: 44px;
    overflow: hidden;
    margin-top: 5px;
}
.craftsmanx{
   margin-top: 47px;
     margin-bottom: 100px;
    border-top: 1px solid #b1b1b1;
}
</style>