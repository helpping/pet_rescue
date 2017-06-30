<template>
    <div>
        <!--commonheader-->
        <common-header></common-header>
        <!--commonheader-->
        <div id="cute-detail-kind">
            <span>{{cuteType}}</span>
        </div>
        <div id="waterfall">
            <ul v-for="ul in ulArr" class="col" ref="ul">
            </ul>
            <div style="clear: both;"></div>
            <load-end v-show="show"></load-end>
        </div>
        <common-footer></common-footer>
    </div>
</template>

<style>
  @import "../assets/css/common.css";
  @import "../assets/css/cute-detail.css";
  #loaded{
    padding: 0 0.38rem;
    margin-left: -0.38rem;
  }
</style>

<script>
    import CommonHeader from './CommonHeader'
    import WaterfallList from './WaterfallList'
    import CommonFooter from './CommonFooter'
    import LoadEnd from './LoadEnd'
    import Axios from 'axios'
    import '../assets/js/waterfall.js'
    export default{
        components : {
            CommonHeader,
            WaterfallList,
            CommonFooter,
            LoadEnd
        },
        data(){
            return {
                cuteType : '',
                cuteList : [],
                show : false,
                ulArr : [1, 2],
                minUl : '',
                likeArr : [require('../assets/img/like/heart1.png'), require('../assets/img/like/heart2.png')],
                page : 1,
                pageSize : 3,
                cute : [],
                isEnd : false,
                isLoaded : true,
            }
        },
        methods : {
            getKind : function(){
                switch(this.$route.params.cute_type){
                    case 'dog':
                        this.cuteType = '狗';
                        break;
                    case 'cat':
                        this.cuteType = '猫';
                        break;
                    case 'water':
                        this.cuteType = '水宠';
                        break;
                    case 'bird':
                        this.cuteType = '鸟';
                        break;
                    case 'other':
                        this.cuteType = '其他';
                        break;
                }
                return this.cuteType;
            },
            getMinUl : function(){
                var minUl = this.$refs.ul[0];
                for(var i=0; i<this.$refs.ul.length; i++){
                    if(minUl.offsetHeight > this.$refs.ul[i].offsetHeight){
                        minUl = this.$refs.ul[i];
                    }
                }
                return minUl;
            },
            loadData : function(page){
                Axios.get('http://127.0.0.1/pet_rescue_ci/cute/get_cute/'+this.$route.params.cute_type, {
                    params : {
                        page : page,
                        pageSize : this.pageSize
                    }
                }).then((res) => {
                    this.cute = res.data.cute;
                    this.isEnd = res.data.isEnd;
                    for(var i=0; i<this.cute.length; i++){
                        this.minUl = this.getMinUl();
                        var $html =$('<li>\
                                        <img class="main-img" src="http://127.0.0.1/pet_rescue_ci/'+ this.cute[i].img_src +'" alt="">\
                                        <div class="cute-like">\
                                            <div class="cute-liker">'+ this.cute[i].username +'</div>\
                                            <div class="click-like">\
                                                <img src="'+ this.likeArr[1] +'" alt="">\
                                                <span>'+ this.cute[i].num +'</span>\
                                            </div>\
                                        </div>\
                                        <p>'+ this.cute[i].description +'</p>\
                                  </li>');
                        $(this.minUl).append($html);
                    }
                    this.isLoaded = true;
                    this.isEnd = this.isEnd;
                });
            }
        },
        mounted : function(){
            //console.log(this.likeArr);
            this.getKind();
            this.loadData(this.page);
            var _this = this;
            $(window).on('scroll', function(){
                _this.minUl = _this.getMinUl();
                var scrollTop = $(window).scrollTop();
                if(scrollTop + $(window).height() >= $(_this.minUl).height()){
                    if(_this.isEnd){
                        _this.show = true;
                        return;
                    }
                    if(_this.isLoaded){
                        _this.isLoaded = false;
                        _this.page++;
                        _this.loadData(_this.page);
                    }
                }

            });
        }
    }
</script>

