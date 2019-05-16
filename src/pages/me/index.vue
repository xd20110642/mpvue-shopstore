<template>
 <div class="me" >
    <!-- 用户信息 -->
    <div class="l"  v-if="isLogin">
    <div class="head" >
        <!-- 头像 -->
        <div class="he">
            <img :src="userImage" alt="">
            <p>{{userName}}</p>
        </div>
    </div>
     <!-- 展示订单组件-->
    <div class="orider">
             <myorider></myorider>
    </div>
    <!-- 其他 -->
    <div class="add" @click="jumpAdd">
        <img src="/static/images/地址.png" alt=""> <span>收货地址</span>
        <span>></span>
    </div>
       <div class="add" @click="jumpHelp">
        <img src="/static/images/帮助.png" alt=""> <span>我的帮助</span>
        <span>></span>
    </div>
    <!-- 购买界面 -->
    <button open-type="getPhoneNumber" lang="zh_CN" @getphonenumber="getphonenumber">获取手机号</button>
    </div>
    
    <!-- 登录界面 -->
    <div class="login" v-else>
        <p>请登录</p>
        <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo">获取用户信息</button>
    </div>
 </div>
</template>

<script>
import myorider from '../../components/myOrder'
export default {
    data() {
        return {
            isLogin:false,
            userImage:'',
            userName:'',

        }
    },
    methods: {
         onGotUserInfo(e) {
              this.isLogin=! this.isLogin
             console.log(e)
            //  
            this.userImage=e.target.userInfo.avatarUrl;
            this.userName=e.target.userInfo.nickName;
        },
        jumpAdd(){
            wx.navigateTo({ url: `../add/main` });
        },
        jumpHelp(){
             wx.navigateTo({ url: `../help/main` });
        },
        bug(){
            console.log(2)
            wx.requestPayment({
            timeStamp: '',
            nonceStr: '',
            package: '',
            signType: 'MD5',
            paySign: '',
            success(res) { console.log(res)},
            fail(res) {console.log(res) }
                    
                    
                    })
        },
        getphonenumber(e){
          
        }
    },
    onLoad(){
        let that=this;
        wx.getSetting({ success: res => {
            console.log(res)
            if(res.authSetting['scope.userInfo']){
                that.isLogin=! that.isLogin
                 // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                wx.getUserInfo({
                    success(res) {
                    console.log('res',res.userInfo);
                    that.userImage=res.userInfo.avatarUrl;
                    that.userName=res.userInfo.nickName;
                    }
                })
            }
        } });
    },
    components:{
        myorider
    }
}
</script>
  
<style lang='scss' scoped>
.me{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #ccc;
    .l{
        width: 100%;
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
                vertical-align: middle;
            }
            p{
                display: inline-block;
                vertical-align: middle;
            }
        }

    }
    .orider{
        width: 93%;
        margin: 0 auto;
        padding-left: 5px;
        padding-right: 5px; 
        text-align:left;
        background-color: white;
    }
    .add{
        &:last-child{
            margin-top: 0;
            border-top: 0.5px solid #ccc;
        }
        margin-top: 20px;
        height: 40px; 
        line-height: 40px;
        padding-left: 20px;
        background-color: white;
        img{
            width: 20px;
            height: 20px;
            vertical-align: middle;
        }
        span{
            &:last-child{
                float: right;
                margin-right: 40px;
            }
            vertical-align: middle;
            margin-left: 20px;
        }
    }
    }
    
    .login{
        p{
            margin-top: 30%;
            text-align: center;
        }
    }
}
</style>