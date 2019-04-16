<template>
<div>
  <!-- topbanner -->
  <top-banner></top-banner>
  <!-- 滚动列表 -->
  <listxd></listxd>
  <!-- 轮播 -->
  <sw></sw> 
  <!-- 详情栏 -->
  <div class="it">
    <item v-for="(item,index) of items" :key="index" :name="item"></item>
  </div>
 <!-- 商品块 -->
 <div class="card">
   <card v-for="(item,index) of product" :key="index" :item=item.list></card>
 </div>
 <div class="footer" v-if="bo">
   别扯了,到底了！！！
 </div>
</div>
  <!-- <div @click="clickHandle">

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <img class="userinfo-avatar" src="/static/images/user.png" background-size="cover" />

      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" :value="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>

    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>

    <div class="all">
        <div class="left">
        </div>
        <div class="right">
        </div>
    </div>
  </div> -->
</template>

<script>
import {getMess} from '../../utils/api.js'
import card from '@/components/card'
import TopBanner from '@/components/TopBanner'
import listxd from '@/components/listxd'
import sw from '@/components/sw'
import item from '@/components/item'
export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      items:[
        '上海',
        '北京',
        '成都',
        '新疆',
        '云南'
      ],
      product:[],
      bo:false
    }
  },

  components: {
    card,
    TopBanner,
    listxd,
    sw,
    item
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      // if (mpvuePlatform === 'wx') {
      //   mpvue.switchTab({ url })
      // } else {
      //   mpvue.navigateTo({ url })
      // }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    }
  },

  created () {
    // let app = getApp()
  },
  onLoad(){ 
      getMess('/product',{id:'1'}
      ).then((result) => {
     this.product=result.data;
    }).catch((err) => {
      console.log(err)
    }); 
  },
  onReachBottom(){
    if(this.product.length > 15){
      this.bo=true;
      return;
    }
     getMess('/product',{id:'2'}
      ).then((result) => {
     this.product=this.product.concat(result.data);
    }).catch((err) => {
      console.log(err)
    }); 
    console.log("刷新触发")
  }
}
</script>

<style scoped lang="scss">
  .it{
    width: 100%; 
    margin: 0 auto;
    text-align: center;
    margin-top: 5px;
  }
  .card{
    display: flex;
   align-content: flex-start;
   flex-wrap: wrap; 
    justify-content: space-between;
    width: 95%;  
    margin: 0 auto;
    margin-top: 10px;
  }
  .footer{
    width: 100%;
    border-top: 0.5px solid #cccc;
    text-align: center;
  }
</style>
