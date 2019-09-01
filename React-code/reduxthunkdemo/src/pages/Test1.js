//test1组件-练习-纯redux 数据获取与展示更改
import React, { Component } from 'react'
import store from '../store'
import {changeTest1A} from '../store/actionCreators/test1Action'
import {changeTest2A} from '../store/actionCreators/test2Action'
export default class Test1 extends Component {
    constructor(props){
        super(props)
        this.state = store.getState().test1
        //需要订阅store的更改，当state数据有更改的话，会进行重新渲染
        store.subscribe(this.changeState)
    }
    changeState=()=>{
        this.setState(store.getState().test1)
    }
    changeTest1(){
        // 分发action 更改state中的数据
        //changeTest1A()返回一个action对象
        store.dispatch(changeTest1A('我是修改后的值'))
    }
    changeTest2(){
        store.dispatch(changeTest2A('修改test后'))
    }
    render() {
        return (
            <div>
              {JSON.stringify(this.state)}
              <button onClick={this.changeTest1.bind(this)}>更改test1的数据</button>  
              <button onClick={this.changeTest2.bind(this)}>更改test2的数据</button>  
            </div>
        )
    }
}
