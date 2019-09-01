//用来整合所有的reducer 然后导出一个合并之后的reducer
import {combineReducers} from 'redux'
import test1Reducer from './test1Reducer'
import test2Reducer from './test2Reducer'
import articleReducer from './articleReducer'

const reducer = combineReducers({
    test1: test1Reducer,
    test2: test2Reducer,
    article:articleReducer,
})
export default reducer;


// 初始化数据合并最终结果
// state:{
//     test1:{msg:'test1'},
//     test2:{mag:'test2'}
// }