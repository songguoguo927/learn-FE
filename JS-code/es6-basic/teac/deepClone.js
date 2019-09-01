//target 目标对象，我们要把它返回出去
//Object.assign的思想，我们提升一下他的功能，变成深复制

//考虑的点，如何判断一个数据是数组，对象
// 数组推荐Array.isArray(要判断的数据)
//对象（除函数，数组）推荐 constructor
// obj.constructor === Object
/**
 *
 * @param {*} target
 * @param  {...any} tail
 */
function myObjectAssign(target, ...tail) {
  // var
  // console.log(tail)
  tail.forEach(item => {
    //遍历对象 for in
    for (let key in item) {
      // console.log(key,item[key])
      if (Array.isArray(item.key)|| item[key].constructor ===Object) {
        //如果是一个对象（除函数外） 再次遍历
        target[key] = JSON.parse(JSON.stringify(item[key]));
      } else {
        target[key] = item[key];
      }
    }
  });
  return target;
}
var obj = {};
var obj1 = {
  name: "xjm"
};
var obj2 = {
  sex: "女",
  class: {
    grade: "大一",
    classes: "3班"
  }
};

console.log(myObjectAssign(obj, obj1, obj2));
console.log(obj.class === obj2.class); //true

/**真正的实现深复制 */

let jj = {
    name:'xjm'
}
console.log(jj.__proto__===Object.prototype) //true
console.log(Object.getPrototypeOf(jj)===Object.prototype) //true

let objPro = {toString:()=>'hello'}
Object.setPrototypeOf(jj,objPro)
console.log(Object.getPrototypeOf(jj)===objPro) //true
console.log(jj.valueOf()) //{ name: 'xjm' }
console.log(jj.toString()) //"hello"

//对象的遍历
//1,for in 2，先搞出entries再去for of遍历entries
for(let key in jj){
    console.log(key,'----',jj[key])
}

console.log(Object.keys(jj))
console.log(Object.values(jj))
// console.log()
let ens = Object.entries(jj);

//数组 类数组 set map 等iterable都可以使用for of遍历

/**
 * let en of ens
 * let [key,value] = en;
 * |
 */
for(let [key,value] of ens){
    console.log(key,value)
}

//普通函数 this
function test(){
    console.log('p')
    console.log(this)
}
// test() //global

// console.log(this) //{}  this 指向模块导出对象  module.exports
// console.log(this === module.exports) //this 指向模块导出对象  module.exports,默认情况下导出空对象

//箭头函数 this
console.log('------')
let test2 = () =>{console.log(this)}
// test2() //{}  this指向箭头函数声明时的父作用域中的this

let oobj = {
    test,
    test2
}
oobj.test() //oobj
oobj.test2() //{}

//箭头函数内部的arguments不保存实参’

let test3=()=>{
    console.log(arguments)

}
// test3(1,2,3)//arguments不再保存实参，而是一些和模块相关的内容

// function test4(){
//     console.log(this);
//     (()=>
//         console.log(this) //与外面的this保持一致
//     )();
// }

// test4()//两次打印global

let oojj ={
    name:'xjm',
    // test4
}

// oojj.test4() //两次oojj

function test5(){
    console.log(this,'-----')
    return ()=>{
        console.log(this,'++++++++')
    }
}
let xjm = {
    // test:test5()  //global -----
}
// xjm.test() //global ++++

// Array.from()
// Array.of()

let tmp = {
    "0":'hello',
    "1":"world",
    length:2 
}
console.log(Array.from(tmp))//需要length
console.log(Array.of(10))//用于弥补Array构造函数的不足
console.log(Array.of(10,11))
console.log(new Array(10))
console.log(new Array(10,11))
let arr = [24,25,34,56,7,24,34]
// console.log(new Set(arr)) //返回一个Set 对象 Set { 24, 25, 34, 56, 7 }
//想又转成数组 1,使用Array.from 2.使用扩展运算符

console.log(Array.from(new Set(arr))) //[ 24, 25, 34, 56, 7 ]
console.log([...new Set(arr)]) //[ 24, 25, 34, 56, 7 ]

//find findIndex

let result = arr.find((item)=>item>30) //返回找到的值
let result2 = arr.findIndex((item)=>item>30) //返回找到的位置
console.log(result,result2) //34  2

let xjmArr = [1,2,3]
// console.log(xjmArr.fill(9))
// console.log(xjmArr)//会改变原数组

xjmArr.includes(2)  //是否包含，返回true/false
  