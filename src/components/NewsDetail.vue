<template>
    <div>
        <!--公用header-->
        <common-header></common-header>
        <!--公用header-->
        <div id="news-detail">
              <img :src="'http://127.0.0.1/pet_rescue_ci/'+newsDetailList.news_img" alt="">
              <h6>{{newsDetailList.news_title}}</h6>
              <p>{{newsDetailList.news_content}}</p>
              <div>{{newsDetailList.post_date}}</div>
        </div>
        <!--公用footer-->
        <common-footer></common-footer>
        <!--公用footer-->

    </div>
</template>

<script>
    import CommonHeader from './CommonHeader'
    import CommonFooter from './CommonFooter'
    import Axios from 'axios'
    export default{
        components : {
            CommonHeader,
            CommonFooter
        },
        data(){
            return {
                newsDetailList : []
            }
        },
        mounted : function(){
            Axios.get('http://127.0.0.1/pet_rescue_ci/news/get_news_detail/'+this.$route.params.news_id).then((res) => {
                this.newsDetailList = res.data;

            });
        }
    }
</script>

<style>
    @import '../assets/css/common.css';
    @import '../assets/css/news-detail.css';
</style>
