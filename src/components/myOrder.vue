<template>
 <div class="myorder">
     <div class="top">
         <p @click="jump1">我的订单</p>
         <p @click="jump1">全部订单</p> 
     </div>
     <div class="botton">
         <div class="item" v-for="(item,index) of item" :key="index" @click="jump(index)">
             <img :src="item.img" alt="">
             <span>{{item.name}}</span>
         </div>
     </div>
 </div>
</template>

<script>
export default {
    data() {
        return {
            item:[
                {img:"/static/images/订单.png",name:'全部订单'},
                 {img:"/static/images/待付款.png",name:'待付款'},
                  {img:"/static/images/待收货.png",name:'待收货'},
                   {img:"/static/images/待评价.png",name:'待评价'},
            ]
        }
    },
    methods: {
        jump(index){
            console.log('index',index);
                 wx.navigateTo({ url:`/pages/oridder/main?type=${index}` }); 
        },
        jump1(){
             wx.navigateTo({ url:`/pages/oridder/main?type=0` }); 
        },
    
    },
}
</script>

<style lang='scss' scoped>
.myorder{
    width: 100%;
    height: 100px; 
    box-sizing: border-box;
    
    .top{
        display: flex;
       overflow: hidden;
        justify-content: space-around;
        text-align: left;
        // border-bottom: 0.5px solid #ccc;
        // margin-bottom: 10px; 
        p{
            text-align:left;
        }
    }
    .botton{
        display: flex;
        height: 50%;
        text-align: center;
        justify-content:space-between;
        margin-top: 20px;   
        .item{
            width: 20%;
            height: 100%;
            // height: 25px;
            // display: inline-block;
            img{
                width: 20px;
                height: 20px;
            }
            span{
                display: inline-block;
                margin-top: -10px;
                width: 100%;
                font-size: 12px;
                color: #ccc;
            }
        }
    }
}
</style>