<template>
 <div class="addren">
    
    <!-- 底部添加地址按钮 -->
    <div class="footer" @click="jumpNewAdd">
        添加新地址
    </div>
 </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        jumpNewAdd(){ 
            wx.navigateTo({ url: '../addNew/main' });
        }
    },

}
</script>

<style lang='scss' scoped>
.addren{
    width: 100%;
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