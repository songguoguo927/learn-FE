import React, { Component } from "react";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        msg:"父组件原值"
    };
    console.log(React.createRef())//Object { current: null } 使用场景
  }
  handleChangeChildState() {
    const myc = this.refs.myc;//获取子组件的实例
    // 每当使用this.setState() 修改状态时，将再次调用 render( ) 函数来更改UI中组件的输出
    myc.setState(
      {
        msg: "更改后子组件的值"
      },
      () => {
        console.log(myc.state.msg);
      }
    );
  }
  //父组件自己更改自己的值
  changeState(){
      this.setState({
          msg:"调用父组件的方法改父组件的值"
      })
  }
  render() {
    return (
      <>
        <h1 style={{
            color:"red"
        }}>我是父组件</h1>
        <h2>{this.state.msg}</h2>
        <button onClick={this.handleChangeChildState.bind(this)}>
          点击更改子组件的state的msg
        </button>
        <Child ref="myc" ParentMsg={this.state.msg} changeState={this.changeState.bind(this)}/>
      </>
    );
  }
}
class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "子组件原值"
    };
  }
  componentDidMount() {
      console.log('子组件获取',this.props.ParentMsg)
  }
  handleChangeParState(){//这是一种写法，还可以直接写在下面
    this.props.changeState()
  }
  render() {
    return (
      <>
        <h1>我是子组件</h1>
        <h2>{this.state.msg}</h2>
        <button onClick={this.handleChangeParState.bind(this)}>
          点击更改父组件的state的msg
        </button>
      </>
    );
  }
}

export default Parent;
//父子组件通信

// 父组件修改子组件state的数据   在父组件利用refs获取子组件的实例，,再调用子组件的setState
//子组件修改父组件的数据  利用props 需要父组件传递修改自己state的函数给子组件
