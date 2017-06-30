<template>
    <div>
        <common-header></common-header>
        <div class="volunteer-title">志愿信息完善</div>
        <div id="vol-info-box">
            <div class="vol-info-list">
                <span class="vol-span-1">学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;历</span>
                <input class="vol-input-1" type="text" v-model="education">
            </div>
            <div class="vol-info-list">
                <span class="vol-span-1">志愿时长</span>
                <input class="vol-input-1" type="text" v-model="volLong">
            </div>
            <div class="vol-info-list">
                <span class="vol-span-1">志愿时间</span>
                <input class="vol-input-1" type="text" v-model="volTime">
              </div>
            <div class="vol-info-list add">
                <span class="vol-span-1">希望从事</span>
                <div class="hope-type">
                    <div class="hope-type-list">
                        <input class="vol-input-2" type="checkbox" v-model="organization">
                        <span>活动组织</span>
                    </div>
                    <div class="hope-type-list">
                      <input class="vol-input-2" type="checkbox"  v-model="medical">
                      <span>医疗救助</span>
                    </div>
                    <div class="hope-type-list">
                      <input class="vol-input-2" type="checkbox"  v-model="care">
                      <span>日常照料</span>
                    </div>
                    <div class="hope-type-list">
                      <input class="vol-input-2" type="checkbox"  v-model="advertise">
                      <span>宣传相关</span>
                    </div>
                </div>
            </div>
            <v-touch v-on:tap="pushVol" class="vol-submit">上传信息</v-touch>
        </div>
        <common-footer></common-footer>
    </div>
</template>

<style>
    @import "../assets/css/common.css";
    .volunteer-title{
      padding: 0 0.2rem;
      height: 0.6rem;
      background: #ececec;
      color: #666666;
      font-size: 0.2rem;
      line-height: 0.6rem;
    }
    #vol-info-box{
      padding: 0.14rem 0.36rem;
    }
    .vol-info-list{
      width: 100%;
      height: 0.4rem;
      margin-top: 0.18rem;
    }
    .vol-info-list .vol-span-1{
      width: 1.04rem;
      height: 100%;
      float: left;
      color: #666666;
      font-size: 0.26rem;
      text-align: center;
      line-height: 0.4rem;
    }
    .vol-info-list .vol-input-1{
      width: 4.44rem;
      height: 0.38rem;
      float: right;
      border: 0.01rem solid #a1a1a1;
      outline: none;
      border-radius: 0.05rem;
      text-indent: 0.1rem;
      font-size: 0.2rem;
      color: #a1a1a1;
    }
    .add{
      height: 0.8rem;
    }
    .hope-type{
      width: 4.44rem;
      float: right;
    }
    .hope-type-list{
      width: 50%;
      height: 100%;
      line-height: 0.4rem;
      float: left;
    }
    .vol-input-2{
      width: 0.2rem;
      height: 0.2rem;
      float: left;
      margin-top: 0.1rem;
    }
    .hope-type-list span{
      float: left;
      height: 100%;
      color: #7cc4b8;
      font-size: 0.2rem;
      margin-left: 0.1rem;
    }
    .vol-submit{
      width: 1.98rem;
      height: 0.58rem;
      background: #7cc4b8;
      border: 0.01rem solid #666666;
      font-size: 0.26rem;
      color: #ffffff;
      text-align: center;
      line-height: 0.58rem;
      border-radius: 0.05rem;
      margin: 0.44rem auto;
    }
</style>

<script>
    import CommonHeader from './CommonHeader'
    import CommonFooter from './CommonFooter'
    import Axios from 'axios'
    export default{
        components :{
            CommonHeader,
            CommonFooter
        },
        data(){
            return {
                education : '',
                volLong : '',
                volTime : '',
                organization : '',
                medical : '',
                care : '',
                advertise : ''
            };
        },
        methods : {
            sureValue : function(){
                if(this.organization){
                    this.organization = 1;
                }else{
                    this.organization = 0;
                }
                if(this.medical){
                    this.medical = 1;
                }else{
                    this.medical = 0;
                }
                if(this.care){
                    this.care = 1;
                }else{
                    this.care = 0;
                }
                if(this.care){
                    this.advertise = 1;
                }else{
                    this.advertise = 0;
                }
            },
            pushVol : function(){
                if(this.education == ''){
                    alert('请填写学历！！！');
                }else if(this.volLong == ''){
                    alert('请填写志愿时长！！！');
                }else if(this.volTime == ''){
                    alert('请填写志愿时间！！！');
                }else{
                    this.sureValue();
                    console.log("this.organization:"+this.organization+":"+"this.medical:"+this.medical);
                    var params = new URLSearchParams();
                    params.append('education', this.education);
                    params.append('volLong', this.volLong);
                    params.append('volTime', this.volTime);
                    params.append('organization', this.organization);
                    params.append('medical', this.medical);
                    params.append('care', this.care);
                    params.append('advertise', this.advertise);
                    Axios.post('http://127.0.0.1/pet_rescue_ci/volunteer/add_volunteer_info/'+this.$route.params.vol_id,params).then((res) => {
                        if(res.data == 'applyed'){
                            alert('您已经报过该志愿活动，无需重报！！！');
                        }else if(res.data == 'success'){
                            alert('报名成功，待管理员审核通知！！！');
                        }
                    });
                }
            }
        }
    }
</script>
