//处理业务逻辑的 如果发送了action 这里可以监听然后处理异步
import { takeEvery, put } from 'redux-saga/effects';
import {GET_APP_YIBU,DELETE_APP_YIBU} from './actionTypes'
import {changeDataA,getDataAFromSaga} from './actionCreator/appActionCreator'
import axios from 'axios'
//takeEvery默认监听所有 若我们给参数 就监听固定的
//put相当于dispatch 转发action
function * mySagas(){
    // console.log(111)
    //监听某个action 然后执行第二个参数 generator函数
    yield takeEvery(GET_APP_YIBU,getList)
    yield takeEvery(DELETE_APP_YIBU,delListone)
}
function * getList(){
    //发送异步 异步成功之后 分发action
    let res = yield axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
    console.log(res)
    yield put(changeDataA(res.data.data.list))
}
function * delListone(){
    let res = yield axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
    console.log('假装调用了删除接口返回了',res)
    //调用  重新获取全部数据
    // yield put(getDataAFromSaga({ page: 0, pageSize: 10 }))
    yield put(changeDataA('删除'+res.statusText))

}
//拓展功能 根据组件提供给我们的id 我们去删除数据 删除完又进行重新的展示
export default mySagas