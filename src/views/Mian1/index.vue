<template>
    <div>
        <Header1></Header1>
        <router-view></router-view>
        <Dottom></Dottom>
    </div>

</template>
<script>
import Header1 from '../../components/Header1'
import Dottom from '../../components/Dottom'
export default {
    components:{
        Header1,
        Dottom
    }
    ,
    name:'mian1',
    data() {
        return {
            active: 1,
        }
    },
}
</script>
<style scoped>

</style>