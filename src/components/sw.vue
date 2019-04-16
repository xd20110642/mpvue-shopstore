<template>
    <div class="sw">
        <swiper indicator-dots autoplay circular :class="hei">
            <div v-for="(item,index) of imgUrls" :key="index">
                <swiper-item>
                    <img mode="aspectFill" :src="item">
                </swiper-item>
            </div>
        </swiper>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgUrls: [
        'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
        'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
         ],
        }
    },
    props:{
        he:{
            type:Boolean,
            default:false
        }
    },
    created() { 
        console.log(234)
        // http://test.bazirim.tv/mobile_b12/index.php?&bz_ctr=index
        // this.$http.post('http://test.bazirim.shop/mobile_app/index.php?&bz_ctr=index',{}).then((result) => {
        //     console.log(result)
        // }).catch((err) => {
        
        // });
    },
    computed: {
        hei(){
            if(this.he){
                return 'he'
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.sw{
    width: 100%;
    swiper{
        overflow: hidden;
        swiper-item{
            img{
                width: 100%; 
                height: 100%;
            }
        }
    }
    
}
.he{
    height: 300px;
}
</style>
