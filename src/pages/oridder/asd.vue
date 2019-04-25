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
            <picker-view :indicator-style="'height: 50px'" :style="'height: 238px;'" class="mpvue-picker-view" :value="pickerValue" @change="pickerChangeMul">
        <block>
          <picker-view-column>
            <div class="picker-item" v-for="(item,index) in pickerValueMulThreeOne" :key="index">
                123123213
            </div>
          </picker-view-column>
        </block>
      </picker-view>
        </div>
      
    </div>
 </div>
</template>

<script>
import store from '../../store.js'
//    const shen=,shi=['北京','合肥'],qu=['天安门','朝阳区']
export default {
    data() {
        return {
            userName:'',
            userPhone:null,
            pickerValueMulThreeOne:['北京','河北'],
            pickerValue: [9999, 1, 1],
        }
    },
    methods: {
        // 用户展示数据
        bindMultiPickerChange(e){
            console.log(e.mp.detail.value);
            console.log('省',this.multiArray[0][e.mp.detail.value[0]])
            console.log('市',this.multiArray[1][e.mp.detail.value[1]])
            console.log('区',this.multiArray[2][e.mp.detail.value[2]]) 
        },
        // 这个用于联动查询 修改的列
        bindMultiPickerColumnChange(e){
            console.log(e)
            console.log('e',e.mp.detail)
            // 判断第几列 
            let col=e.mp.detail.column;
            let num=e.mp.detail.value

            this.b=num;
            console.log(this.multiIndex)
            // if(col == 0){
            //     // 获取到被选择的
            //     cons
            //    this.multiIndex[col,1,0] 
            // }
        },
        pickerChangeMul(e){
            console.log(e)
        }
    },
    watch: {
        
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
            height: 100%;
        }
    }
}
</style>