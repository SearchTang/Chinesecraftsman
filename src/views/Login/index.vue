<template>
    <div id="Login">
        <van-row type="flex" justify="center" class="lo1">
             <van-col span="4"></van-col>
              <van-col span="4" class="loimg"><img src="../../assets/Login/logo.png"/></van-col>
               <van-col span="4"></van-col>
        </van-row>
        <van-row type="flex" class="lo4">
            <van-col span="3"></van-col>
             <van-col span="18" class="lo2" >
                 <div class="lo3"><span>+86</span></div>
                 <div><van-field v-model="digit" type="digit" placeholder="请输入手机号"/></div>
             </van-col>
             <van-col span="3"></van-col>
        </van-row>
        <van-row class="lo5">
             <van-col span="3"></van-col>
             <van-col span="18" class="lo2" >
                 <van-row type="flex" justify="space-between" class="gai">
                    <van-col span="15"><van-field v-model="password" type="password" placeholder="请输入密码(至少6位)"/></van-col>
                    <van-col span="8" class="lo10"><span class="lo6">忘记密码</span></van-col>
                </van-row>
             </van-col>
             <van-col span="3"></van-col>
        </van-row>
        <van-row class="lo11">
            <van-col span="3"></van-col>
            <van-col span="18">
                <van-row type="flex" justify="space-between">
                    <van-col span="8"><span class="lo9">注册</span></van-col>
                    <van-col span="8" class="lo10"><span class="lo9">验证码登录</span></van-col>
                </van-row>
            </van-col>
            <van-col span="3"></van-col>
        </van-row>
        <van-row class="lo12">
                <van-col span="3"></van-col>
                <van-col span="18"><van-checkbox v-model="checked" shape="square">我已阅读<span class="yanse">《华夏匠人服务协议》《隐私政权》</span></van-checkbox></van-col>
                <van-col span="3"></van-col>
        </van-row>
        <van-row class="lo14">
            <van-col span="4"></van-col>
            <van-col span="16" class="juz">
                <van-button plain round hairline type="primary" @click="dengru">登录</van-button>
            </van-col>
            <van-col span="4"></van-col>
        </van-row>
    </div>
</template>
<script>
export default {
    name:"login",
    data() {
        return {
            digit:'',
            password:'',
            checked:'',
            sji:this.$route.query.digit,
            mima:this.$route.query.password

        }
    },
    methods:{
        dengru(){
            if(this.digit!==this.sji){
                this.$toast({
                      message:'手机号错误'
                })
            }
            else if(this.mima!==this.password){
               this.$toast({
                   message:'密码错误'
               })
            }else if(this.checked==''){
                this.$toast({
                    message:'请勾选协议'
                })
            }else{
                this.$router.push({
                    path:'../Mian'
                })
            }
        }
    }
}
</script>
<style scoped>
.juz{
    text-align: center;
}
.gai{
    width: 100%;
}
#Login{
       background-image: url("../../assets/Login/beijing.png");
    width: 100%;
    height: 100vh;
    background-size: 100%;
    background-repeat: no-repeat;
}
.lo1{
    padding-top: 3rem;
    height: 4rem;
}
.lo5{
       height: 3rem;
}
.loimg>img{
width: 100%;
}
.lo2{
    display: flex;
    border-bottom: 1px solid #e0e0e0;
}
.lo3{
      background: #b2b2b2;
    /* padding: 1rem; */
    /* padding: 1rem 1rem; */
    width: 4rem;
    height: 2.2rem;
    text-align: center;
    line-height: 2.2rem;
    margin-right: 0.4rem;
    color: #a7917a;
    border-radius: 0.6rem;
    margin-top: 0.3rem;
}
.yanse{
        color: #a7917a;
}

.lo4{
           
    height: 3.4rem;
    margin-top: 5rem;

}
.lo11{
    margin-top: 1rem;
}
.lo9{
    font-size: 0.4rem;
    color: #c8c7c5;
}
.van-cell {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 16px;
    overflow: hidden;
    color: #323233;
    font-size: 14px;
    line-height: 24px;
    background-color: #fff0;
}
.van-cell>>>.van-field__control {
    display: block;
    box-sizing: border-box;
    width: 100%;
    min-width: 0;
    margin: 0;
    padding: 0;
    color: red;
    line-height: inherit;
    text-align: left;
    background-color: transparent;
    border: 0;
    resize: none;
}
.lo6{
        width: 5rem;
    margin-left: 1rem;
    line-height: 3rem;
    color: #977049;
}
.lo10{
    text-align: right;
}
.lo12>>>.van-checkbox__icon--checked .van-icon {
    color: #fff;

    border-radius: 0.2rem;
    background-color: #a67c52;
    border-color: #a67c52;
}
.lo12>>>.van-checkbox__label {
    margin-left: 8px;
    color: #bbbbbb;
    line-height: 20px;
    font-size: 0.2rem;
}
.lo12>>>.van-checkbox__icon .van-icon {
    border-radius: 0.2rem;
}
.lo12{
    margin-top: 1rem;
}
.lo13{
       background-image: url(/img/ann.36b3a512.png);
    background-repeat: no-repeat;
    background-size: 100%;
    width: 100%;
    height: 3.3rem;
    text-align: center;
    line-height: 3.3rem;
    font-size: 1.3rem;
    color: aliceblue;
}
.lo14{
        margin-top: 1rem;
}
.van-button--plain.van-button--primary {
    color: #fff;
}
.van-button--normal {
    padding: 0 77px;
    font-size: 14px;
}
.van-button--plain {
    background-color: #96959500;
}
.van-button--primary {
   
    border: 1px solid #fff;
}
</style>