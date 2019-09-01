import { CHANGE_MSG, GET_DATA,CHANGE_ARTICLE } from "../actionTypes";

let initState = {
    msg:'article'
}

export default (state=initState,action)=>{
    if(action.type===CHANGE_MSG){
        let newState = {...state,msg:action.value}
        return newState;
    }
    
    if(action.type===GET_DATA){

    }
    if(action.type===CHANGE_ARTICLE){
        let newState = {...state,AAAA:action.value}
        return newState;
    }
    return state;
}