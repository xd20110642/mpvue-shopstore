import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        add:wx.getStorageSync('add')||[],
        product:[]
    },
    mutations:{
        addNew(state,obj){
            console.log(obj)
            state.add.push(obj);
            wx.setStorageSync('add',state.add);
        },
        removueAdd(state,index){
            state.add.splice(index,1);
            wx.setStorageSync('add', state.add);
        },
        addProuduct(state,obj){
            state.product.push(obj)
        }
    },
    getters:{
        addVuex:state => state.add,
        productVuex:state => state.product
    }
})
export default store


