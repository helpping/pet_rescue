<template>
    <div>
        <common-header></common-header>
        <div id="my-find">我要找回</div>
        <div id="find-box">
            <form action="">
                <div class="find-top">
                    <div class="find-kind-box">
                        <div class="find-type">
                            <span>种&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类</span>
                            <input type="text">
                        </div>
                        <div class="find-variety">
                            <span>品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;种</span>
                            <input type="text">
                        </div>
                        <div class="find-color">
                            <span>毛&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;色</span>
                            <input type="text">
                        </div>
                    </div>
                    <div class="find-img">
                        <img src="../assets/img/img-upload.png" alt="">
                        <input type="file" multiple="multiple" ref="imgs" v-on:change="uploadImg">
                    </div>
                </div>
                <div class="find-bottom">
                    <div class="find-time">
                        <span>丢失时间</span>
                        <input type="text">
                    </div>
                    <div class="find-site">
                        <span>丢失地点</span>
                        <input type="text">
                    </div>
                    <div class="find-desc">
                        <span>详情描述</span>
                        <textarea></textarea>
                    </div>
                </div>
            </form>
        </div>
        <div class="find-submit">确认发布</div>
        <common-footer></common-footer>
    </div>
</template>

<style>
    @import "../assets/css/common.css";
    #my-find{
      height: 0.6rem;
      background: #ececec;
      color: #666666;
      font-size: 0.2rem;
      padding: 0 0.2rem;
      line-height: 0.6rem;
    }
    #find-box{
      padding: 0.16rem 0.35rem;
      background: #ffffff;
    }
    .find-top{
      width: 100%;
      height: 1.6rem;
    }
    .find-kind-box{
      width: 3.18rem;
      height: 100%;
      float: left;
    }
    .find-img{
      width: 2.32rem;
      height: 100%;
      float: right;
    }
    .find-type, .find-variety, .find-color,.find-time,.find-site,.find-desc{
      height: 0.4rem;
    }
    .find-variety{
      margin: 0.2rem 0;
    }
    .find-type span, .find-variety span, .find-color span,.find-time span,.find-site span,.find-desc span{
      float: left;
      color: #666666;
      height: 100%;
      line-height: 0.4rem;
      font-size: 0.26rem;
    }
    .find-type input, .find-variety input, .find-color input, .find-time input,.find-site input,.find-desc textarea{
      float: right;
      width: 1.98rem;
      height: 0.38rem;
      border: 0.01rem solid #a1a1a1;
      outline: none;
      border-radius: 0.05rem;
      font-size: 0.2rem;
      color: #949292;
      text-indent: 0.1rem;
    }
    .find-variety input, .find-color input{
      text-indent: 0.1rem;
    }


    .find-img{
      width: 2.36rem;
      height: 1.56rem;
      border: 0.01rem dashed #a7a7a7;
      position: relative;
    }
    .find-img img,.find-img input{
      width: 2.32rem;
      height: 1.52rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
    .find-img input{
      opacity: 0;
    }
    .find-bottom{
      height: 3.6rem;
    }
    .find-time,.find-site,.find-desc{
      margin-top: 0.2rem;
    }
    .find-time input,.find-site input,.find-desc textarea{
      width: 4.5rem;
      text-indent: 0.1rem;
    }
    .find-desc textarea{
      height: 1.96rem;
    }
    .find-submit{
      width: 1.98rem;
      height: 0.58rem;
      border: 0.01rem solid #666666;
      font-size: 0.26rem;
      background: #7cc4b8;
      color: #ffffff;
      text-align: center;
      line-height: 0.58rem;
      border-radius: 0.1rem;
      margin: 0 auto;
      margin-bottom: 0.3rem;
    }
</style>

<script>
    import CommonHeader from './CommonHeader'
    import CommonFooter from './CommonFooter'
    export default{
        components :{
            CommonHeader,
            CommonFooter
        },
        data(){
            return {

            };
        },
        methods : {
            uploadImg : function(){
                var imgData = new FormData();
                imgData.append("img", this.$refs.imgs.files[0]);
                console.log(this.$refs.imgs.files[0]);

            }
        }
    }
</script>
