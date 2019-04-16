<template>
 <div class="classify">  
     <div class="sort">
         <div class="item" v-for="(ite,index) of item" :key="index" @click="jump(index)" :class="[index == c?'active':'']">
            {{ite}}
         </div>
     </div>
     <div class="right" v-if="show">
         <div class="co" v-for="(it,index) of con" :key="index" @click="jump2(index)">
             <img src="http://placehold.it/100x100" alt="" v-if="show"> 
             <p class="name">{{it.con.name}}</p>
         </div>
        
     </div>
 </div>
</template>

<script>
import {classify} from '../../utils/api.js'
export default {
    data() {
        return {
            item:[
                '手机数码',
                '家用电器',
                '电脑办公',
                '汽车用品',
                '男装',
                '女装',
                '钟表珠宝',
                '内衣配饰',
                '箱包手袋',
            ],
            con:[],
            c:0//定义一个初始变量 来记录当前的索引值
        }
    },
    methods: {
        jump(key){
            // 动态改变索引值
         this.c=key;
        // 请求接口 修改内容
         classify('/classify',{id:key}).then((result) => {
            this.con=result.mess;
            console.log('this.con',this.con)
        }).catch((err) => {
            console.log(err)
        });
        },
        jump2(key){
            wx.navigateTo({ url: `../productList/main?id=${key}` });
        }
    },
    onLoad(){
        // 进入页面请求数据 默认传入key=0;
        classify('/classify',{id:1}).then((result) => {
            this.con=result.mess;
            console.log('this.con',this.con)
        }).catch((err) => {
            console.log(err)
        });
    },
    computed: {
        // 有数据才加载图片
        show(){
            if(this.con.length>0){
                console.log("1213")
                return true;
            }else{
                return false;
            }
        },
        //  动态索引
    },        
}
</script>

<style lang='scss' scoped>
    .classify{
        width: 100%;
        // height: 100vh; 
        display: flex;
        position: relative;
        .sort{
            flex: 0 0 25%; 
            height: 100%;
            &::after{
                content: '';
                display: inline-block;
                position: absolute;
                left: 25%;  
                top: 0;
                // width: 1px;
                height: 100%;
                border-right:1px solid; 
            }
            // background-color: #ccc;
            .item{
                height: 40px;
                line-height: 40px;
                text-align: center;
                margin: 10px auto;
                box-sizing: border-box;
            }
        }
        .right{
            flex: 1;
            display: flex;
            flex-wrap: wrap;
            height: 100%;
            background-color: white; 
            text-align: center;
            .co{
                 &:nth-of-type(3n+1){
                    margin-left: 2px;
                }
                &:nth-of-type(3n){
                    margin-right: 0;
                }
                width: 32%; 
                float: left;
                // margin: 0 auto;
                margin-right: 2px;
                height: 100px;
                box-sizing: border-box;
                img{
                    width: 100%;
                    height: 50%;
                }
                .name{
                    text-align: center;
                }
            }
        }
        .active{
            background-color: #cccccc;
        }
    }
</style>