<template>
  <div>
      <common-header></common-header>
      <div class="adopt-info-title"><span>领养信息完善</span></div>
      <div class="adopt-info-content">
          <form action="" id="adopt-info-form">
              <div class="adopt-info-input"><span>身份证号</span><input type="text" v-model="idNumber"></div>
              <div class="adopt-info-input"><span>详细地址</span><input type="text" v-model="address"></div>
              <div class="adopt-info-input">
                  <span class="special1">收&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;入</span>
                  <select v-model="income">
                      <option value="1000~2000">1000~2000</option>
                      <option value="2000~4000">2000~4000</option>
                      <option value="4000~6000">4000~6000</option>
                      <option value="6000以上">6000以上</option>
                  </select>
              </div>
              <div class="adopt-info-input special">
                  <span class="special1">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱</span>
                  <input type="text" v-model="email">
              </div>
              <div class="adopt-info-title-two">上传身份证</div>
              <div class="upload-img">
                  <div class="upload-img-front">
                      <img ref="frontImg" src="../assets/img/ID-front.png" alt="">
                      <input type="file" name="img" ref="front" v-on:change="uploadImgFront">
                      <v-touch v-show="frontShow" v-on:tap="deleteFront"></v-touch>
                  </div>
                  <div class="upload-img-behind">
                      <img ref="behindImg" src="../assets/img/ID-behind.png" alt="">
                      <input type="file" name="img" ref="behind" v-on:change="uploadImgBehind">
                      <v-touch v-show="behindShow" v-on:tap="deleteBehind"></v-touch>
                  </div>
              </div>
              <v-touch v-on:tap="pushInfo" class="submit">上传信息</v-touch>
          </form>
      </div>
      <common-footer></common-footer>
  </div>
</template>
<style>
  @import '../assets/css/common.css';
  @import "../assets/css/adopt-info.css";
</style>
<script>
    import CommonHeader from './CommonHeader'
    import CommonFooter from './CommonFooter'
    import Axios from 'axios'
    export default{
        components:{
          CommonHeader,
          CommonFooter
        },
        data(){
            return {
                frontImgSrc : '',
                behindImgSrc : '',
                frontShow : false,
                behindShow : false,
                idNumber : '',
                address : '',
                income : '1000~2000',
                email : '',
                localSrc : '',
                localImgArr : [],
                testImgArr : ['jpg','png','jpeg','gif'],
                bFlag : false

            }
        },
        methods:{
            uploadImgFront : function(){
                this.localSrc = this.$refs.front.value;
                this.localImgArr = this.localSrc.split('.');
                for(var i=0; i<this.testImgArr.length; i++){
                    if(this.testImgArr[i] == this.localImgArr[1]){
                      this.bFlag = true;
                    }
                }
                if(this.bFlag){
                    this.bFlag = false;
                    var imgData = new FormData();
                    imgData.append("img", this.$refs.front.files[0]);
                    var _this = this;
                    $.ajax({
                        url: "http://127.0.0.1/pet_rescue_ci/adoption/upload_img",
                        type: "POST",
                        processData: false,
                        contentType: false,
                        data: imgData,
                        success: function(data) {
                            console.log(data);
                            _this.frontImgSrc = data;
                            _this.$refs.frontImg.src="http://127.0.0.1/pet_rescue_ci/"+_this.frontImgSrc;
                            _this.frontShow = true;
                        }
                    });
                }else{
                    alert("请选择后缀名为'png','jpg','jpeg','gif'的图片！！！");
                }

            },
            uploadImgBehind : function(){
                this.localSrc = this.$refs.behind.value;
                this.localImgArr = this.localSrc.split('.');
                for(var i=0; i<this.testImgArr.length; i++){
                    if(this.testImgArr[i] == this.localImgArr[1]){
                      this.bFlag = true;
                    }
                }
                if(this.bFlag){
                    this.bFlag = false;
                    var imgData = new FormData();
                    imgData.append("img", this.$refs.behind.files[0]);
                    var _this = this;
                    $.ajax({
                        url: "http://127.0.0.1/pet_rescue_ci/adoption/upload_img",
                        type: "POST",
                        processData: false,
                        contentType: false,
                        data: imgData,
                        success: function(data) {
                            console.log(data);
                            _this.behindImgSrc = data;
                            _this.$refs.behindImg.src="http://127.0.0.1/pet_rescue_ci/"+_this.behindImgSrc;
                            _this.behindShow = true;
                        }
                    });
                }else{
                    alert("请选择后缀名为'png','jpg','jpeg','gif'的图片！！！");
                }

            },
            deleteFront : function(){
                this.$refs.frontImg.src = require('../assets/img/ID-front.png');
                this.$refs.front.value = '';
                Axios.get('http://127.0.0.1/pet_rescue_ci/adoption/delete_img',{
                    params : {
                        imgSrc : this.frontImgSrc
                    }
                }).then((res) => {
                    this.frontShow = false;
                });
            },
            deleteBehind : function(){
                this.$refs.behindImg.src = require('../assets/img/ID-behind.png');
                this.$refs.behind.value = '';
                Axios.get('http://127.0.0.1/pet_rescue_ci/adoption/delete_img',{
                    params : {
                      imgSrc : this.behindImgSrc
                    }
                }).then((res) => {
                    this.behindShow = false;
                });
            },
            pushInfo : function(){
                var params = new URLSearchParams();
                params.append('frontImgSrc', this.frontImgSrc);
                params.append('behindImgSrc', this.behindImgSrc);
                params.append('idNumber', this.idNumber);
                params.append('address', this.address);
                params.append('income', this.income);
                params.append('email', this.email);
                if(this.frontImgSrc == '' || this.behindImgSrc == ''){
                    alert('请上传身份证图片！！！');
                }else if(this.idNumber == ''){
                    alert('请输入身份证号码！！！');
                }else if(this.address == ''){
                    alert('请填写地址！！！');
                }else if(this.income == ''){
                    alert('请填写收入！！！');
                }else if(this.income == ''){
                    alert('请填写邮箱！！！');
                }else{
                    Axios.post('http://127.0.0.1/pet_rescue_ci/adoption/add_user_info', params).then((res) => {
                        if(res.data == 'success'){
                            alert('信息提交成功！！！');
                        }
                    });
                }
            }

        },

        mounted:function(){

        }
    }
</script>

