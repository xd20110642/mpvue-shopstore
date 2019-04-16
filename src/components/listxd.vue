<template>
    <div class="list">
        <scroll-view
         scroll-x
         scroll-with-animation
         @scroll="scroll"
         >
         <div class="item" v-for="(item,index) of items" :key="index">
             {{item.title}}
         </div>
       </scroll-view>
    </div>
</template>

<script>
import {getMess} from '../utils/api.js'
export default {
    data() {
        return {
            items:[
                '热门',
                '男装',
                '手机',
                '电脑电脑电脑电脑电脑电脑',
                '百货',
                '电器',
                '食品',
                '母婴母婴母婴母婴'
            ],
            top:'100'
        }
    },
    methods: {
       scroll(e){
           console.log(e)
       }
    },
    created() {  
        let a=getMess('/list',{}).then((result) => {
           this.items=result.data;
        }).catch((err) => {
            
        });
        
    },
}
</script>

<style lang="scss" scoped>
    .list{
        width: 100%;
        white-space: nowrap;
        .item{
            display: inline-block; 
            height: 40px;
            line-height: 40px;
            margin: 0 10px;  
            text-align: center;
        }

    }

</style>

