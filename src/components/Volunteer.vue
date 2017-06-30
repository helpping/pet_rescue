<template>
    <div>
        <common-header></common-header>
        <div id="volunteer-box">
            <div class="volunteer-list" v-for="vol in volList">
                <div class="vol-divide"></div>
                <div class="vol-content">
                    <div class="vol-title">
                        <div>{{vol.vol_title}}</div>
                        <div>
                            <span class="vol-long">三天</span>
                            <span class="vol-start">{{vol.volunteer_time}}</span>
                        </div>
                    </div>
                    <div class="vol-desc">{{vol.vol_content}}</div>
                    <div class="vol-btn">
                        <div class="vol-detail"><router-link :to="'/volunteer-detail/'+vol.volunteer_id">详情</router-link></div>
                        <div class="vol-apply"><router-link :to="'/volunteer-info/'+vol.volunteer_id">报名</router-link></div>
                    </div>
                </div>
            </div>
            <div class="vol-divide"></div>
            <!--加载完毕-->
            <load-end v-show="show"></load-end>
            <!--加载完毕-->
        </div>
    </div>
</template>

<style>
  @import "../assets/css/common.css";
  .vol-divide{
    width: 100%;
    height: 0.12rem;
    background: #ececec
  }
  .vol-content{
    height: 1.74rem;
    padding: 0.14rem 0.2rem;
  }
  .vol-title{
    width: 100%;
    height: 0.32rem;
  }
  .vol-title div{
    width: 50%;
    height: 100%;
    float: left;
  }
  .vol-title div:nth-child(1){
    color: #666666;
    font-size: 0.32rem;

  }
  .vol-long,.vol-start{
    height: 100%;
    line-height: 0.32rem;
  }
  .vol-long{
    float: left;
    color: #b5b5b5;
    font-size: 0.16rem;
  }
  .vol-start{
    float: right;
    color: #666666;
    font-size: 0.22rem;
  }
  .vol-desc{
    width: 100%;
    height: 0.76rem;
    line-height: 0.76rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.18rem;
    color: #666666;
  }
  .vol-btn div{
    width: 50%;
    height: 0.55rem;
    float: left;
  }
  .vol-btn div a{
    width: 1.18rem;
    height: 0.38rem;
    display: block;
    border: 0.01rem solid #666666;
    background: #7cc4b8;
    font-size: 0.24rem;
    color: #ffffff;
    text-align: center;
    line-height: 0.38rem;
    margin: 0 auto;
    border-radius: 0.05rem;
  }
  #loaded{
    margin: 0.2rem 0;
  }
</style>

<script>
    import CommonHeader from './CommonHeader'
    import Axios from 'axios'
    import LoadEnd from './LoadEnd'
    export default{
        components : {
            CommonHeader,
            LoadEnd
        },
        data(){
            return {
                page : 1,
                pageSize : 2,
                volList : [],
                isLoaded : true,
                isEnd : false,
                show : false
            };
        },
        methods : {
            loadVolunteer : function(page){
                Axios.get('http://127.0.0.1/pet_rescue_ci/volunteer/get_all_volunteer',{
                    params : {
                        page : page,
                        pageSize : this.pageSize
                    }
                }).then((res) => {
                    this.volList = this.volList.concat(res.data.vol);
                    this.isLoaded = true;
                    this.isEnd = res.data.isEnd;
                });
            }
        },
        mounted : function(){
            this.loadVolunteer(this.page);
            var _this = this;
            $(window).on('scroll', function(){
                if(_this.isEnd){
                    _this.show = true;
                    return;
                }
                if(_this.isLoaded){
                    _this.isLoaded = false;
                    _this.page++;
                    _this.loadVolunteer(_this.page);
                }
            });
        }
    }
</script>
