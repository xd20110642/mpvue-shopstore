<template>
 <div class="addren">
    <!-- 渲染地址列表 -->
    <div class="addLsit">
        <div class="item" v-for="(item,index) of addList" :key="index">
            <div class="top">
                <span class="name">{{item.userName}}</span>&nbsp;
                <span class="phone">{{item.userPhone}}</span>
                <div class="add">
                    {{item.add}}
                    <!-- <span>北京市</span>&nbsp;<span>北京市</span>&nbsp;<span>朝阳区</span> -->
                </div>
            </div>
            <div class="bottom">
                 <radio-group class="radio-group" :key="index">
                    <label class="radio"  @click="radioChange(index)">
                    <radio value="1" :checked="checked" :color="'pink'" /> 默认 
                    </label>
                </radio-group>  
                <div class="bottom-right">
                    <span @click="bianji(index)"><img src="/static/images/编辑.png" alt=""> 编辑</span>
                    <span @click="remove(index)"><img src="/static/images/删除.png" alt="">删除</span>
                </div>
            </div>
        </div>
    </div>
    <!-- 底部添加地址按钮 -->
    <div class="footer" @click="jumpNewAdd">
        添加新地址
    </div>
 </div>
</template>

<script>
import store from '../../store.js';
export default {
    data() {
        return {
            addList:store.getters.addVuex,
            checked:false,
              items: [
        {name: 'USA', value: '美国'},
        {name: 'CHN', value: '中国', checked: 'true'},
        {name: 'BRA', value: '巴西'},
        {name: 'JPN', value: '日本'},
        {name: 'ENG', value: '英国'},
        {name: 'TUR', value: '法国'}
      ]
        }
    },
    methods: {
        jumpNewAdd(){ 
            wx.navigateTo({ url: '../addNew/main' });
        },
        radioChange(e){
            console.log(123)
            // console.log(123)
            console.log(e);
            this.checked=!this.checked;
        },
        remove(index){
            console.log(index)
            store.commit('removueAdd',index)
        },
        bianji(index){//需要把第几个传递过去
            wx.navigateTo({url: '../addNew/main?id='+index});
        }
        ,
        radioChange(e,index){
            console.log(index)
            console.log(e)
            this.checked=! this.checked;
        }
    },
    computed: {
       checked(){
           if(this.addList.length == 1){
               return this.checked = true;
           }
       } 
    },
    
    onLoad(){

        console.log(store.getters.addVuex) 
    }
}
</script>

<style lang='scss' scoped>
.addren{
    width: 100%;
    .addLsit{
        // height:60px; 
        // border-bottom: 0.5px solid #ccc;
        .item{
            // border-top: 0.5px solid #ccc;
            // border-bottom: 0.5px solid #ccc;       
                 margin-bottom: 20px;
            .top{
                padding-left: 20px;
                // height: 50px;
                // line-height: 50px; 
                .name,.phone,.add{
                    display: inline-block;
                }
                .add{
                    display: block;
                }
            }
            .bottom{
                height: 50px;
                line-height: 50px;
               border-top: 0.5px solid #ccc;
                .radio-group{
                    display: inline-block;
                    padding-left: 20px;
                }
                .bottom-right{
                    display: inline-block;
                    float: right;
                    margin-right: 20px;
                    
                    span{
                        vertical-align: middle; 
                        img{
                            vertical-align: middle; 
                            width: 20px;
                            height: 20px;
                        }
                    }
                }
            }
        }
    }
    .footer{
        width: 100%;
        height: 60px;
        line-height: 60px;
        position: fixed;
        bottom: 0;
        background-color: pink;
        text-align: center;
        color: white;
    }
}
</style>