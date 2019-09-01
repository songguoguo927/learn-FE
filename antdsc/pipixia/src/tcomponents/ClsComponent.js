import React, { Component } from "react";

class ClsComponent extends Component {
  constructor(props) {
    super(props);
    // console.log(this);
    // console.log(props);
    this.state = {
      msg: "state中的msg",
      arr: [
        { name: "xjm", age: 18, qq: "13421314@qq.com" },
        { name: "sss", age: 21, qq: "143653754@qq.com" },
        { name: "xsa", age: 19, qq: "125468314@qq.com" },
        { name: "saa", age: 22, qq: "1534614@qq.com" }
      ]
    };
  }
  render() {
    let msg = "hello";
    return (
      <div>
        <h2>{this.props.user.name}</h2>
        {/**访问父组件传过来的 */}
        <h2>{this.state.msg}</h2> {/**访问state内部的msg */}
        <h2>{msg}</h2> {/**访问render内部的msg */}
        <MyTable arr={this.state.arr} />
      </div>
    );
  }
}
//需求：遍历数组，表格显示数据
const MyTable = props => {
  // console.log(props);
  const {arr} = props;
  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>age</th>
          <th>QQ</th>
        </tr>
      </thead>
      <tbody>
        {arr.map((item, index) => {
          return <MyTr key={index} item={item} />;
        })}
      </tbody>
    </table>
  );
};
const MyTr = props => {
  // console.log(props);
  const {name,age,qq} = props.item
  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>{qq}</td>
    </tr>
  );
};

export default ClsComponent;
