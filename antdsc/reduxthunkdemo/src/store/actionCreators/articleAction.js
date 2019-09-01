import { CHANGE_MSG, GET_DATA,CHANGE_ARTICLE} from "../actionTypes";
import Axios from "axios";

export const changeMsgA = value => {
  return {
    type: CHANGE_MSG,
    value
  };
};

//使用redux-thunk后  不纯粹（纯粹-》返回对象）的action 可返回一个函数 该函数里有参数dispatch 发送异步 异步成功之后再分发action 更改数据
//意味着当我们要异步获取数据时 需要两个actionCreator 一个用来发送请求获取数据 另一个用来拿到数据更改到state上
//redux=thunk actionCreator
export const getDataA = (obj)=>{
    return (dispatch)=>
    Axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
    .then(res => {
        console.log(res)
        dispatch(changeArticleA(res.data.data.list))
    }).catch(err=>console.log(err))
}
export const changeArticleA = (value)=>{
    return {
        type:CHANGE_ARTICLE,
        value
    }
}