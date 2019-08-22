```js
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
/*
function async1(){
  console.log('async1 start')
  return new Promise(resolve => resolve(async2()))
    .then(() => {
      console.log('async1 end')
    });
}
对于 await v：

await 后的值 v 会被转换为 Promise
即使 v 是一个已经 fulfilled 的 Promise，还是会新建一个 Promise，并在这个新 Promise 中 resolve(v)
await v 后续的代码的执行类似于传入 then() 中的回调

*/
async function async2() {
  console.log("async2");
}
/*async2() 返回了一个状态为 <resolved>: undefined 的 Promsie   
function async2(){
  console.log('async2');
  return Promise.resolve();
}
*/
console.log("script start");
setTimeout(function() {
  console.log("setTimeout");
}, 0);
async1();
new Promise(function(resolve) {
  console.log("promise1");
  resolve();
}).then(function() {
  console.log("promise2");
});
console.log("script end");
```

// 这道题主要考察的是事件循环中函数执行顺序的问题，其中包括 async ，await，setTimeout，Promise 函数。下面来说一下本题中涉及到的知识点。
/\*\*正确答案 node 下

- script start
- async1 start
- async2
- promise1
- script end
- promise2
- async1 end
- setTimeout(下一次)
  \*/

Promise 基础

    Promise 执行器中的代码会被同步调用
    Promise 回调是基于微任务的

宏任务与微任务的优先级

    宏任务的优先级高于微任务
    每一个宏任务执行完毕都必须将当前的微任务队列清空
    第一个 script 标签的代码是第一个宏任务

浏览器架构

    用户界面
    主进程
    内核
        渲染引擎
        JS 引擎
            执行栈
        事件触发线程
            消息队列
                微任务---~~微任务队列由S引擎线程维护~~
                宏任务---由事件触发线程维护
        网络异步线程
        定时器线程

浏览器下事件循环(Event Loop)
事件循环是指: 执行一个宏任务，然后执行清空微任务列表，循环再执行宏任务，再清微任务列表

微任务 microtask(jobs): promise / ajax
微任务是为了 async/await 和 promise 的延迟执行设计的，每次任务最后执行。在返回事件循环（event loop）前，微任务的队列会被清空。
宏任务 macrotask(task): setTimeout / setInterval / script 主代码块/ IO / UI Rendering

## 任务队列

首先我们需要明白以下几件事情：

- JS 分为同步任务和异步任务，~~（可以进一步分异步任务为微任务宏任务 me）~~
- 同步任务都在主线程上执行，形成一个执行栈
- 主线程之外，事件触发线程管理着一个任务队列，~~只要异步任务有了运行结果~~执行过程中遇到异步任务，就在任务队列之中放置一个事件。
- 一旦执行栈中的所有同步任务执行完毕（此时 JS 引擎空闲），系统就会读取任务队列，将可运行的异步任务添加到可执行栈中，开始执行。

/_火狐下
script start debugger eval code:18:9
async1 start debugger eval code:2:11
async2 debugger eval code:16:11
promise1 debugger eval code:24:11
script end debugger eval code:29:9
undefined
promise2 debugger eval code:27:11
async1 end debugger eval code:4:11
setTimeout debugger eval code:20:11
_/
**因为 async/await 可视为 Promise 的语法糖，同样基于微任务实现；本题主要纠结的点在于 await 到底做了什么导致 async1 end 晚于 promise2 输出。**问题的关键在于其执行过程中的微任务数量

/_谷歌下
script start
VM118:2 async1 start
VM118:16 async2
VM118:24 promise1
VM118:29 script end
VM118:4 async1 end
VM118:27 promise2
undefined
VM118:20 setTimeout
_/
