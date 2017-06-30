<template>
    <div>
        <!--公用header-->
        <common-header></common-header>
        <!--公用header-->
        <!--轮播图start-->
        <carousel :img-arr="imgArr"></carousel>
        <!--轮播图end-->
        <div id="cute-push">
            <a class="personal-icon" href="">
                <img src="../assets/img/personal-icon.png" alt="">
                <span>TOM</span>
            </a>
            <router-link class="push" to="/cute-push/">我要上传</router-link>
        </div>
        <div id="pet-kind">
            <router-link to="/cute-detail/dog">狗</router-link>
            <router-link to="/cute-detail/cat">猫</router-link>
            <router-link to="/cute-detail/water">水宠</router-link>
            <router-link to="/cute-detail/bird">鸟</router-link>
            <router-link to="/cute-detail/other">其他</router-link>
        </div>
        <!--footer-->
        <common-footer></common-footer>
        <!--footer-->
    </div>
</template>

<script>
    import CommonHeader from './CommonHeader'
    import Carousel from './Carousel'
    import CommonFooter from './CommonFooter'
    export default{
        components : {
            CommonHeader,
            Carousel,
            CommonFooter
        },
        data(){
            return {
                imgArr : [require('../assets/img/carousel/3.jpg'),require('../assets/img/carousel/4.jpg'),require('../assets/img/carousel/5.jpg'),require('../assets/img/carousel/6.jpg')]
            }
        },
        mounted : function(){
//            console.log(this.imgArr);
        }
    }
</script>
<style>
    @import "../assets/css/cute.css";
</style>
