import React, { Component } from 'react';

class TestRef extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg:"sss"
          }
    }
    componentDidMount() {
        //this.refs 里面存放该组件内所有的引用
        console.log(this.refs)//Object { title: h1, input1: input, input2: input }
        console.log(this.refs.childRef)//Object { props: {…}, context: {}, refs: {}, updater: {…}, state: {…}, _reactInternalFiber: {…}, _reactInternalInstance: {…} }
        console.log(this.refs.childRef.state) //Object { msg: "testRef的子组件中的msg" }//拿到子组件的数据
        //在父组件中修改子组件的数据，如果拿到的子组件的实例，则利用子组件的setState
        this.refs.childRef.setState({
            msg:"lllll"
        },()=>{
            console.log('更改后子组件的msg',this.refs.childRef.state)
        })//setState是异步的
        console.log(TestChildRef) //function TestChildRef()
        console.log(TestChildRef===this.refs.childRef) //false
    }
    handleSubmit(e){
        console.log(e.target)
        console.log(e.currentTarget)
        console.log(this.refs.input1.value||this.refs.input2.value||'请输入值')
    }
    render() { 
        return ( 
            <>
            <h1 ref="title">hhh</h1>
            {/* ref相当于一个id，可以方便我们获取DOM节点，保存在this.refs这个对象中 */}
            <input ref="input1"></input>
            <input ref="input2"></input>
            <button onClick={this.handleSubmit.bind(this)}>提交</button>
            <TestChildRef ref="childRef"/>
            </>              
        );
    }
}
 class TestChildRef extends Component {
     constructor(props) {
         super(props);
         this.state = { msg:'testRef的子组件中的msg' }
     }
     render() { 
         return (  
             <h1 ref={()=>{console.log('-----')}}>testRef的子组件</h1>
         );
     }
 }
  
export default TestRef;
//ref 属性接受一个回调函数，它在组件被加载或卸载时会立即执行,回调函数的参数为该组件的真
// 正实例的引用
//ref如果值为函数  并不会再this.refs中保存

// Reactᨀ供的这个ref属性，表示为对组件真正实例的引用，其实就是ReactDOM.render()返回的组
// 件实例。ref属性可以挂载到组件上也可以是dom元素上
// ref 属性接受一个回调函数，它在组件被加载或卸载时会立即执行,回调函数的参数为该组件的真正实例的引用
// ref属性接受一个字符串,例如foo，通过this.refs.foo来访问该组件真正实例
// <CourseForm ref={this.courseFormRefs}/> 
// <CourseForm ref='courseForm'/> 
// <div ref="hello">hello</div> 
// <div ref="world">world</div>