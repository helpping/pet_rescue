<template>
    <div v-on:touchstart="clear">
        <v-touch id="carousel" v-on:swipeleft="left" v-on:swiperight="right">
            <div id="carousel-imgs" ref="imgs">
                <img v-for="(img, index) in imgArr" :src="img" alt="" ref="imgItem">
            </div>
            <v-touch id="carousel-tab">
                <v-touch ref="tab" v-on:tap="change(index)" v-for="(img, index) in imgArr"  :class="{active : index==currentIndex}" @click="change(index)"></v-touch>
            </v-touch>
        </v-touch>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                currentIndex : 0,
                imgs : '',
                imgItem : '',
                imgsWidth : 0,
                imgItemWidth : 0,
                nowIdx : 0,
                num : 0,
                timer : ''
            }
        },
        props : ['imgArr'],

        methods : {
            init: function(){
                this.imgs = this.$refs.imgs;
                this.imgItemWidth = this.$refs.imgItem[0].offsetWidth;
                this.imgItem = this.$refs.imgItem[0].cloneNode();
                this.imgs.appendChild(this.imgItem);
                this.imgs.style.width = (this.$refs.imgItem.length + 1) * this.imgItemWidth + "px";
            },
            change : function(index){
                this.num = index;
                index = (index==this.$refs.tab.length ? 0 : index );
                this.currentIndex = index;
                $(this.imgs).stop().animate({
                    left : -this.num * this.imgItemWidth
                });
            },
            left : function(){
                this.nowIdx++;
                if(this.nowIdx == this.$refs.imgItem.length + 1){
                    this.nowIdx = 1;
                    this.imgs.style.left = 0;
                }
                this.change(this.nowIdx);
            },
            right : function(){
                this.nowIdx--;
                if(this.nowIdx == -1){
                    this.nowIdx = this.$refs.imgItem.length - 1;
                    this.imgs.style.left = -this.$refs.imgItem.length * this.imgItemWidth + "px";
                }
                this.change(this.nowIdx);
            },
            autoPlay : function(){
                this.timer = setInterval(() => {
                    this.left();
                }, 2000);
            },
            clear : function(){
                clearInterval(this.timer);
            },
        },
        mounted : function(){
            this.$nextTick(function(){
                this.init();
                this.autoPlay();
            });
        }

    }
</script>
<style>
    @import "../assets/css/common.css";
    @import "../assets/css/carousel.css";
</style>
