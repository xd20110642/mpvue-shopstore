<template>
  <div class="card" @click="goProduct">
      <div class="product-img">
        <img :src="item.img" alt="">
      </div>
      <div class="product-name"> 
        {{item.name}}
      </div>
      <div class="product-price">
          <span class="new-price">￥{{item.price}}</span>
          <span class="old-price">￥{{item.oldPrice}}</span>
      </div>
  </div>
</template>

<script>
import {getMess} from '../utils/api.js'
export default {
  props:{
    item:{
      type:Object,
      default:() => {
        return {
          
        }
      }
    }
  },
  methods: {
    goProduct(){
      let url="/pages/product/main";
      console.log(1)
      wx.navigateTo({ url:`/pages/product/main?id=${this.item.id}` });
    }
  },
  created() {
  },
}
</script>

<style lang="scss" scoped>
  .card{  
    box-sizing: border-box;
    display: inline-block;
    width: 49%;         
    height: 250px;   
    padding: 0 10px;    
    overflow: hidden;
    .product-img{
      width: 100%;
      height: 176px;
      img{
        width: 100%; 
        height: 100%;
      }
    }
    .product-name{
      width: 100%;
      margin-top: 10px;
      text-align: center;
      color: red;
    }
    .product-price{
      width: 100%;
      margin-top: 10px;
      text-align: right;
      padding-right: 15px;
      .new-price{
        color: red;
        font-size: 16px; 
        font-weight: bold;
      }
      .old-price{
        color: #ccc;
        font-size: 12px;
        text-decoration: line-through;
      }
    }
  }
</style>
