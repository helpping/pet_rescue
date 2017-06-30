<template>
    <div>
        <div id="common-header">
            <div class="common-back">
                <img src="../assets/img/back.png" alt="">
            </div>
            <div class="common-logo">
                <span>个人信息</span>
            </div>
            <div class="common-person">
                <a href=""><img src="../assets/img/header.png" alt=""></a>
            </div>
        </div>
        <div class="adopt-info-title"><span>修改个人信息</span></div>
        <div class="adopt-info-content">
            <form action="" id="adopt-info-form">
                <div class="adopt-info-input"><span>用&nbsp;&nbsp;户&nbsp;&nbsp;名</span><input type="text"></div>
                <div class="adopt-info-input"><span>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码</span><input type="password"></div>
                <div class="adopt-info-input special">
                    <span class="special1">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱</span>
                    <input type="text">
                </div>

                <v-touch class="submit">上传信息</v-touch>
            </form>
        </div>







    </div>
</template>

<style>
  @import "../assets/css/common.css";
  #common-header{
    width: 100%;
    height: 0.6rem;
    background: #7cc4b8;
  }
  .common-back, .common-logo, .common-person{
    float: left;
    width: 33.33%;
    height: 100%;
  }
  .common-back img{
    width: 0.24rem;
    height: 0.38rem;
    margin-left: 0.2rem;
    margin-top: 0.11rem;
  }
  .common-logo{
    text-align: center;
  }
  .common-logo span{
    display: inline-block;
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
    font-size:0.3rem;
    color: #ffffff;
  }
  .common-person img{
    width: 0.38rem;
    height: 0.38rem;
    margin-top: 0.11rem;
    float: right;
    margin-right: 0.2rem;
  }

  .adopt-info-title{
    width: 100%;
    height: 0.6rem;
    background: #ececec;
    color:#787878;
    font-size: 0.22rem;
    line-height: 0.6rem;
  }
  .adopt-info-title span{
    margin-left: 0.2rem;
  }
  .adopt-info-content{
    padding: 0 0.35rem;
  }
  .adopt-info-input{
    width: 100%;
    height: 0.4rem;
    margin-top: 0.15rem;
    line-height: 0.4rem;
  }
  .adopt-info-input span{
    float: left;
    font-size: 0.26rem;
    color: #666666;
  }
  .adopt-info-input input{
    float: right;
    width: 4.5rem;
    height: 0.38rem;
    border: 0.01rem solid #a1a1a1;
    border-radius: 0.05rem;
    outline: none;
    font-size: 0.2rem;
    color: #949292;
    text-indent: 0.1rem;
  }

  .submit{
    width: 1.98rem;
    height: 0.58rem;
    border: 0.01rem solid #666666;
    background: #7cc4b8;
    text-align: center;
    line-height: 0.58rem;
    font-size: 0.26rem;
    color: #ffffff;
    border-radius: 0.1rem;
    margin: 0 auto;
    margin-top: 0.8rem;
    margin-bottom: 0.18rem;
  }
</style>

<script>

</script>
