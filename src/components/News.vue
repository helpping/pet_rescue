<template>
    <div>
        <!--公用header-->
        <common-header></common-header>
        <!--公用header-->
        <!--轮播图start-->
        <carousel :img-arr="imgArr"></carousel>
        <!--轮播图end-->
        <div id="news-container">
            <!--新闻列表start-->
            <news-description :news-list="newsList"></news-description>
            <!--新闻列表end-->
            <load-end v-show="show"></load-end>
        </div>
        <!--公用footer-->
        <common-footer></common-footer>
        <!--公用footer-->
    </div>
</template>

<script>
    import Axios from 'axios'
    import CommonHeader from './CommonHeader'
    import NewsDescription from './NewsDescription'
    import Carousel from './Carousel'
    import CommonFooter from './CommonFooter'
    import LoadEnd from './LoadEnd'
    export default{
        components : {
            CommonHeader,
            NewsDescription,
            Carousel,
            CommonFooter,
            LoadEnd
        },
        data(){
            return {
                newsList : [],
                pageSize : 4,
                page : 1,
                imgArr : [require('../assets/img/carousel/1.jpg'),require('../assets/img/carousel/2.jpg'),require('../assets/img/carousel/3.jpg'),],
                isLoaded : true,
                isEnd : false,
                show : false
            }
        },
        methods : {
            loadNews : function(page){
                Axios.get('http://127.0.0.1/pet_rescue_ci/news/get_all_news', {
                    params : {
                        page : page,
                        pageSize : this.pageSize
                    }
                }).then((res) => {
                    //console.log(res.data);
                    this.newsList = this.newsList.concat(res.data.news);
                    this.isLoaded = true;
                    this.isEnd = res.data.isEnd;
                });
            },

        },
        mounted : function(){
            var _this = this;
            this.loadNews(this.page);
            $(window).on('scroll', function(){
              if(_this.isEnd){
                  _this.show = true;
                  return;
              }
              if(_this.isLoaded){
                  _this.isLoaded = false;
                  _this.page++;
                  _this.loadNews(_this.page);
              }
            });
        }
    }

</script>

<style>
    @import '../assets/css/common.css';
    @import '../assets/css/carousel.css';
    @import '../assets/css/news.css';
</style>
