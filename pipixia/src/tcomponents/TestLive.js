import React, { Component } from 'react';
class TestLive extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:"测试生命周期"
         }
    }
    //文章：https://www.cnblogs.com/nanianqiming/p/10393585.html
    // 由于未来采用异步渲染机制，所以即将在17版本中去掉的生命周期钩子函数
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    // componentWillMount() {}
    // //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
    // componentWillReceiveProps(nextProps) {}
    // //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
    // componentWillUpdate(nextProps, nextState) {}

    //new add live 
    // static getDerivedStateFromProps(nextProps, prevState) {
        
    // }
    
    render() { 
        console.log("render")
        return ( 
            <h3>{this.state.msg}</h3>
         );
    }
    componentDidMount() {
        // this.setState({
        //     msg:"test live"
        // })
        setTimeout(()=>{
            this.setState({
                msg:"test live"
            })
        },2000)
        // setTimeout(function(){console.log(this,'+++')},1000)//this-->window
        // setTimeout(()=>{console.log(this,'+++')},1000)//this-->当前组件
    }
    shouldComponentUpdate(){
        alert("允许更新")
        return true;
    }
    //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
    componentWillUpdate(nextProps, nextState) {
        alert("将要更新")
    }
    componentDidUpdate(nextProps, nextState) {
        alert("已经更新")
    }
    componentWillUnmount(){
        console.log("将要被卸载")
    }
}
 
export default TestLive;