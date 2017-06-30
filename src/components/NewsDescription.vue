<template>
    <div>
        <div class="news-list" v-for="news in newsList">
            <div class="news-img">
                <img :src="'http://127.0.0.1/pet_rescue_ci/'+news.news_img" alt="">
            </div>
            <div class="news-description">
                <router-link :to="'/news-detail/'+news.news_id"><h6>{{news.news_title}}</h6></router-link>
                <span>{{news.post_date}}</span>
                <p>{{news.news_content}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props : ['newsList']
    }
</script>

<style>

</style>
