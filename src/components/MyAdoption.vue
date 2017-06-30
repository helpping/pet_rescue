<template>
  <div id="content">
    <div id="common-header">
      <div class="common-back">
        <img src="../assets/img/back.png" alt="">
      </div>
      <div class="common-logo">
        <span>我的领养</span>
      </div>
      <div class="common-person">
        <a href=""><img src="../assets/img/header.png" alt=""></a>
      </div>
    </div>
    <p class="check">审核中</p>

    <!--我的未通过领养列表-->
    <my-adoption-list :adoption-list="NoPassAdoptList"></my-adoption-list>
    <!--我的未通过领养列表-->

    <!--审核中分页-->
    <pagination :total="noPassTotal" v-on:paginate="loadNoPassAdopt"></pagination>
    <!--审核中分页-->

    <p class="check checked">已通过</p>

    <!--我的通过领养列表-->
    <my-adoption-list :adoption-list="passAdoptList"></my-adoption-list>
    <!--我的通过领养列表-->

    <!--通过中分页-->
    <pagination :total="passTotal" v-on:paginate="loadPassAdopt"></pagination>
    <!--通过中分页-->
  </div>

</template>
<script>
  import '../assets/js/rem.js'
  import Axios from 'axios'
  import CommonHeader from './CommonHeader'
  import Pagination from './Pagination'
  import MyAdoptionList from './MyAdoptionList'
  export default {
      components : {
          CommonHeader,
          Pagination,
          MyAdoptionList
      },
      data(){
          return{
              NoPassAdoptList : [],
              NoPassCount : 0,
              noPassPage : 1,
              noPassPageSize : 2,
              passPage : 1,
              passPageSize : 2,
              passAdoptList : [],
              passCount : 0
          }

      },
      methods : {
          loadNoPassAdopt : function(page){
              Axios.get('http://127.0.0.1/pet_rescue_ci/adoption/get_no_pass_adoptions/'+this.$route.params.user_id,{
                  params : {
                      noPassPage : page,
                      noPassPageSize : this.noPassPageSize
                  }
              }).then((res) => {
                  this.NoPassAdoptList = res.data.noPassAdoptions;
                  this.NoPassCount = res.data.noPassAdoptionCount;
              });
          },
          loadPassAdopt : function(page){
              Axios.get('http://127.0.0.1/pet_rescue_ci/adoption/get_pass_adoptions/'+this.$route.params.user_id, {
                  params : {
                      passPage : page,
                      passPageSize : this.passPageSize
                  }
              }).then((res) => {
                  this.passAdoptList = res.data.passAdoptions;
                  this.passCount = res.data.passAdoptionsCount;
              });
          }
      },
      computed : {
          noPassTotal : function(){
              return Math.ceil(this.NoPassCount / this.noPassPageSize);
          },
          passTotal : function(){
              return Math.ceil(this.passCount / this.passPageSize);
          }
      },
      mounted : function(){
          this.loadNoPassAdopt(this.noPassPage);
          this.loadPassAdopt(this.passPage);
      }
  }
</script>
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
  .check-list{
    width: 6rem;
    margin: 0.2rem auto 0;
    overflow: hidden;
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
  .check{
    width: 100%;
    height: 0.5rem;
    font-size: 0.4rem;
    line-height:0.5rem;
    text-indent: 0.2rem;
    background: #ececec;
  }
  .checked{
    margin-top: 0.2rem;
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
</style>
