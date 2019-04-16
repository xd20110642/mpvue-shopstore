<template>
    <div class="details">
        <!-- 轮播模块 -->
        <sw :he="true"></sw>
    </div>
</template>

<script>
import sw from './sw'
export default {
    props:['producyId'],
    components:{
        sw
    },
}
</script>

<style lang="scss" scoped>
.details{
} 
</style>
    