大型项目 redux 组织架构  代码拆分

整合多个reducer
combineReducers

用户交互 在组件中产生action 分发action给store 然后store自动转发给reducer处理业务逻辑
更改完返回state  组件中监听（事先要订阅一下state更改）到state改变 会重新渲染页面

使用react-redux 
有效的分离ui组件和容器组件（处理业务逻辑）

ui组件 不做业务逻辑，只做数据显示
容器组件 包裹UI组件

connect 用于从ui组件生成容器组件

day09
--异步数据的获取  使用react-redux redux  redux-thunk/redux-saga