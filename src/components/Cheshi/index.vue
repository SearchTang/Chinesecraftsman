<template>
    <van-row class="neir">
             <van-tabs v-model="active" swipeable>
                  <van-tab title="推荐"><Recommend></Recommend></van-tab>
                  <van-tab title="匠人"><Craftsman></Craftsman></van-tab>
                  <van-tab title="专题"><Special></Special></van-tab>
                  <van-tab title="技艺"><Skill></Skill></van-tab>
             </van-tabs>
     </van-row>
</template>
<script>
import Recommend from '../../views/Recommend'
import Craftsman from '../../views/Craftsman'
import Special from '../../views/Special'
import Skill from '../../views/Skill'
export default {
  components:{
      Recommend,
      Craftsman,
      Special,
      Skill

  },
    name:'header',
    data() {
        return {
            value: '',
            active: 0,
        }
    },
   
}
</script>
<style scoped>
.neir>>>.van-tabs--line .van-tabs__wrap {
    height: 44px;
    position: fixed;
    top: 56px;
    width: 100%;
    z-index: 10;
    /* display: flow-root; */
}

.header>>>.van-tab--active {
    color: red;
    font-weight: 600;
}
.header{
   width: 100%;
   height: 6.3rem;

}
.hea-1{
    text-align: right;
}
.van-search__content {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    padding-left: 12px;
    background-color: #fafafa;
    border-radius: 2px;
    border: 1px solid #dcdcdc;
    border-radius: 22px;
}
.van-tab__text--ellipsis {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
</style>