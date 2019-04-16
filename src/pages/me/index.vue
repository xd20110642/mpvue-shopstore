<template>
 <div class="me">
    <!-- 用户信息 -->
    <div class="head">
        <!-- 头像 -->
        <div class="he">
            <img src="http://placehold.it/50x50" alt="">
        </div>

    </div>
 </div>
</template>

<script>
export default {
}
</script>

<style lang='scss' scoped>
.me{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    .head{
        width: 100%;
        height: 150px;  
        background-image: url('http://www.bazirim.shop/bazirim_h5/static/img/personal_bg.5a685d3.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        position: relative;
        .he{
            height: 50%;
           
            position: absolute;
            top: 50%;
            left: 10%; 
            transform: translateY(-50%);
            img{
                width: 50px; 
                height: 50px;
                 border-radius: 50%;
            }
        }
    }
}
</style>