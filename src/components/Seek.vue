<template>
    <div>
        <common-header></common-header>
        <carousel :img-arr="imgArr"></carousel>
        <div id="seek-content">
            <div id="checked">
                <div class="check-list" v-for="seek in seekList">
                    <div class="list-left">
                        <router-link :to="'/seek-detail/'+seek.seek_id">
                            <img :src="'http://127.0.0.1/pet_rescue_ci/'+seek.img_src" alt="">
                        </router-link>
                    </div>
                    <div class="list-right">
                        <p class="name-age"><router-link :to="'/seek-detail/'+seek.seek_id"><span class="adop-name">{{seek.pet_kind}}</span></router-link><span class="adop-age">{{seek.pet_color}}</span></p>
                        <p class="adop-desc">{{seek.description}}</p>
                    </div>
                </div>
            </div>
            <!--加载完毕-->
            <load-end v-show="show"></load-end>
            <!--加载完毕-->
        </div>
    </div>
</template>

<style>
    @import "../assets/css/common.css";
    .check-list{
      width: 6rem;
      margin: 0.2rem auto 0;
      overflow: hidden;
    }
    .list-left{
      float: left;
    }
    .list-left img{
      width: 1.6rem;
      height: 1.6rem;
    }
    .list-right{
      float: right;
      height: 1.57rem;
      width: 4.3rem;
      border-bottom: 0.03rem solid #cecece;
    }
    .check{
      width: 100%;
      height: 0.5rem;
      font-size: 0.4rem;
      line-height:0.5rem;
      text-indent: 0.2rem;
      background: #ececec;
    }
    .checked{
      margin-top: 0.2rem;
    }
    .name-age{
      overflow: hidden;
    }
    .name-age a{
      color: #555555;
    }
    .adop-name{
      font-size: 0.28rem;
      float: left;
    }
    .adop-age{
      float:right;
      font-size: 0.28rem;
    }
    .adop-add{
      margin-top: 0.21rem;
      clear: both;
      font-size: 0.22rem;
      color: #555555;
    }
    .adop-add span{
      color: #555555;
      margin-right: 0.2rem;
    }
    .adop-desc{
      margin-top: 0.21rem;
      overflow: hidden;
      -ms-text-overflow: ellipsis;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 0.24rem;
    }
    #loaded{
      margin: 0.2rem 0;
    }
</style>

<script>
    import CommonHeader from './CommonHeader'
    import Carousel from './Carousel'
    import Axios from 'axios'
    import LoadEnd from './LoadEnd'
    export default{
        components : {
            CommonHeader,
            Carousel,
            LoadEnd
        },
        data(){
            return {
                imgArr : [require('../assets/img/carousel/1.jpg'),require('../assets/img/carousel/2.jpg')],
                seekList : [],
                page : 1,
                pageSize : 4,
                isLoaded : true,
                isEnd : false,
                show : false
            };
        },
        methods : {
            loadSeek : function(page){
                Axios.get('http://127.0.0.1/pet_rescue_ci/seek/get_all_seek',{
                    params : {
                        page : page,
                        pageSize : this.pageSize
                    }
                }).then((res) => {
                    this.seekList = this.seekList.concat(res.data.allSeek);
                    this.isLoaded = true;
                    this.isEnd = res.data.isEnd;
                });
            }
        },
        mounted : function(){
            this.loadSeek(this.page);
            var _this = this;
            $(window).on('scroll', function(){
                if(_this.isEnd){
                    _this.show = true;
                    return;
                }
                if(_this.isLoaded){
                    _this.isLoaded = false;
                    _this.page++;
                    _this.loadSeek(_this.page);
                }

            });
        }
    }
</script>
