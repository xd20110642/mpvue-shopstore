<template>
    <div class="TopBanner">
        <!-- 搜索框 -->
        <img src="/static/images/ser_ico.png" alt="">
        <!-- 点击跳转搜索界面 -->
        <div class="sear">
        </div>
    </div>
</template>

<script>
export default {
    name:'TopBanner',
    data() {
        return {
            
        }
    },

}
</script>

<style lang="scss" scoped> 
    .TopBanner{
        width: 100%;
        height: 1.375rem;
        background-image: url('../..//static/images/nav_zip.jpg');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        // justify-content: center;
        img{
            width: .78125rem;
            height: .78125rem;
            border: 1px solid;
            margin-left: .15625rem;
            margin-right: .15625rem;
        }
        .sear{
            width: 80%;
            height: 60%;
            background-color: white;
            border-radius: 10px;
        }
    }
</style>

