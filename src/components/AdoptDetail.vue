<template>
    <div>
        <common-header></common-header>
        <!--轮播图-->
        <carousel :img-arr="imgArr"></carousel>
        <!--轮播图-->
        <div id="adopt-detail">
            <div class="adopt-detail-title">
                <span class="pet-variety">{{adoptDetail.pet_variety}}</span>
                <span class="pet-age">{{adoptDetail.pet_age}}岁</span>
            </div>
            <div class="request">
                <span>领养要求:</span>
            </div>
            <div class="request-detail">
              {{adoptDetail.description}}
            </div>
            <div class="adopt-submit">
                <router-link to="/adoptInfo/">确认领养</router-link>
            </div>
        </div>
    </div>
</template>
<script>
  import CommonHeader from './CommonHeader'
  import Carousel from './Carousel'
  import Axios from 'axios'
  export default{
      components:{
        CommonHeader,
        Carousel
      },
      data(){
            return {
                adoptDetail:[],
                imgArr : [],
                imgs : [],
                arr : [require('../assets/img/carousel/1.jpg'),require('../assets/img/carousel/2.jpg')]
            }
      },
      methods:{

      },
      mounted:function(){
          Axios.get("http://127.0.0.1/pet_rescue_ci/adoption/get_adopt_detail/"+this.$route.params.pet_id).then((res)=>{
              this.adoptDetail=res.data.adoptDetails;
              this.imgs = res.data.adoptDetails.img;
              for(var i=0 ;i<this.imgs.length; i++){
                  this.imgs[i].img_src = 'http://127.0.0.1/pet_rescue_ci/' + this.imgs[i].img_src;
                  this.imgArr.push(this.imgs[i].img_src);
              }
          });

          console.log(this.imgArr);
          console.log(this.arr);
      }
  }
</script>
<style>
  @import '../assets/css/common.css';
  /*@import '../assets/css/news.css';*/
  @import '../assets/css/adopt-detail.css';
</style>
