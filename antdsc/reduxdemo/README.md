Redux

用户交互 产生action 进行dispatch(action) 分发给store  store自动转发给reducer 让reducer去更改state 更改完 页面监听到重新渲染
 
做一个备忘录demo

create-react-app +antd高级配置、自定义主题+引入redux

建store
建reducer --用于对数据的操作

组件中获取 构造函数中store.getState()返回一个对象赋值给this.state

如想更改state  订阅者模式--state中的数据更改，引发页面重新渲染

根据老师的code or 视频跟上节奏

options  试探性的握手
post 真正的发送请求
---
Action 是一个纯对象
reducer是一个纯函数
store
react component

安装redux
  yarn add redux
1.创建reducer
  store->reducer.js
  定义默认state,导出函数
    (state,action)=>{
      if(action.type===XXX){
        return {

        }
      }
    }
2.创建store
  import { createStore } from 'redux';
  import reducer from './reducer';
  // 注入reducer
  export default createStore(reducer);
3.引入store
  import store from './store';
4.使用
  在constructor里
    this.state = store.getState();   将store中的数据导入到当前组件的state
    store.subscribe(this.storeChange) //订阅Redux的状态，如果redux中的状态发生更改，需要监听并渲染

    storeChange = () => {
      this.setState(store.getState());
    }
  编写action,触发reducer更改store中的数据
    const action = {
      type: 'changInput',
      value: e.target.value
    };
    store.dispatch(action);



订阅者模式
  store中的数据一更改，页面的订阅者发现，就去改页面的数据，让页面重新去渲染。

---
react-redux

React UI库 
想要状态管理机制  +使用redux
想要在reducer中异步交互 +使用redux-thunk/redux-saga
想要简化代码，将业务逻辑和UI组件分离 +使用 react-redux


