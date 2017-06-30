<template>
    <div id="hello">
        <div id="header">
            <div class="header-content">
                <div class="address">
                    <span>哈尔滨</span>
                    <img src="../assets/img/bottom.png" alt="">
                </div>
                <div class="logo">
                    <img src="../assets/img/logo.png" alt="">
                </div>
                <v-touch v-if="headerShow" v-on:tap="popup" class="header-img">
                    <a href="">
                      <img src="../assets/img/header.png" alt="">
                    </a>
                </v-touch>
                <v-touch v-else="headerShow" class="header-img">
                    <router-link to="/user-information/">
                      <img src="../assets/img/header.png" alt="">
                    </router-link>
                </v-touch>
            </div>
        </div>
        <div id="banner">
            <div class="banner-section">
                <router-link to="/news/">
                    <img src="../assets/img/banner-1.png" alt="">
                    <span class="banner-word">新闻</span>
                </router-link>
                <router-link to="/adopt/">
                    <img src="../assets/img/banner-2.png" alt="">
                    <span class="banner-word">领养</span>
                </router-link>
                <router-link to="/volunteer/">
                    <img src="../assets/img/banner-3.png" alt="">
                    <span class="banner-word">志愿</span>
                </router-link>
                <router-link to="cute-figure">
                    <img src="../assets/img/banner-4.png" alt="">
                    <span class="banner-word">萌图</span>
                </router-link>
                <a href="#">
                    <img src="../assets/img/banner-5.png" alt="">
                    <span class="banner-word">知识</span>
                </a>
                <router-link to="/seek/">
                    <img src="../assets/img/banner-6.png" alt="">
                    <span class="banner-word">找回</span>
                </router-link>
                <a href="#">
                    <img src="../assets/img/banner-7.png" alt="">
                    <span class="banner-word">捐赠</span>
                </a>
                <a href="#">
                    <img src="../assets/img/banner-8.png" alt="">
                    <span class="banner-word">拍卖</span>
                </a>
            </div>
            <div class="banner-square"></div>
        </div>
        <div id="content">
            <div id="tab-control">
                <v-touch :class="{active : currentIndex1==0}" v-on:tap="changeTab(0)">新闻</v-touch>
                <v-touch :class="{active : currentIndex1==1}" v-on:tap="changeTab(1)">遗失</v-touch>
                <v-touch :class="{active : currentIndex1==2}" v-on:tap="changeTab(2)">志愿</v-touch>
            </div>
            <div id="tab-content">
                <div class="tab-content-container">
                    <div class="news" v-show="currentIndex1==0">
                        <!--新闻列表start-->
                        <news-list :news-list="newsList"></news-list>
                        <!--新闻列表end-->
                    </div>
                    <div class="lost" v-show="currentIndex1==1">
                        <!--遗失列表start-->
                        <seek-list :seek-list="seekList"></seek-list>
                        <!--遗失列表end-->
                    </div>
                    <div class="volunteer" v-show="currentIndex1==2">
                        <!--志愿列表start-->
                        <volunteer-list :vol-list="volList"></volunteer-list>
                        <!--志愿列表end-->
                    </div>
                </div>
            </div>
        </div>
        <div id="footer">
            <div class="city">
                <span>城市</span>
                <span>哈尔滨</span>
            </div>
            <div class="login-register">
                <span>登录</span>
                <span>注册</span>
            </div>
        </div>
        <!--注册与登录-->
        <!--<register-login v-show="show" v-on:closePopup="closePopup"></register-login>-->
        <div id="user-info" v-show="show">
            <v-touch id="mask" v-on:tap="closePopup"></v-touch>
            <div id="user-container">
                <v-touch id="user-close" v-on:tap="closePopup"></v-touch>
                <div id="user-box">
                    <div class="user-tab">
                      <v-touch :class="{selected : currentIndex2 == 1}" v-on:tap="change(1)">注册新用户</v-touch>
                      <v-touch :class="{selected : currentIndex2 == 2}" v-on:tap="change(2)">用户登录</v-touch>
                    </div>
                    <div class="user-content">
                        <div class="register" v-show="currentIndex2 == 1">
                            <form v-on:submit.prevent="doReg">
                                <p>
                                  <input v-on:blur="blur1"  v-model="rUsername" name="username" type="text" placeholder="输入用户名">
                                  <img src="../assets/img/user/cd-icon-username.svg" alt="">
                                  <span ref="name"></span>
                                </p>
                                <p>
                                  <input name="pass1" v-on:keyup="keyup" v-model="rPassword1" type="password" placeholder="输入密码">
                                  <img src="../assets/img/user/cd-icon-password.svg" alt="">
                                  <span ref="pass1"></span>
                                </p>
                                <p>
                                  <input name="pass2" v-on:blur="blur2" v-model="rPassword2" type="password" placeholder="确认密码">
                                  <img src="../assets/img/user/cd-icon-password.svg" alt="">
                                  <span ref="pass2"></span>
                                </p>
                                <p>
                                  <input name="email" v-on:blur="blur3" v-model="email" type="text" placeholder="输入邮箱">
                                  <img src="../assets/img/user/cd-icon-username.svg" alt="">
                                  <span ref="email"></span>
                                </p>
                                <p>
                                  <input type="submit" value="注册新用户">
                                </p>
                            </form>
                        </div>
                        <div class="login" v-show="currentIndex2 == 2">
                            <form action="" v-on:submit.prevent="doLogin">
                                <p>
                                  <input type="text" placeholder="输入用户名" v-model="lUsername">
                                  <img src="../assets/img/user/cd-icon-username.svg" alt="">
                                </p>
                                <p>
                                  <input type="password" placeholder="输入密码" v-model="lPassword">
                                  <img src="../assets/img/user/cd-icon-password.svg" alt="">
                                </p>
                                <p>
                                  <input type="submit" value="登录">
                                </p>
                            </form>
                    </div>
              </div>
            </div>
          </div>
        </div>
        <!--注册与登录-->
    </div>
</template>

<style>
  @import "../assets/css/common.css";
  @import "../assets/css/index.css";
  @import "../assets/css/register-login.css";
</style>

<script>
    import '../assets/js/rem.js'
    import Axios from 'axios'
    import NewsList from './NewsList'
    import SeekList from './SeekList'
    import VolunteerList from './VolunteerList'
    export default {
        components : {
            NewsList,
            SeekList,
            VolunteerList,
        },
        data(){
            return {
                currentIndex1 : 0,
                newsList : [],
                seekList : [],
                volList : [],
                userInfo : [],
                show : false,
                logined : false,
                currentIndex2 : 1,
                lUsername : '',
                lPassword : '',
                rUsername : '',
                rPassword1 : '',
                rPassword2 : '',
                email : '',
                bUsername : false,
                bPass1 : false,
                bPass2 : false,
                bEmail : false,
                headerShow : true
            }
        },
        methods : {
            changeTab : function(index){
                this.currentIndex1 = index;
            },
            loadInfo : function(){
                Axios.get('http://127.0.0.1/pet_rescue_ci/welcome/get_info', {

                }).then((res) => {
                    //console.log(res.data);
                    this.newsList = res.data.news;
                    this.seekList = res.data.seek;
                    this.volList = res.data.vol;
                });
            },
            change : function(index){
                this.currentIndex2 = index;
            },
            popup : function(){
                this.checkLogin();
            },
            closePopup : function(){
                this.show = false;
            },
            checkLogin : function(data){
                //            Axios.get('http://127.0.0.1/pet_rescue_ci/welcome/check_login').then((res) => {
                //                console.log(res.data);
                //                if(res.data == 'logined'){
                //                    this.show = false;
                //                }else{
                //                    this.show = true;
                //                }
                //            });

                if(this.logined){
                    console.log('已登录');
                }else{
                    this.show = true;
                }
            },
            doLogin : function(){
                var params = new URLSearchParams();
                params.append('username', this.lUsername);
                params.append('password', this.lPassword);

                Axios.post('http://127.0.0.1/pet_rescue_ci/welcome/login', params).then((res) => {
                    if(res.data == 'success'){
                        this.show = false;
                        this.logined = true;
                        this.headerShow = false;
                    }else{
                        alert('请输入正确的用户名和密码！！！');
                    }
                });
            },

            blur1 : function(){
                if(this.rUsername == ''){
                    this.$refs.name.innerHTML = "用户名不能为空";
                    this.bUsername = false;
                }else{
                    Axios.get('http://127.0.0.1/pet_rescue_ci/welcome/check_reg', {
                        params : {
                          username : this.rUsername
                        }
                    }).then((res) => {
                        if(res.data == 'yes'){
                            this.$refs.name.innerHTML = "用户名已存在";
                            this.bUsername = false;
                        }else{
                            this.$refs.name.innerHTML = "";
                            this.bUsername = true;
                        }
                    });
                }
                return this.bUsername;
            },
            keyup : function(){
                if(this.rPassword1.length < 4){
                    this.$refs.pass1.innerHTML = "输入密码不得少于4位";
                    this.bPass1 = false;
                }else{
                    this.$refs.pass1.innerHTML = "";
                    this.bPass1 = true;
                }
                return this.bPass1;
            },
            blur2 : function(){
                if(this.rPassword2 != this.rPassword1){
                    this.$refs.pass2.innerHTML = "两次输入密码不一致";
                    this.bPass2 = false;
                }else{
                    this.$refs.pass2.innerHTML = "";
                    this.bPass2 = true;
                }
                return this.bPass2;
            },
            blur3 : function(){
                if(this.email.indexOf('@') == -1){
                    this.$refs.email.innerHTML = "请输入正确的邮箱";
                    this.bEmail = false;
                }else{
                    this.$refs.email.innerHTML = "";
                    this.bEmail = true;
                }
                return this.bEmail;
            },
            doReg : function(){
                if(this.blur1() && this.keyup() && this.blur2() && this.blur3()){
                    var params = new URLSearchParams();
                    params.append('username', this.rUsername);
                    params.append('password', this.rPassword1);
                    params.append('email', this.email);
                    Axios.post('http://127.0.0.1/pet_rescue_ci/welcome/do_reg', params).then((res) => {
                        if(res.data == 'success'){
                            alert('注册成功，用户请登录！！！！');
                            this.currentIndex2 = 2;
                        }
                    });
                }
            }

        },
        mounted : function(){
            this.loadInfo();

        }
    }
</script>



