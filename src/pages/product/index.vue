<template>
    <div class="pr">
       <detail
       :producyId=productId
       >
       </detail>
       <!-- 信息模块 -->
        <div class="mess" v-if="productMess">
            <!-- name -->
            <div class="mess-name"> 
                {{productMess.name}}
            </div>
            <!-- 价钱 -->
            <div class="mess-price">  
                <p class="newPr">￥{{productMess.price}}</p>
                <p class="pldPr">￥{{productMess.oldPrice}}</p>
            </div>
            <!-- 分享按钮 -->
            <button class="share-btn" open-type="share">
                <img src="/static/tabs/share.png" alt="">
                <p>分享好友</p>
            </button>
            <!--购买选项卡 -->
            <div class="change">

            </div>
        </div>
        <!-- 商品图片展示 -->
        <div class="product-img" v-if="productMess">
            <img :src="item.img" alt="" v-for="(item,index) of productMess.imgArr" :key="index">
        </div>
    </div>
</template>

<script>
import {productMess} from '../../utils/api.js'
import detail from '@/components/Details'
export default {
    data() {
        return {
            productId:null,
            productMess:null
        }
    },
    // 页面加载
    onLoad(){
        console.log(1)
        // 获取传递过来的id
        this.productId=this.$root.$mp.query.id;
        // 请求商品详情接口
            productMess('/productMess',{id:this.productId}).then((result) => {
            console.log(result.data.data)
            this.productMess=result.data.data;
            console.log(this.productMess)
        }).catch((err) => {
            console.log(err)
        });
        console.log(this.$root.$mp.query.id)
    },
    components:{
        detail
    },
    // 设置分享
    onShareAppMessage() {
      return {
        title: '跑步机分享',
        path: '/pages/index/main',
        imageUrl: 'http://placehold.it/100x100',
        success: res => {
            console.log("分享成功")
        },
        fail: (e) => {
            console.log(e)
        },
        complete: () => {}
      };
    },
    created() { 
        
    },

}
</script> 

<style lang="scss" scoped>
    .pr{
         .mess{
        width: 100%;
        height: 100px;
        text-align: center;
        position: relative;
        border-bottom: 1px solid #ccc;
        overflow: hidden;
        // border: 1px solid;
        .mess-name{
            width: 100%;
            font-size: 18px;
            margin-top: 5px;
            font-weight: bold;
        }
        .mess-price{
            margin-top: 10px;
            font-size: 18px;
            color: red;
            .pldPr{
                color: #ccc;
                font-size: 16px;
                 text-decoration: line-through;
        }
            }
        .share-btn{
            width: 50px;
            height: 50px; 
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            border: none;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: transparent;
            &::after{
                border: 0
            }
            img{
                width: 50%;
                height: 50%;
            }
            p{  
                font-size: 12px;
            }
        
        }
        .change{
            height: 20px; 
            background-color: red;
        }
    }
    .product-img{
        width: 100%;
        img{
            display: block;
            width: 100%;
        }
    }
    }
</style>

