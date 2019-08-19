async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2");
}
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
/**my result:
 * script start
 * script end  X
 * setTimeout   X
 * async1 start
 * async2
 * async1 end
 * promise1
 * promise2
 */
// 这道题主要考察的是事件循环中函数执行顺序的问题，其中包括async ，await，setTimeout，Promise函数。下面来说一下本题中涉及到的知识点。
/**正确答案
 * script start
 * async1 start
 * async2
 * promise1
 * script end
 * promise2
 * async1 end
 * setTimeout
 */
