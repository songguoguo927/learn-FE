import {GET_APP_MSG,CHANGE_DATA,GET_APP_YIBU} from '../actionTypes'
let initState = {
    appmsg:'hi bos gils'
}
export default (state=initState,action) =>{
    if(action.type===GET_APP_MSG){
        return {...state}
    }
    if(action.type===CHANGE_DATA){
        return {...state,appmsg:action.value}
    }
    if(action.type===GET_APP_YIBU){

    }
    return state;
}