// async function fn(){
//     return 30;
// }
// const bar = async ()=>{
//     return 31;
// }
// console.log(fn())//Promise { 30 }
// //async 是Promise的一个语法糖
// fn().then(res=>console.log(res)) //30
//await 的含义是等待，意思就是代码需要等待 await 后面的函数运行完并且有了返回结果之后，才继续执行下面的代码，这正是同步的效果
//但是await关键词只能在async函数中使用 并且await后面的函数必须返回一个Promise对象才能实现同步的效果

{
  function fn() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(30);
      }, 2000);
    });
  }
  // const foo = async ()=>{
  //     const t = await fn();
  //     console.log(t)
  //     console.log('next code')
  // }
  //使用try/catch来捕获异常
  const foo = async () => {
      //为保证逻辑的完整性，在实践中try/catch必不可少
    try {
      const t = await fn();
      console.log(t);
      console.log("next code");
    } catch (e) {//有多个await时 返回第一个捕获到的异常
      console.log(e);
    }
  };
  foo()
}
