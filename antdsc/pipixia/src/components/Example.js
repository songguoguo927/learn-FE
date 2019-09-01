import React,{useState, useEffect} from 'react'
function Example(props) {
  // console.log(props) //父组件中传递过来的属性
  let {show , user, arr } = props;
    // 声明一个新的叫做 “count” 的 state 变量
    //通过在函数组件里调用useState来给组件添加一些内部的state
  const [count, setCount] = useState(0);//useState 唯一的参数就是初始 state，这个参数只有在第一次渲染时会被用到
  //值得注意的是，不同于 this.state，这里的 state 不一定要是一个对象 —— 如果你有需要，它也可以是
//useState 会返回一对值：当前状态和一个让你更新它的函数，
//你可以在事件处理函数中或其他一些地方调用这个函数。它类似 class 组件的 this.setState，但是它不会把新的 state 和旧的 state 进行合并。
// 数组解构的语法让我们在调用 useState 时可以给 state 变量取不同的名字
//---
// 相当于 componentDidMount 和 componentDidUpdate:
useEffect(() => {
  // 使用浏览器的 API 更新页面标题
  document.title = `You clicked ${count} times`;
});
  return (
    // <Fragment>
    <>
      {
        show&&user ? <h1>已登录{user.name}</h1> : <h1>未登录</h1>
      }
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <ul>
        {
          arr.map((item,index)=>
            <li key={index}>{item}</li>
          )
        }
      </ul>
      </>
    // </Fragment>
  );
}
export default Example;
