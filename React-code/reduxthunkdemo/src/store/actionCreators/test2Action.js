//test2Action创建器
import {CHANGE_TEST2,TO_GET_DATA} from '../actionTypes'
export const changeTest2A = (value)=>{
    return {
        type:CHANGE_TEST2,
        value
    }
}
export const toGetDataA = ()=>{
    return {
        type:TO_GET_DATA,
    }
}