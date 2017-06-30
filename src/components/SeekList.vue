<template>
    <div>
        <div class="news-detail" v-for="seek in seekList">
            <div class="news-image">
                <img :src="'http://127.0.0.1/pet_rescue_ci/'+seek.img_src" alt="">
            </div>
            <div class="news-content">
                <a href="#"><h6>{{seek.pet_variety}}</h6></a>
                <p>{{seek.description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props : ['seekList']
    }
</script>

<style>


</style>
