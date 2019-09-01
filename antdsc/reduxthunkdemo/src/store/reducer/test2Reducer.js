//test2reducer 业务逻辑处理
import {CHANGE_TEST2,TO_GET_DATA} from '../actionTypes'
import axios from 'axios'
const test2State = {
    msg:'test2',
    arr:[]
}
export default (state=test2State,action)=>{
    if(action.type===CHANGE_TEST2){
        let newState = {...state,msg:action.value}
        return newState
    }
    // if(action.type===TO_GET_DATA){
    //     //获取后台数据 然后返回
    //     axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
    //     .then(res=>{
    //         console.log(res)
    //         //数据确实拿到了，但是设置无效，这个时候就要使用redux-thunk中间件--请看Article组件的reducer流程
    //         let newState = {...state,msg:res}
    //         return newState
    //     }).catch(err=>{console.log(err)})
    // }
    return state
}