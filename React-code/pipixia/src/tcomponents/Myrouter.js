import React, { Component,useEffect } from 'react';
import {BrowserRouter,HashRouter,Switch,Link,Route,NavLink} from 'react-router-dom'

const style = {color:"red"}
class Myrouter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.props.history.push('/course')

    }
    toCourse = ()=>{
        // console.log(this)
        // console.log(this.props)
        // this.props.history.push({
        //     pathname:"/course",
        //     test:"测试组件数据传递",
        //     obj:{
        //         name:'xjm',
        //         age:18
        //     }
        // })
    }
    render() { 
        return ( 
            <HashRouter>
                <nav>
                    <button onClick={this.toCourse}>跳转到course</button>
                    <NavLink activeStyle={style} exact to="/">home </NavLink>
                    <NavLink activeStyle={style} exact to="/student"> student </NavLink>
                    <NavLink activeStyle={style} exact to="/course"> course </NavLink>
                    <NavLink activeStyle={style} exact to="/room"> room</NavLink>
                </nav>
                
                    <div>
                        {/* 组件的展示  component 小写*/}
                        <Switch>
                            <Route path="/student"  component={Student}></Route>
                            <Route path="/course" exact component={Course}></Route>
                            <Route path="/room"exact component={Room}></Route>
                            <Route path="/" exact component={Index}></Route>
                        </Switch>
                    </div>
            </HashRouter>
         );
    }
}
const Index = ()=><h1>首页</h1>
const Student = ()=><h1>学生管理</h1>
function Course(props){
    useEffect(()=>{
    // console.log(props.location) 在组件挂载完毕获取参数
    })
    return <h1>课程管理</h1>
}
const Room = ()=><h1>个人中心</h1>
export default Myrouter;