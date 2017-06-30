<template>
    <div>
        <common-header></common-header>
        <div id="vol-bg"></div>
        <div id="vol-detail-box">
            <div class="vol-detail-title">{{volDetail.vol_title}}</div>
            <div class="vol-detail-content">{{volDetail.vol_content}}</div>
            <div class="education">学历要求：{{volDetail.education}}</div>
            <div class="vol-type">活动类别：{{volDetail.vol_type}}</div>
            <div class="vol-time">志愿时间：{{volDetail.volunteer_time}}</div>
        </div>
    </div>
</template>

<style>
    @import "../assets/css/common.css";
    #vol-bg{
      width: 100%;
      height: 3.6rem;
      background: url("../assets/img/vol-bg.jpg") no-repeat center;
      background-size: 100% 100%;
    }
    #vol-detail-box{
      padding: 0 0.2rem;
    }
    .vol-detail-title{
      width: 100%;
      height: 0.7rem;
      color: #7cc4b8;
      text-align: center;
      line-height: 0.7rem;
    }
    .vol-detail-content{
      width: 100%;
      color: #565656;
      font-size: 0.22rem;
      text-indent: 0.4rem;
    }
    .education,.vol-type,.vol-time{
      width: 100%;
      font-size: 0.22rem;
      color: #73baaf;
      margin: 0.2rem 0;
    }
</style>

<script>
    import CommonHeader from './CommonHeader'
    import Axios from 'axios'
    export default{
        components :{
            CommonHeader
        },
        data(){
            return {
                volDetail : []
            };
        },
        mounted : function(){
            Axios.get('http://127.0.0.1/pet_rescue_ci/volunteer/get_volunteer_detail/'+this.$route.params.vol_id).then((res) =>{
                this.volDetail = res.data;
                console.log(this.volDetail);
            });
        }
    }
</script>
