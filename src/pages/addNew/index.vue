<template>
 <div class="addrennew">
    <div class="top">
        <div class="user">
            <span>收货人</span>
            <input type="text" v-model.lazy="userName" placeholder="请输入收货人姓名">
        </div>
        <div class="phone">
            <span>手机号</span>
            <input type="text" v-model.number="userPhone" placeholder="请输入收货人电话">
        </div>
    </div>
    <div class="mid">
        <div class="home">
            <span>所在地区</span>  
            <picker
              mode="multiSelector"
        @change="bindMultiPickerChange"
         @columnchange="bindMultiPickerColumnChange"
        :value="multiIndex"
        :range="multiArray"
        >
            <div class="ad">
                <span v-if="!add">选择 省 市 区:</span>
                <span v-else>{{add}}</span>
            </div>    
            </picker>
        </div>
      <div class="xiangxi">
           <div class="user">
            <span>详细地址</span>
            <input type="text" v-model.lazy="addFamliy" placeholder="请输入与街道小区楼层">
        </div>
      </div>
    </div>
    <div class="save" @click="save">
        保存
    </div> 
 </div>
</template>

<script>  
import store from '../../store.js';
import addJson from './add.json'
import {Tosat} from '../../utils/api.js'
import { mapMutations, mapState } from 'vuex';
//    const shen=,shi=,qu=
export default {
    data() {
        return {
            addMess:store.getters.addVuex,
            userName:'',
            userPhone:null,
            addFamliy:'',
            multiArray:[ ,, ],
            multiIndex: [0, 0, 0],
            sheng:[],
            shi:[],
            qu:[],
            add:''
        }
    },
    methods: {
        // 用户展示数据
        bindMultiPickerChange(e){
            console.log(e.mp.detail.value);
            this.add=this.multiArray[0][e.mp.detail.value[0]]+this.multiArray[1][e.mp.detail.value[1]]+this.multiArray[2][e.mp.detail.value[2]]
            console.log('省',this.multiArray[0][e.mp.detail.value[0]])
            console.log('市',this.multiArray[1][e.mp.detail.value[1]])
            console.log('区',this.multiArray[2][e.mp.detail.value[2]]) 
        },
        // 这个用于联动查询 修改的列
        bindMultiPickerColumnChange(e){
            console.log( "修改的列为",e.mp.detail.column,"，值为", e.mp.detail.value);
            // 判断第几列 
            let col=e.mp.detail.column;
            let num=e.mp.detail.value;
            // 修改列根据列来修改
            // 具体思路是  根据第一列的省 来请求接口 获取到市的地址 然后根据市的地址 来获取到县的地址
            if(col == 0){
                this.shi=[];
                this.qu=[]
                // 点击省以后 才更新市级区域 并且默认显示 第一个市级的区
                this.$set(this.multiIndex,0,num);
                //    更新市级区域
            for (let index = 0; index < addJson[num].child.length; index++) {
                this.shi.push(addJson[num].child[index].name);
            }
            //  更新区
            for (let index = 0; index < addJson[num].child[0].child.length; index++) {
           this.qu.push(addJson[num].child[0].child[index].value)
            }
            }else if(col == 1){
                // 必须要清空数组 否则不会生效
                this.qu=[];
                this.$set(this.multiIndex,1,num)
                // 更新区
                for (let index = 0; index < addJson[num].child[num].child.length; index++) {
                    console.log(addJson[num].child[num].child.length)
           this.qu.push(addJson[num].child[num].child[index].value)
            }
            
            }else if (col == 2){
                // 设置选定的值
                this.$set(this.multiIndex,2,num)
            }
            // 因为vue不能检测数组更新 所以只能使用 $set来改变数组
            this.$set(this.multiArray,1,this.shi);
            this.$set(this.multiArray,2,this.qu)
            
        },
        save(){
            if(!this.userName){
                Tosat("请输入姓名")
                return;
            }
            if(!this.userPhone){
                Tosat("请输入手机号");
                return;
            }
            if(!this.add){
                Tosat("请选择地址");
                return;
            }
            if(!this.addFamliy){
                Tosat("请输入详细地址");
                return;
            }
            let obj={
                userName:this.userName,
                userPhone:this.userPhone,
                add:this.add,
                userFamily:this.userFamily
            }
            console.log(obj)
            store.commit('addNew',obj)
            wx.navigateBack({
              delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
            });
            // this.addNew(obj) 
        }
    },
    onLoad(){

        // 读取传递过来的参数  如果有参数就修改 就不能默认展示地址
        let id = this.$root.$mp.query.id
        if(id){
           let a=this.addMess[id];
           this.userName=a.userName
           this.userPhone=a.userPhone
        }else{
        // 将省读取出来
        for (let index = 0; index < addJson.length; index++) {
           this.sheng.push(addJson[index].name)
        }
        // 将第一个默认显示的北京读取出来
        this.shi.push(addJson[0].child[0].name);

        // 读区
        console.log('213',addJson[0].child[0].child[0].value)
        for (let index = 0; index < addJson[0].child[0].child.length; index++) {
           this.qu.push(addJson[0].child[0].child[index].value)
        }
        this.multiArray[0]=this.sheng;
        this.multiArray[1]=this.shi;
        this.multiArray[2]=this.qu;
        }
       
        // console.log(this.multiArray)
    },
    
}
</script>

<style lang='scss' scoped>
.addrennew{
    width: 100%;
    .top{
        .user,.phone{
                height: 40px;
            line-height: 40px;
            border-top: 0.5px solid #ccc;
            span{
                padding-left: 20px;
                 vertical-align: middle;
            }
            input{
                display: inline-block;
                margin-left: 20px;
                vertical-align: middle;
            }
        }
        .phone{
            border-bottom: 0.5px solid #ccc;
        }
    }
    .mid{
        margin-top: 30px;
        height: 50px;
        .home{ 
            height: 50px; 
            line-height: 50px;
            border-top: 0.5px solid #ccc;
            border-bottom: 0.5px solid #ccc;
            span{
                padding-left: 20px;
            }
            picker{
                display: inline-block;
                margin-left: 20px;
            }
            .ad{
                display: inline-block;
            }
        }
        .xiangxi{
            height: 50px;
            line-height: 50px;
             border-bottom: 0.5px solid #ccc;
             span{
                padding-left: 20px;
                 vertical-align: middle;
            }
            input{
                display: inline-block;
                margin-left: 20px;
                vertical-align: middle;
            }
        }
    }
    .save{
        width: 90%; 
        margin: 0 auto;
        margin-top: 60px;  
        text-align: center;
        height: 50px;
        line-height: 50px;
        background-color: pink;
    }
}
</style>