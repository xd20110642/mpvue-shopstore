/*
 * @Author: xd 
 * @Date: 2019-04-15 09:50:32 
 * @Last Modified by: xd
 * @Last Modified time: 2019-04-25 16:45:03
 */
var Fly = require('flyio/dist/npm/wx')
var fly = new Fly()
fly.config.baseURL ="http://rap2api.taobao.org/app/mock/165319/api"
// request.headers['content-type'] = 'application/json';
//  封装微信请求 get
export function getMess(url,data){
     return new Promise((resolve, reject) => {
        fly.get(url,data).then((result) => {
           if(result.data.code == 200){
               resolve(result.data)
           }else{
               reject(result.response.data)
           }
        }).catch((err) => {
            console.log(err)
        });
    })
}

//  封装微信请求 post

export function postMess(url,data){
    return new Promise((resolve, reject) => {
      fly.post(url,data).then((result) => {
          if (result.code == 200) {
              resolve(result)
          } else {
              reject(result.msg)
          }
      }).catch((err) => {
          console.log("请求错误")
      });
    })
}

//  封装商品详情请求列表
export function productMess(url,data){
    return new Promise((resolve, reject) => {
      fly.post(url,data).then((result) => {
        //   console.log(result)
          if(result.data.code == 200){
              resolve(result)
          }else{
              reject(result.msg)
          }
      }).catch((err) => {
          console.log(err)
      });
    })
}

// 封装个人中心
export function me(url,data){
    return new Promise((resolve, reject) => {
      fly.post(url,data).then((result) => {
          
      }).catch((err) => {
          
      });
    })
}

// 封装商品分类 
export function classify(url,data){
    return new Promise((resolve, reject) => {
        fly.get(url,data).then((result) => {
            if (result.data.code == 200) {
                resolve(result.data.data)
            } else {
                reject(result.msg)
            }
        }).catch((err) => {
            console.log("请求错误")
        });
    })
}







// 提示封装
export function Tosat(note,) {
    wx.showModal({
        title: '提示',
        content: note,
        showCancel:false,
        success(res) {
            if (res.confirm) {
                console.log('用户点击确定')
            } else if (res.cancel) {
                console.log('用户点击取消')
            }
        }
    })
}