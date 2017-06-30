<template>
  <div>
    <div class="adopt-list" v-for="adopts in adoptList">
      <div class="adopt-img">
        <router-link :to="'/adopt-detail/'+adopts.pet_id"><img :src="'http://127.0.0.1/pet_rescue_ci/'+adopts.img_src" alt=""></router-link>
      </div>
      <div class="adopt-content">
        <router-link :to="'/adopt-detail/'+adopts.pet_id"><div class="adopt-top">
          <span class="adopt-top-title">{{adopts.pet_variety}}</span>
          <span class="adopt-top-age">{{adopts.pet_age}}岁</span>
        </div></router-link>
        <router-link :to="'/adopt-detail/'+adopts.pet_id"><div class="adopt-middle">{{adopts.city}}</div></router-link>
        <router-link :to="'/adopt-detail/'+adopts.pet_id"><div class="adopt-bottom">{{adopts.description}}</div></router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default{
    props:['adoptList']
}
</script>
<style>

</style>
