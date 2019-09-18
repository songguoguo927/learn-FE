import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let store = new Vuex.Store({
    state:{
        totalPrice:0
    },
    mutations:{//必须是同步
        increment(state,price){
            state.totalPrice += price
        },
        decrement(state,price){
            state.totalPrice -= price
        },
    },
    actions:{//可以异步的进行一些操作
        increase(context,price){
            context.commit('increment',price)
        }
    }
})

export default store