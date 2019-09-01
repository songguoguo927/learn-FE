// 仓库 store
import { createStore } from 'redux';
import reducer from './reducer';
// 将reducer与store绑定，创建store并返回
export default createStore(reducer);



