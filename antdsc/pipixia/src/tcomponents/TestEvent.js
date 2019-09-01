import React, { Component } from "react";
class TestEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick3 = this.handleClick3.bind(this);
  }
  //点击按钮，修改count的值

  handleClick1 = () => {
    console.log(this);
  };
  handleClick2() {
    console.log(this);
  }
  handleClick3() {
    console.log(this);
  }
  handleClick4() {
    console.log(this);
  }
  //测试事件传参

  handleClick11 = e => {
    console.log(e.target.getAttribute("data-id"));
  };
  handleClick21(a, b, event) {
    //有参数传递过来，则最后一个参数为event
    console.log(a, b);
    console.log(event);
  }
  handleClick41(e, a) {
    console.log(e);
    console.log(a);
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick1}>click1</button>
        <button onClick={this.handleClick11} data-id="1001">
          click11
        </button>

        <button onClick={this.handleClick2.bind(this)}>click2</button>
        <button onClick={this.handleClick21.bind(this, "1001", "1002")}>
          click21
        </button>
        {/* 直接执行<button onClick={this.handleClick2.call(this)}>click2</button> */}

        <button onClick={this.handleClick3}>click3</button>

        <button
          onClick={() => {
            this.handleClick4();
          }}
        >
          click4
        </button>
        <button
          onClick={e => {
            this.handleClick41(e, 3);
          }}
        >
          click41
        </button>
      </div>
    );
  }
}

export default TestEvent;

//解决内部this指向的方法
//1，将handleClick事件处理程序写成箭头函数的形式
//2,在绑定事件时使用bind绑定this,【不用call，因为直接就执行嘞】
//3，constructor中绑定this  ---性能最优
//4，直接在绑定事件的时候写一个箭头函数
//总的来讲就是利用两个知识点：箭头函数或者bind，上面只是四种写法而已
//事件传参--两种方式，见上
