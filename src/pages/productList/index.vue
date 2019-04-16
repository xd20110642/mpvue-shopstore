<template>
 <div class="listBox">
     <!-- 顶部搜索 -->
     <TopBanner></TopBanner>
     <!-- 展示框 -->
     <div class="main">
         <div class="top">
            <p v-for="(item,index) of top" :key="index" @click="ch(index)"
            :class="{'active': c == index}"
            >
                {{item}}
            </p>
         </div>
         <!-- 展示部分 -->
         <div class="show">
              <card v-for="(item,index) of product" :key="index" :item=item.list></card>
         </div>
     </div>
 </div>
</template>

<script>
import card from '@/components/card'
import TopBanner from '@/components/TopBanner'
import {getMess} from '../../utils/api.js'
export default {
    data() {
        return {
            top:['综合','销量','价格'],
            c:0,
            product:[],
        }
    },
    onLoad(){
         getMess('/product',{id:'1'}
      ).then((result) => {
     this.product=result.data;
    }).catch((err) => {
      console.log(err)
    }); 
        console.log(this.$root.$mp.query.id)
    },
    methods: {
        ch(key){
            this.c=key;
                getMess('/product',{id:key}
      ).then((result) => {
     this.product=result.data;
    }).catch((err) => {
      console.log(err)
    }); 
        }
    },
    components:{
        card,
        TopBanner
    }
}
</script>

<style lang='scss' scoped>
.listBox{
    width: 100%;
    .main{
        width: 100%;
        .top{
            display: flex; 
            justify-content: space-between; 
            margin-top: 0.5px;
            border-top: 0.5px solid #ccc;
            border-bottom: 0.5px solid #ccc;
            p{
                flex: 1;
                height: 40px;
                line-height: 40px;
                text-align: center;
            }
        }
        .show{
            width: 100%;
        }
    }
}
.active{
    color: red;
}
</style>