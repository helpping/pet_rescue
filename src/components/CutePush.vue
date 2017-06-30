<template>
    <div>
        <!--header-->
        <common-header></common-header>
        <!--header-->
        <!--carousel-->
        <carousel :img-arr="imgArr"></carousel>
        <!--carousel-->
        <form id="form" ref="form" enctype="multipart/form-data">
            <div class="push-img">
                <img ref="pushImg" src="../assets/img/img-upload.png" alt="">
                <input type="file" ref="img" v-on:change="uploadImg">
                <v-touch v-show="show" v-on:tap="deleteImg"></v-touch>
            </div>
            <div class="part"></div>
            <div class="push-content">
                <textarea placeholder="说点儿什么呗......" v-model="cuteContent"></textarea>
            </div>
            <div class="push-kind">
                <div>分类</div>
                <div>
                    <input type="radio" value="dog" name="kind" v-model="kind">
                    <span>狗</span>
                </div>
                <div>
                    <input type="radio" value="cat" name="kind" v-model="kind">
                    <span>猫</span>
                </div>
                <div>
                    <input type="radio" value="water" name="kind" v-model="kind">
                    <span>水宠</span>
                </div>
                <div>
                    <input type="radio" value="bird" name="kind" v-model="kind">
                    <span>鸟</span>
                </div>
                <div>
                    <input type="radio" value="other" name="kind" v-model="kind">
                    <span>其他</span>
                </div>
            </div>
            <div class="submit">
                <v-touch v-on:tap="pushCute">上传信息</v-touch>
            </div>
        </form>

        <!--footer-->
        <common-footer></common-footer>
        <!--footer-->
    </div>
</template>

<style>
  @import "../assets/css/common.css";
  @import "../assets/css/carousel.css";
  @import "../assets/css/cute-push.css";
</style>

<script>
    import CommonHeader from './CommonHeader'
    import Carousel from './Carousel'
    import CommonFooter from './CommonFooter'
    import Axios from 'axios'
    export default{
        components :{
            CommonHeader,
            Carousel,
            CommonFooter
        },
        data(){
            return {
                show : false,
                imgArr : [require('../assets/img/carousel/4.jpg'),require('../assets/img/carousel/5.jpg'),require('../assets/img/carousel/6.jpg')],
                cuteContent : '',
                kind : '',
                imgSrc : '',
                localSrc : '',
                localImgArr : [],
                testImgArr : ['jpg','png','jpeg','gif'],
                bFlag : false
            }
        },
        methods : {
            deleteImg : function(){
                this.$refs.pushImg.src = require('../assets/img/img-upload.png');
                this.$refs.img.value = '';
                Axios.get('http://127.0.0.1/pet_rescue_ci/cute/delete_img',{
                    params : {
                        imgSrc : this.imgSrc
                    }
                }).then((res) => {
                    this.show = false;
                });
            },
            uploadImg : function(){
                this.localSrc = this.$refs.img.value;
                this.localImgArr = this.localSrc.split('.');
                for(var i=0; i<this.testImgArr.length; i++){
                    if(this.testImgArr[i] == this.localImgArr[1]){
                        this.bFlag = true;
                    }
                }
                if(this.bFlag){
                    this.bFlag = false;
                    var imgData = new FormData();
                    imgData.append("img", this.$refs.img.files[0]);
                    var _this = this;
                    $.ajax({
                        url: "http://127.0.0.1/pet_rescue_ci/cute/upload_img",
                        type: "POST",
                        processData: false,
                        contentType: false,
                        data: imgData,
                        success: function(data) {
                            console.log(data);
                            _this.imgSrc = data;
                            _this.$refs.pushImg.src="http://127.0.0.1/pet_rescue_ci/"+_this.imgSrc;
                            _this.show = true;
                        }
                    });
                }else{
                    alert("请选择后缀名为'png','jpg','jpeg','gif'的图片！！！");
                }
            },
            pushCute : function(){
                if(this.imgSrc == ''){
                    alert('上传图片不能为空！！！');
                }else if(this.cuteContent == ''){
                    alert('请添加宠物描述！！！');
                }else if(this.kind == ''){
                    alert('请选择宠物类别！！！');
                }else{
                    var params = new URLSearchParams();
                    params.append('imgSrc', this.imgSrc);
                    params.append('cuteContent', this.cuteContent);
                    params.append('kind', this.kind);
                    Axios.post('http://127.0.0.1/pet_rescue_ci/cute/push_cute', params).then((res) => {
                        if(res.data == 'success'){
                            this.$router.push('/cute-detail/'+this.kind)
                        }
                    });
                }
            },
        },
        mounted : function(){

        }

    }
</script>


