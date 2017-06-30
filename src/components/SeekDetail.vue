<template>
    <div>
        <common-header></common-header>
        <carousel :img-arr="imgArr"></carousel>
        <div id="seek-detail-box">
            <div class="seek-title">
                <div class="seek-left">{{seekDetail.pet_variety}}</div>
                <div class="seek-right">
                    <span>{{seekDetail.pet_color}}</span>
                    <span>汤姆</span>
                </div>
            </div>
            <div class="seek-divide"></div>
            <div class="lost-time">
                <span>丢失时间</span>
                <span>{{seekDetail.lost_date}}</span>
            </div>
            <div class="lost-site">
                <span>丢失地点</span>
                <span>{{seekDetail.lost_address}}</span>
            </div>
            <div class="lost-description">
                <span>详情描述</span>
                <span>{{seekDetail.description}}</span>
            </div>
        </div>
    </div>
</template>

<style>
    @import "../assets/css/common.css";
    #seek-detail-box{
      padding: 0.25rem 0.2rem;
      height: 5rem;
    }
    .seek-title{
      width: 100%;
      height: 0.35rem;
    }
    .seek-left, .seek-right{
      width: 50%;
      height: 100%;
      float: left;
    }
    .seek-left{
      font-size: 0.35rem;
      color: #333333;
    }
    .seek-right span:nth-child(1){
      font-size: 0.3rem;
      color: #7cc4b8;
      float: left;
      height: 100%;
      line-height: 0.35rem;
    }
    .seek-right span:nth-child(2){
      float: right;
      color: #333333;
      font-size: 0.35rem;
    }
    .seek-divide{
      width: 30%;
      height: 0.04rem;
      background: #333333;
      margin-top: 0.24rem;
    }
    .lost-time,.lost-site{
      width: 100%;
      height: 0.35rem;
      margin-top: 0.14rem;
    }
    .lost-time span, .lost-site span{
      float: left;
      height: 100%;
    }
    .lost-time span:nth-child(1),.lost-site span:nth-child(1),.lost-description span:nth-child(1){
      width: 30%;
      font-size: 0.25rem;
      color: #333333;
    }
    .lost-time span:nth-child(2),.lost-site span:nth-child(2),.lost-description span:nth-child(2){
      width: 70%;
      font-size: 0.25rem;
      color: #959494;
    }
    .lost-description{
      width: 100%;
      margin-top: 0.14rem;
    }
    .lost-description span{
      float: left;
    }
    .lost-description span:nth-child(1){

    }
    .lost-description span:nth-child(2){

    }
</style>

<script>
    import CommonHeader from './CommonHeader'
    import Carousel from './Carousel'
    import Axios from 'axios'
    export default{
        components : {
            CommonHeader,
            Carousel
        },
        data(){
            return {
                imgArr : [],
                imgs : [],
                seekDetail : []
            }
        },
        mounted : function(){
            Axios.get('http://127.0.0.1/pet_rescue_ci/seek/get_seek_detail/'+this.$route.params.seek_id,).then((res) => {
                this.seekDetail = res.data;
                this.imgs = res.data.imgs;
                console.log(this.imgs);
                for(var i=0; i<this.imgs.length; i++){
                    this.imgs[i].img_src = 'http://127.0.0.1/pet_rescue_ci/' + this.imgs[i].img_src;
                    this.imgArr.push(this.imgs[i].img_src);
                }
            });
            console.log(this.imgArr);
        }
    }
</script>
