/**1.找出元素item 在给定数组中的位置 */
//使用 for循环实现自己的indexOf
const arr = [1, 2, 3, 4, 5, 3, 2, 2];
Array.prototype.myIndexOf = function(item) {
  for (let i = 0; i < this.length; i++) {
    return this[i] == item ? i : -1;
  }
};
console.log(arr.indexOf(3));
/**2.数组求和*/
//方法：1.使用for循环遍历数组，+= 就不写了；2.使用reduce方法

let total = arr.reduce((previousValue, item) => {
  return previousValue + item;
}, 0); //0是赋值给初始的previousValue,加不加0 都是15，改成10，结果为25
console.log(total); //15

/**介绍下reduce方法
 * reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
 * `arr.reduce(callback[, initialValue])`
 *      callback函数接收4个参数:
 *           accumulator：累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或initialValue（见于下方）。
 *           currentValue：数组中正在处理的元素。
 *           currentIndex可选：数组中正在处理的当前元素的索引。
 *           array可选
 *  initialValue:提供了则起始累计器的值是initialValue，否则为0。
 * 作为第一次调用 callback函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 reduce 将报错。
 */

/**3，移除数组中与 item 相等的元素,不修改原数组，返回新数组*/
//讲一下思路：设置一个空数组，用于盛放（push进来） 遍历原数组后与item不等的值

//若可以修改原数组，则可以使用splice(index,1)方法；记得删除一个 index要--

/**4.添加元素，且不修改原数组*/
//使用concat，不能用push
// -开头添加 [item].concat(arr)
// -末尾添加 arr.concat([item])
//-在数组 arr 的 index 处添加元素 item：首先使用arr.slice(0)复制一份原来的数组，
//然后在复制出来的数组中，arrcopy.splice(index,0,item)

/**5.删除元素，且不修改原数组 */
//使用slice,该方法直接返回修改后的新数组
//-开头删除 arr.slice(0,1)
//-末尾删除 arr.slice(0,-1)

/**6.数组去重 */
//方法1，使用filter和IndexOf过滤；2.splice 3，Set 。。。。方法
let arr2 = arr.filter((item, index, arr) => {
  return arr.indexOf(item) === index; //留下--所有第一次出现的数据，妙
});
console.log(arr2);

/**7.字符串和数组互转，split和join是一对*/
//split用来将字符串转成数组
//join用来将数组转成字符串

//所以一般可以让字符串借助数组的一些方法做一些操作，
//比如想翻转字符串，我们可以让字符串先转成数组，再利用数组的reverse方法，最后又转回来

/**8.找出多个数组中的最大数*/
let lotsArr = [
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
];
// 思路：遍历外数组中的每一个小数组，将小数组从大到小排列，后取小数组中的第一个元素放入maxArr
var maxArr = [];
lotsArr
  .map(item =>
    item.sort((a, b) => {
      return b - a;
    })
  )
  .map(item => maxArr.push(item[0]));
console.log(maxArr); //[ 5, 27, 39, 1001 ]

//9.字符串 方法toUpperCase() charAt slice toLowerCase split
//str.substr(start[, length])
//  - start开始提取字符的位置。如果为负值，则被看作 strLength + start，其中 strLength 为字符串的长度（例如，如果 start 为 -3，则被看作 strLength + (-3)）。
//  - length可选。提取的字符数。

//10.重复输出字符串--写这个是提醒自己，可以日常使用的时候考虑while循环，不要一上来就整for
function repeat(str, num) {
  //重复一个指定的字符串 num次，如果num是一个负数则返回一个空字符串
  var arr = [];
  while (num > 0) {
    arr.push(str);
    num--;
  }
  return arr.join("");
}
repeat("abc", 3);

//11. 字符串中出现连续最长的子串??
var str = "dlkcsssssswjdkcccclajjjjjjjjjjjjjjklaalll";
var reg = /(\w)+/g;
console.log(reg.exec(str));

//12. 找出数组中最大的值
//方法1，先排序，再取第一个或最后一个，取决于你升序还是降序排列
//方法2，reduce 
console.log(arr.reduce((previousValue,item)=> Math.max(previousValue,item))) //5
//方法3，Math.max(...arr)
//方法4，很朴素的for/forEach循环，借助一个max变量，每次存储一个，再比较
var max = 0
arr.forEach(item=>{
    if(item>max){
        max = item;
    }
})
console.log(max) //5