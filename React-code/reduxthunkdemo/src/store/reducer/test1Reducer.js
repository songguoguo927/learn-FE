//test1reducer 业务逻辑处理
import {CHANGE_TEST1} from '../actionTypes'
const test1State = {
    msg:'test1'
}
export default (state=test1State,action)=>{
    //业务逻辑处理
    if(action.type===CHANGE_TEST1){
        let newState = {...state,msg:action.value}
        return newState
    }
    return state;
}