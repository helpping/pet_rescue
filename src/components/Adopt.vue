<template>
  <div>
    <!--adopt页面专用header-->
    <common-header></common-header>
    <!--adopt页面专用header-->
    <div id="carousel-adopt">
      <ul class="carousel-adopt-tab">
        <li @click="switchTab(1)" :class="{active : currentIndex==1}">猫</li>
        <li @click="switchTab(2)" :class="{active : currentIndex==2}">狗</li>
        <li @click="switchTab(3)" :class="{active : currentIndex==3}">鼠</li>
        <li @click="switchTab(4)" :class="{active : currentIndex==4}">鸟</li>
        <li @click="switchTab(5)" :class="{active : currentIndex==5}">其他</li>
      </ul>
    </div>
    <div class="screen">
      <div class="screen-title">
        <span>筛选</span>
      </div>
      <div class="variety filter1">
        <span>毛色</span>
        <ul>
          <li><span @click="switchSpan(1)" :class="{selected : currentVariety==1}">白色</span></li>
          <li><span @click="switchSpan(2)" :class="{selected : currentVariety==2}">黑色</span></li>
          <li><span @click="switchSpan(3)" :class="{selected : currentVariety==3}">花色</span></li>
          <li><span @click="switchSpan(4)" :class="{selected : currentVariety==4}">其他</span></li>
        </ul>
      </div>
      <div class="variety filter2">
        <span>年龄</span>
        <ul>
          <li><span @click="switchAge(1)" :class="{selected : currentAge==1}">0~1</span></li>
          <li><span @click="switchAge(2)" :class="{selected : currentAge==2}">1~3</span></li>
          <li><span @click="switchAge(3)" :class="{selected : currentAge==3}">3~8</span></li>
          <li><span @click="switchAge(4)" :class="{selected : currentAge==4}">8以上</span></li>
        </ul>
      </div>
    </div>
    <div class="adopt-container">
      <adopt-list :adopt-list="adoptList"></adopt-list>
      <load-end v-show="show"></load-end>
    </div>

  </div>
</template>
<script>
    import '../assets/js/adopt.js'
    import Axios from 'axios'
    import CommonHeader from './CommonHeader'
    import AdoptList from './AdoptList'
    import LoadEnd from './LoadEnd'
    export default{
        components:{
            CommonHeader,
            AdoptList,
            LoadEnd
        },
        data(){
            return {
                adoptList:[],
                page:1,
                pageSize:4,
                isLoaded:true,
                isEnd:false,
                currentIndex:0,
                currentVariety:0,
                currentAge:0,
                show:false,
                select : true
            }
        },
        methods:{
            switchTab:function(index){
                this.currentIndex=index;
                this.clear();
                this.loadAdopt({
                    petType : this.currentIndex,
                    petColor : this.currentVariety,
                    petAge : this.currentAge
                });
            },
            switchSpan:function(index){

                if(this.currentVariety==index){
                    this.currentVariety=0;
                }else{
                    this.currentVariety=index;
                }
                this.judgeSelect();
                this.clear();
                this.loadAdopt({
                    petType : this.currentIndex,
                    petColor : this.currentVariety,
                    petAge : this.currentAge
                });
            },
            switchAge:function(index){
                if(this.currentAge==index){
                    this.currentAge=0;
                }else{
                    this.currentAge=index;
                }
                this.judgeSelect();
                this.clear();
                this.loadAdopt({
                      petType : this.currentIndex,
                      petColor : this.currentVariety,
                      petAge : this.currentAge
                });
            },
            loadAdopt:function(option){
                var params = $.extend(option, {page : this.page});
                Axios.get('http://127.0.0.1/pet_rescue_ci/adoption/get_adopt',{
                    params : params
                }).then((res)=>{

                    this.adoptList = this.adoptList.concat(res.data.adopt);
                    this.isLoaded = true;
                    this.isEnd = res.data.isEnd;
                    this.select = res.data.select;
//                    console.log(this.adoptList);
                });
            },
            clear : function(){
                this.page = 1;
                this.adoptList = [];
            },
            judgeSelect : function(){
                if(this.currentIndex == 0 && (this.currentVariety || this.currentAge)){
                    alert('请先选择宠物种类！！！');
                }
            }
        },
        mounted : function(){
            this.loadAdopt(this.page);
            var _this = this;
            $(window).on('scroll', function(){
                if(_this.isEnd){
                    _this.show = true;
                    return;
                }
                if(_this.isLoaded){
                    _this.isLoaded = false;
                    _this.page++;
                    _this.loadAdopt({
                        petType : this.currentIndex,
                        petColor : this.currentVariety,
                        petAge : this.currentAge
                    });
                }
            });
        }

    }
  </script>



<style>
  @import "../assets/css/common.css";
  @import "../assets/css/adopt.css";
  #loaded{
     margin: 0.1rem 0;
  }

</style>
