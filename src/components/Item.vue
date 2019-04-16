<template>
    <div class="item">
        <div class="icon">
            <img src="http://placehold.it/50x50" alt=""> 
        </div>     
        <div class="name">
            {{name}}
        </div>
    </div>
</template>

<script>
export default {
    name:'item',
    props:{
        name:{
            type:String,
            ddefault:''
        }
    }
}
</script>

<style lang="scss" scoped>
    .item{
        width: 20%; 
        display: inline-block;
        padding: 0 5px; 
        box-sizing: border-box;
        .icon{  
            width: 100%;
            img{
                width: 100%;
                height: 50px;
            }
        }
        .name{
          
            text-align: center;
        }
    }
</style>

