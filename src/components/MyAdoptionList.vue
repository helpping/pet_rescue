<template>
  <div id="checked">
    <div class="check-list" v-for="adoption in adoptionList">
      <div class="list-left">
        <router-link :to="'/adopt-detail/'+adoption.pet_id"><img :src="'http://127.0.0.1/pet_rescue_ci/'+adoption.img_src" alt=""></router-link>
      </div>
      <div class="list-right">
        <p class="name-age"><router-link :to="'/adopt-detail/'+adoption.pet_id"><span class="adop-name">{{adoption.pet_variety}}</span></router-link><span class="adop-age">{{adoption.pet_age}}岁</span></p>
        <p class="adop-add">{{adoption.city}}</p>
        <p class="adop-desc">{{adoption.description}}</p>
      </div>
    </div>
  </div>
</template>

<style>
  .name-age a{
    color: #555555;
  }
</style>

<script>
    export default{
        props : ['adoptionList']
    }
</script>
