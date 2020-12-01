<template>
    <div class="zhenti">
        <Header></Header>
      
           <router-view></router-view>
      
       <Dottom></Dottom>
    </div>
</template>
<style scoped>
.zhenti{
    display: flex;
    width: 100%;
    height: 100vh;
    position: relative;
}
.tiaojie{
    margin-top: 100px;
    margin-bottom: 100px;
}
.doge {
    width: 140px;
    height: 72px;
    margin-top: 8px;
    border-radius: 4px;
  }
</style>
<script>
import Header from '../../components/Header'
import Dottom from '../../components/Dottom'
export default {
    components:{
         Header,
         Dottom
    }
}
</script>
