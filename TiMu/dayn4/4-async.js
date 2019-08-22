async function async1() {
    console.log('async1 start') 
    await async2()
    console.log('async1 end')
 /* node and firefox
 return new Promise(resolve => resolve(async2()))
    .then(() => {
      console.log('async1 end')
    });
    */
   //Promise.resolve(v) 不等于 new Promise(r => r(v))，因为如果 v 是一个 Promise 对象，前者会直接返回 v，而后者需要经过一系列的处理
   //（主要是 PromiseResolveThenableJob）
   /**谷歌 激进优化  竟然可以带来性能提升
    * return Promise.resolve(async2())
    */
   /*对于 new Promise(resolve => resolve(thenable))，即“在 Promise 中 resolve 一个 thenable 对象”，
   需要先将 thenable 转化为 Promsie，然后立即调用 thenable 的 then 方法，
   并且 这个过程需要作为一个 job 加入微任务队列，以保证对 then 方法的解析发生在其他上下文代码的解析之后*/
   
}
    
async function async2() {
    console.log('async2')//2
}
   /*async2() 返回了一个状态为 <resolved>: undefined 的 Promsie   
function async2(){
  console.log('async2');
  return Promise.resolve();
}
*/ 
async1();
    
new Promise((resolve) => {
    console.log(1)
    resolve()
}).then(() => {
    console.log(2)
}).then(() => {
    console.log(3)
}).then(() => {
    console.log(4)
})
// async1 start ,async2,1,2,3,async1 end,4 node环境 firefox
/*谷歌
async1 start
VM3195:11 async2
VM3195:18 1
VM3195:6 async1 end
VM3195:21 2
VM3195:23 3
VM3195:25 4 */
/*await 一定是做了一些我们不理解的“诡异操作”，
令其后续代码 console.log('async1 end') 被推迟了2个时序。
换句话说，async/await 是 Promise 的语法糖，同样基于微任务实现，不可能有其他超出我们理解的东西，所以可以断定：
在 console.log('async1 end') 执行前，额外执行了2个微任务，所以导致被推迟2个时序！*/