// 携程）算法手写题

// 已知如下数组：
var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
// 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
console.log(
  arr
    .toString()
    .split(",")
    .map(item => +item)
    .filter((item, index, arr) => {
      return arr.indexOf(item) === index;
    })
    .sort((a, b) => a - b)
);

// 两个数组合并成一个数组
var arr1 = ["A1", "A2", "B1", "B2", "C1", "C2", "D1", "D2"];
var arr2 = ["A", "B", "C", "D"];
// 合并为 ['A1', 'A2', 'A', 'B1', 'B2', 'B', 'C1', 'C2', 'C', 'D1', 'D2', 'D']。
var arrHe = [...arr1, ...arr2];
console.log(
  arrHe.sort((pre, next) => {
    return pre.charCodeAt(0) - next.charCodeAt(0);
  })
);
var b = 10;
(function b() {
  b = 20;
  console.log(b); //[Function: b]非匿名自执行函数，函数名只读
})();


var obj = {
  a: {
    b: {
      c: {
        d: 1
      }
    }
  }
};
console.time();
console.log(obj.a.b.c.d);
console.timeEnd(); //default:0.763ms  0.684
// console.time()
// console.log(obj["a"]["b"]["c"]["d"])
// console.timeEnd()  //default:1.100ms 0.964ms

// 结果：虽然时间都会变动，在但总体感觉使用点访问的时间要少于以[]访问。

// 数组编程题

// 随机生成一个长度为 10 的整数类型的数组，例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，
// 将其排列成一个新数组，要求新数组形式如下，例如 [[2, 3, 4, 5], [10, 11], [20]]。
// 得到一个两数之间的随机整数，包括两个数在内

/*复杂的生成长度为10的数组  方法
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
}
var array = [],
  i = 10;
console.log(getRandomIntInclusive(1,30));
while (i > 0) {
  array.push(getRandomIntInclusive(1,30));
  i--;
}
console.log(array)*/
const array = Array.from({
    length: 10
  }, () => ~~(Math.random() * 50)) //创建数据
  .sort((a, b) => a - b); //排序
console.log(array)//[ 13, 17, 20, 27, 29, 34, 40, 42, 43, 45 ]

console.log(array.map(i => ~~(i / 10)))//[ 1, 1, 2, 2, 2, 3, 4, 4, 4, 4 ]
console.log([0,1,2,3,4].map(i=>array.filter(a => ~~(a / 10) === i)))
//[ [], [ 13, 17 ], [ 20, 27, 29 ], [ 34 ], [ 40, 42, 43, 45 ] ]

const arrayRes = [...new Set(array.map(i => ~~(i / 10)))] //划分区域 并去重
  .map(i => array.filter(a => ~~(a / 10) === i)) //数据划分 往每个区域放置数组
console.log(arrayRes)//[ [ 13, 17 ], [ 20, 27, 29 ], [ 34 ], [ 40, 42, 43, 45 ] ]
//~~常用来取整,使用~~来代替Math.floor();
// const array = Array.from({
//   length: 10
// }, () =>Math.floor((Math.random() * 50))) //创建数据
// .sort((a, b) => a - b), //排序
// arrayRes = [...new Set(array.map(i =>Math.floor( i / 10)))] //去重及  划分区域
// .map(i => array.filter(a => Math.floor((a / 10)) === i)) //数据划分
// console.log(arrayRes)
