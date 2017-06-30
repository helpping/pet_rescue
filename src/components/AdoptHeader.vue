<template>
  <div id="adopt-header">
    <div class="adopt-back">
      <img src="../assets/img/back.png" alt="">
    </div>
    <div class="adopt-logo">
      <img src="../assets/img/logo.png" alt="">
    </div>
    <div class="adopt-info">
      <router-link to="/adopt/adoptInfo/"><img src="../assets/img/info.png" alt=""></router-link>
    </div>
  </div>
</template>
<script>

</script>
<style>
  #adopt-header{
    width: 100%;
    height:0.6rem;
    background: #7cc4b8;
  }
  .adopt-back,.adopt-logo,.adopt-info{
    width: 33.33%;
    height: 100%;
    float: left;
  }
  .adopt-back img{
    width: 0.24rem;
    height: 0.38rem;
    margin-left: 0.2rem;
    margin-top: 0.11rem;
  }
  .adopt-logo{
    text-align: center;
  }
  .adopt-logo img{
    width: 0.54rem;
    height: 0.46rem;
    margin-top: 0.07rem;
  }
  .adopt-info img{
    width: 0.42rem;
    height: 0.4rem;
    margin-top:0.09rem;
    float: right;
    margin-right: 0.25rem;
  }
</style>
