<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  @font-face {
    font-family: "Myfont";
    src: url("assets/font/MFShangHei_Noncommercial-Regular.ttf");
  }
  #app {
    font-family: Myfont;
    font-size: 0.16rem;
  }
</style>
