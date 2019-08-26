import React, { Component,useEffect } from 'react';
import {HashRouter,Switch,NavLink,Route,Redirect} from 'react-router-dom'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                <HashRouter>
                    <div>
                        <NavLink to="/student">学生管理</NavLink>
                        {/* <NavLink to="/course">课程管理</NavLink> */}
                    </div>
                    <Switch>
                        <Route path="/student" component={Student}/>                      
                        <Route path="/course" component={Course}/>
                        {/* 动态路由 */}
                        {/* <Route path="/course/:id" component={Course}/> */}
                        <Redirect from="/" to="/student" exact></Redirect>
                    </Switch>
                </HashRouter>
            </div>
        );
    }
}
const Student = (props)=>{
    const toCourse = ()=>{
        //Api路由跳转和传参
        props.history.push({
          pathname:"/course",
          test:"测试组件数据传递",
          obj:{
              name:'xjm',
              age:18
          }
      })}
    return ( 
        <div>
            <h3>学生管理</h3>
            <button onClick={toCourse}>api传参</button><br></br>
            <NavLink to="/course">NavLink路由跳转</NavLink><br></br>
            <a href="#/course">a路由跳转</a><br></br>
            <NavLink to="/course?name=xjmmmm">NavLink路由跳转拼接查询字符串</NavLink><br></br>
            <NavLink to="/course/18">动态路由跳转传参</NavLink><br></br>
            <NavLink to="/course/18?name=xjm">动态路由跳转传参拼接查询字符串</NavLink><br></br>
        </div>
     );

}
const Course = (props)=>{
    useEffect(()=>{
        //接受Student组件传过来的参数
        console.log(props)
        //api传参，参数存放的位置
        console.log(props.location)
        //查询字符串参数的获取
        // console.log(props.location.search)
        //动态路由传参  参数存放的位置
        // console.log(props.match.params)
        // console.log(props.location.search)
    });
    // toC(){
    //     return 1;
    // } 不能这样定义函数?像下面一样可以
    const handleDelete = item => () => {
        // listsDispatch({
        //   type: 'DELETE',
        //   payload: item
        // });
        console.log(item)
      };
    return <h3 onClick={handleDelete(1)}>课程管理</h3>
}
export default Home;

// 路由跳转几种形式
//1、 api跳转
//this.props.history.push('/course')
//2、a
// <a href="#/course">NavLink路由跳转</a> 
//3、Link
//4、NavLink
//<NavLink to="/course">NavLink路由跳转</NavLink> */}
//路由传参
//1、API路由传参
 //Api路由跳转和传参
//  this.props.history.push({
//     pathname:"/course",
//     test:"测试组件数据传递",
//     obj:{
//         name:'xjm',
//         age:18
//     }
// })
// 获取参数 
//this.props.location.test
//this.props.location.obj
//2、查询字符串传参
//<NavLink to="/course?name=xjmmmm">NavLink路由跳转传参</NavLink>
// 获取参数 
//this.props.location.search

//3、动态路由
//1)<Route path="/course/:id" component={Course}/>

//<NavLink to="/course/18">动态路由跳转传参</NavLink>
// 获取参数 
//console.log(props.match.params)   在类组件中使用this.props
