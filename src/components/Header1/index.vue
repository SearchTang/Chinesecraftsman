<template>
    <div class="header">
         <van-row type="flex" justify="center" style="align-items:center;width:100%;background: #fff;position: fixed;top: 0;z-index: 10;">
             <van-col span="1" class="hea-1"><van-icon name="bars" /></van-col>
             <van-col span="20"><van-search v-model="value" placeholder="请输入搜索关键词" /></van-col>
             <van-col span="1"><van-icon name="shopping-cart-o" /></van-col>
         </van-row>
    </div>
</template>
<script>
export default {
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
.header>>>.van-tabs--line .van-tabs__wrap {
    height: 44px;
    position: fixed;
    z-index: 10;
    width: 100%;
  top: 56px;
}

.header>>>.van-tab--active {
    color: red;
    font-weight: 600;
}
.header{
       width: 100%;
    height: 3.3rem;

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