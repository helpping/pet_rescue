<template>
    <div>
        <li>
            <img class="main-img" :src="'http://127.0.0.1/pet_rescue_ci/'+cute.img_src" alt="">
            <div class="cute-like">
                <div class="cute-liker">{{cute.username}}</div>
                <div class="click-like">
                    <img src="../assets/img/like/heart1.png" alt="">
                    <span>5000</span>
                </div>
            </div>
            <p>{{cute.description}}</p>
        </li>
    </div>
</template>
<script>
    export default{
        props : ['cuteList']
    }
</script>

<style>

</style>
