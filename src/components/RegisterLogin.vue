<template>
    <div id="user-info">
        <v-touch id="mask" v-on:tap="closePopup"></v-touch>
        <div id="user-container">
            <v-touch id="user-close" v-on:tap="closePopup"></v-touch>
            <div id="user-box">
                <div class="user-tab">
                    <v-touch :class="{selected : currentIndex == 1}" v-on:tap="change(1)">注册新用户</v-touch>
                    <v-touch :class="{selected : currentIndex == 2}" v-on:tap="change(2)">用户登录</v-touch>
                </div>
                <div class="user-content">
                    <div class="register" v-show="currentIndex == 1">
                        <p>
                          <input type="text" placeholder="输入用户名">
                          <img src="../assets/img/user/cd-icon-username.svg" alt="">
                          <span>用户名不正确</span>
                        </p>
                        <p>
                            <input type="password" placeholder="输入密码">
                            <img src="../assets/img/user/cd-icon-password.svg" alt="">
                            <span>密码不正确</span>
                        </p>
                        <p>
                            <input type="password" placeholder="确认密码">
                            <img src="../assets/img/user/cd-icon-password.svg" alt="">
                            <span>密码不正确</span>
                        </p>
                        <p>
                            <input type="text" placeholder="输入邮箱">
                            <img src="../assets/img/user/cd-icon-username.svg" alt="">
                            <span>邮箱不正确</span>
                        </p>
                        <p>
                            <input type="submit" value="注册新用户">
                        </p>
                    </div>
                    <div class="login" v-show="currentIndex == 2">
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
</template>

<style>
    @import "../assets/css/common.css";
    @import "../assets/css/register-login.css";
</style>

<script>
    import Axios from 'axios'
    export default{
        data(){
            return {
                currentIndex : 1,
                lUsername : '',
                lPassword : ''
            }
        },
        props : ['logined'],
        methods : {
            closePopup : function(){
                this.$emit('closePopup');
            },
            change : function(index){
                this.currentIndex = index;
            },

            doLogin : function(){
                var params = new URLSearchParams();
                params.append('username', this.lUsername);
                params.append('password', this.lPassword);
                Axios.post('http://127.0.0.1/pet_rescue_ci/welcome/login', params).then((res) => {
                    if(res.data == 'success'){
                        this.$emit('closePopup', false);
                        this.$emit('close', this.logined);
                    }else{
                        console.log('登陆失败');
                    }
                });
            }
        }
    }
</script>
