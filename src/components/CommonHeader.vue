<template>
    <div id="common-header">
        <div class="common-back">
            <img src="../assets/img/back.png" alt="">
        </div>
        <div class="common-logo">
            <img src="../assets/img/logo.png" alt="">
        </div>
        <div class="common-person">
            <router-link to="/user-information/"><img src="../assets/img/header.png" alt=""></router-link>
        </div>
    </div>
</template>

<script>

</script>

<style>
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
  .common-logo img{
    width: 0.54rem;
    height: 0.46rem;
    margin-top: 0.07rem;
  }
  .common-person img{
    width: 0.38rem;
    height: 0.38rem;
    margin-top: 0.11rem;
    float: right;
    margin-right: 0.2rem;
  }
</style>
