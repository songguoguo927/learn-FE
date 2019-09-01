import React, { Component, useEffect ,useState } from 'react';
class TestState extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:"hello",
            arr:[1,2,3],
            obj:{
                name:'xjm',
                age:18
            }
         }
    }
    //生命周期钩子函数
    componentDidMount() {     
        // this.setState({
        //     msg:'111'
        // })
        // debugger
        // alert(1) chrome中的alert弹出不建议
        // console.log(1)
        this.setState({
            arr:[...this.state.arr,5],
            obj:Object.assign({},this.state.obj,{gender:"女"})
        })
    }
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillMount() {
        //在原先数组上追加5,两种方法
        // this.setState(()=>{
        //     this.state.arr.push(5)
        // })
        // this.setState({
        //     arr:[...this.state.arr,5],
        //     obj:Object.assign({},this.state.obj,{gender:"女"})
        // })
    }
    render() { 
        return ( 
            <div>
               <h1>{this.state.msg}</h1>
               <p>{this.state.arr}</p>
               <p>{JSON.stringify(this.state.obj)}</p>
               <TestHook propsMsg ="ppp"/> 
            </div>
            
         );
    }
}
function TestHook(props){
    console.log(props)
    const [msg,setMsg]=useState(0);
    useEffect(() => {
        // 使用浏览器的 API 更新页面标题
        document.title = `clicked${msg}times`;
        // alert(1) here firefox和chrome同
      });
    return (
        <h1 onClick={()=>setMsg(msg+1)}>{msg}</h1>
    )
 }
export default TestState;