<template>
 <div class="or">
     <div class="top">
         <!-- 头部 -->
         <div class="item" v-for="(item,index) of menuList" :key="index" @click="choock(index)" :class="{'active':active == index}">
             {{item}}
         </div>
     </div>
     <!-- 下列表展示的东西 -->
     <div class="main">
         <div v-if="baoguoList.length == 0">
             亲,还没有你的订单信息哦！
         </div>
         <div v-else>
             对不起 还没有写接口
         </div>
     </div>
 </div>
</template>

<script>
export default {
    data() {
        return {
            active:0,
            menuList:[
                '全部订单',
                '待付款',
                '待发货',
                '待收货'
            ],
            baoguoList:[]
        }
    },
    onLoad(){
        let type=this.$root.$mp.query.type;
        console.log('type',type);
        console.log('active',this.active)
        switch(type){
            case '0':
                this.active=0
            break;
            case '1':
                this.active=1
            break;
            case '2':
                this.active=2
            break;
            case '3':
                this.active=3
            break;
        }
         console.log('active',this.active)
        // console.log()
    },
    methods: {
        choock(index){
            this.active=index;
        }
    },
}
</script>

<style lang='scss' scoped>
    .or{
        width: 100%;
    .top{
        display: flex;
        padding-left: 10px;
        padding-right: 10px;
        margin: 0 auto; 
        height: 40px;
        border-bottom: 0.5px solid #ccc;
        .item{
            text-align: center;
            flex: 1;
            height: 40px;
            line-height: 40px;
            // border: 1px solid;
        }
    }
    .active{
        color: red;
    }
    }
</style>

