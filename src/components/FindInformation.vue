<template>
  <div id="content">
    <div id="common-header">
      <div class="common-back">
        <img src="../assets/img/back.png" alt="">
      </div>
      <div class="common-logo">
        <span>找回信息</span>
      </div>
      <div class="common-person">
        <a href=""><img src="../assets/img/header.png" alt=""></a>
      </div>
    </div>

    <div id="cute-push">
      <a class="personal-icon" href="">
        <img src="../assets/img/personal-icon.png" alt="">
        <span>TOM</span>
      </a>
      <router-link class="push" to="/my-find/">我要找回</router-link>
    </div>


    <div class="wrapper" v-for="seek in seekInformation">
      <div class="check-list">
        <div class="list-left">
          <img :src="'http://127.0.0.1/pet_rescue_ci/'+seek.img_src" alt="">
        </div>
        <div class="list-right">
          <p class="name-age"><span class="adop-name">{{seek.pet_variety}}</span></p>
          <p class="adop-add">{{seek.lost_address}}</p>
          <p class="adop-desc">{{seek.description}}</p>
        </div>
      </div>
      <div class="handle">
        <a href="#" class="update">修改</a>
        <v-touch class="del" v-on:tap="deleteSeek(seek)">删除</v-touch>
      </div>
    </div>
    <!--加载完毕-->
    <load-end v-show="show"></load-end>
    <!--加载完毕-->
  </div>

</template>

<style>
  @import "../assets/css/common.css";
  #content{
    width: 100%;
  }
  body{
    background: #f1f1f1;
  }
  #common-header{
    width: 100%;
    height: 0.6rem;
    background: #7cc4b8;
  }
  .common-back, .common-logo, .common-person{
    float: left;
    width: 33.33%;
    height: 100%;
  }
  .common-back img{
    width: 0.24rem;
    height: 0.38rem;
    margin-left: 0.2rem;
    margin-top: 0.11rem;
  }
  .common-logo{
    text-align: center;
  }
  .common-logo span{
    display: inline-block;
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
    font-size:0.3rem;
    color: #ffffff;
  }
  .common-person img{
    width: 0.38rem;
    height: 0.38rem;
    margin-top: 0.11rem;
    float: right;
    margin-right: 0.2rem;
  }

  #cute-push{
    width: 100%;
    height: 0.9rem;
    border-bottom: 2px solid #ebebeb;
  }
  .personal-icon, .push{
    height: 100%;
  }
  .personal-icon{
    float: left;
    margin-left: 0.4rem;
  }
  .personal-icon img{
    width: 0.64rem;
    height: 0.64rem;
    margin-top: 0.13rem;
    float: left;

  }
  .personal-icon span{
    height: 100%;
    color: #7cc4b8;
    font-size: 0.3rem;
    float: left;
    margin-left: 0.18rem;
    line-height: 0.9rem;
  }
  .push{
    width: 1.42rem;
    height: 0.42rem;
    margin-top: 0.24rem;
    background: #7cc4b8;
    color: #ffffff;
    font-size: 0.24rem;
    text-align: center;
    line-height: 0.42rem;
    border-radius: 0.03rem;
    float: right;
    margin-right: 0.4rem;
  }

  .wrapper{
    width: 100%;
    border-top:solid 0.1rem #999999;
  }
  .check-list{
    width: 6rem;
    margin: 0.2rem auto 0;
    overflow: hidden;

  }
  .list-right p{
    text-indent:0.2rem;
  }
  .list-left{
    float: left;
  }
  .list-left img{
    width: 1.6rem;
    height: 1.6rem;
  }
  .list-right{
    float: right;
    height: 1.57rem;
    width: 4.3rem;
    border-bottom: 0.03rem solid #cecece;
  }
  .name-age{
    overflow: hidden;
  }
  .adop-name{
    font-size: 0.28rem;
    float: left;
  }
  .adop-age{
    float:right;
    font-size: 0.28rem;
  }
  .adop-add{
    margin-top: 0.21rem;
    clear: both;
    font-size: 0.22rem;
    color: #555555;
  }
  .adop-desc{
    margin-top: 0.21rem;
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.24rem;
  }
  .handle{
    clear: both;
    margin: 0.45rem auto 0.6rem;
  }
  .handle div, .handle a{
    border-radius: 0.05rem;
    font-size: 0.3rem;
    display: inline-block;
    width: 2rem;
    height: 0.54rem;
    line-height:0.54rem;
    text-align: center;
    background: #7cc4b8;
    color: #333;
    border: solid 0.01rem #6d7675;
  }
  .update{
    margin-left: 0.74rem;
  }
  .del{
    margin-left: 0.87rem;
  }
</style>
<script>
  import '../assets/js/rem.js'
  import Axios from 'axios'
  import CommonHeader from './CommonHeader'
  import LoadEnd from './LoadEnd'
  export default {
      components : {
          CommonHeader,
          LoadEnd
      },
      data(){
          return{
              seekInformation:[],
              page : 1,
              pageSize : 4,
              isLoaded : true,
              isEnd : false,
              show : false
          }
      },
      methods : {
          loadSeekInfo : function(page){
              Axios.get('http://127.0.0.1/pet_rescue_ci/welcome/get_seek_information/'+this.$route.params.user_id, {
                  params : {
                      page : page,
                      pageSize : this.pageSize
                  }
              }).then((res)=>{
                  this.seekInformation = this.seekInformation.concat(res.data.seekInfo);
                  this.isLoaded = true;
                  this.isEnd = res.data.isEnd;
              });
          },
          deleteSeek : function(seek){
//              console.log(seek);
//              console.log(this.seekInformation.indexOf(seek));
              if(confirm('确认删除，不可撤销？')){
                  Axios.get('http://127.0.0.1/pet_rescue_ci/welcome/delete_seek', {
                      params : {
                          seekId : seek.seek_id
                      }
                  }).then((res) => {
                      if(res.data == 'success'){
                          this.seekInformation.splice(this.seekInformation.indexOf(seek), 1);
                      }
                  });
              }

          }
      },
      mounted : function(){
          this.loadSeekInfo(this.page);
          var _this = this;
          $(window).on('scroll', function(){
              if(_this.isEnd){
                  _this.show = true;
                  return;
              }
              if(_this.isLoaded){
                  _this.isLoaded = false;
                  _this.page++;
                  _this.loadSeekInfo(_this.page);
              }

          });
      }
  }
</script>

