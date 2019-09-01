import React, { Component } from 'react';
class MyTab extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            CurrentCom:Index
         }
    }
    changeTab(component){
        // console.log(component)
        this.setState({
            CurrentCom:component
        })
    }
    render() { 
        let {CurrentCom} = this.state;
        return ( 
            <div className="nav">
                <button onClick={this.changeTab.bind(this,Index)}>首页</button>
                <button onClick={this.changeTab.bind(this,Student)}>学生管理</button>
                <button onClick={this.changeTab.bind(this,Course)}>课程管理</button>
                <button onClick={this.changeTab.bind(this,Room)}>个人中心</button>
                <div className="showChildCom">
                    <CurrentCom/>
                </div>
            </div>
         );
    }
}
 const Index = ()=><h1>首页</h1>
 const Student = ()=><h1>学生管理</h1>
 const Course = ()=><h1>课程管理</h1>
 const Room = ()=><h1>个人中心</h1>
export default MyTab;