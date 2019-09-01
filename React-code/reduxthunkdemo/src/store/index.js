//store
import {createStore,applyMiddleware,compose} from 'redux';
//compose增强函数 给dev tools使用的工具
import reducer from './reducer'
import thunk from 'redux-thunk'
// const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk))
const store=createStore(reducer,enhancer)

export default store;