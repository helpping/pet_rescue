<template>
    <div id="pagination">
        <v-touch class="prev" v-on:tap="prevPaginate">上一页</v-touch>
        <v-touch v-on:tap="paginate(page)" :class="{active : currentPage == page}" v-for="page in totalPage">{{page}}</v-touch>
        <v-touch class="next" v-on:tap="nextPaginate">下一页</v-touch>
        <div class="total-page">共<span>{{total}}</span>页</div>
    </div>
</template>

<style>
  #pagination{
    height: 0.39rem;
    text-align: center;
    margin: 0.2rem 0;
  }
  #pagination div{
    width: 0.37rem;
    height: 0.37rem;
    display: inline-block;
    margin: 0 0.05rem;
    text-align: center;
    line-height: 0.37rem;
    color: #7cc4b8;
    font-size: 0.22rem;
    border: 0.01rem solid #cecece;
    border-radius: 0.05rem;
  }
  #pagination div.active{
    background: #7cc4b8;
    border: 0.01rem solid #7cc4b8;
    color: #ffffff;
  }
  #pagination .prev, #pagination .next,#pagination .total-page{
    width: 0.8rem;
  }
  #pagination .total-page span{
    margin: 0 0.05rem;
    color: #ff0000;
  }
</style>

<script>
    export default{
        data(){
            return {
                currentPage : 1,
                index : 1
            };
        },
        props : ['total'],
        computed : {
            totalPage : function(){
                var pageArr = [];
                var left = 1;
                var right = this.total;
                if(this.total >= 5){
                    if(this.index > 3 && this.index < this.total-2){
                        left = this.index - 2;
                        right = this.index + 2;
                    }else{
                        if(this.index<=3){
                          left = 1;
                          right = 5;
                        }else{
                          right = this.total;
                          left = this.total - 4;
                        }
                    }
                }
                while (left <= right){
                    pageArr.push(left);
                    left ++;
                }
                return pageArr;
            }
        },
        methods : {
            paginate : function(page){
                if(this.currentPage == page){
                    return;
                }
                this.index = page;
                this.currentPage = page;
                this.$emit('paginate', page)
            },
            prevPaginate : function(){
                this.index--;
                if(this.index == 0){
                    this.index = this.total;
                }
                this.paginate(this.index);
            },
            nextPaginate : function(){
                this.index++;
                if(this.index == this.total + 1){
                    this.index = 1;
                }
                this.paginate(this.index);
            }
        },
        mounted : function(){

        }

    }
</script>
