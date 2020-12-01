<template>
    <div class="craftsmanx">
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
                             <div>
                                 <span>+</span><span>关注</span>
                             </div>
                         </van-col>
                     </van-row>
                 </div>
             </van-col>
             <van-col span="1"></van-col>
         </van-row>
    </div>
</template>
<script>
export default {
    name:'craftsman'
}
</script>
<style scoped>
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
    margin-top: 100px;
     margin-bottom: 100px;
    border-top: 1px solid #b1b1b1;
}
</style>