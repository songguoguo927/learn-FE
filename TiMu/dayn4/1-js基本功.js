//1,关于delete 
//在对象中，且不能删除继承属性
var animal = {
    type:"cat",
    age:'2-month',
    sayHi:function(){
        console.log('miao miao miao')
    },
    hobby:'',
    address:''
}
for(key in animal){
    if(!animal[key]){
        delete animal[key];
    }
}
// console.log(animal)//{ type: 'cat', age: '2-month', sayHi: [Function: sayHi] }
//在数组中
// let a = [1,2,3,4]
// delete a[1]
// console.log(a)//[ 1, <1 empty item>, 3, 4 ]

//2，toFixed()方法 --用于小数点后面保留几位0

(42).toFixed(3) //'42.000'
42..toFixed(3) //'42.000'
let num = 42; 
num.toFixed(2) //'42.00'
//42.toFixed() 报错

//3,关于0.1+0.2===0.3//false 如何解决
function numbersCloseEnoughToEqual(n1, n2) {
    return Math.abs(n1 - n2) < Number.EPSILON; // Number.EPSILON: 2.220446049250313e-16
  }
// let a = 0.1 + 0.2;
// let b = 0.3;
// numbersCloseEnoughToEqual(a, b);

//4，map不会遍历数组里的empty
var a = Array(3);//[ <3 empty items> ]
//Array(num) is as same as new Array(num), since the browser will auto add new in before of Array(num)
var b = new Array(3);//[ <3 empty items> ]
var c = Array.apply(null, { length: 3 });//[ undefined, undefined, undefined ]
var d = [undefined, undefined, undefined];//[ undefined, undefined, undefined ]
//map会给undefined保留下标，
// as the array is full of empty, map will not iterate them.

[1,2,,3].map((item,index)=>{
    // console.log(item) //1 2 3
    console.log(index) //0 1 3
})
//5，join会忽略undefined,null【上面的map不会忽略】
console.log([ undefined, undefined, undefined ].join('-'))//--
console.log([null,null,null].join('-'))//-

//6，...和Object.assign都是浅拷贝，只针对一层有深拷贝的效果
// x = [1, 2, { a: 1 }];
// y = x;
// z = [...x];
// y[0] = 2;
// (y[2].b = 2), (z[2].a = 4);
// console.log(x, y, z);
//[ 2, 2, { a: 4, b: 2 } ] [ 2, 2, { a: 4, b: 2 } ] [ 1, 2, { a: 4, b: 2 } ]
//Object.assign & ... & ...in...仅直接迭代给定对象的可枚举，非Symbol属性，不包括x.__proto__, getter and setter.
class A {
    constructor(){
        this.x = 1;
    }
    getX() {
      return this.x;
    }
  }
  a = new A();
  b = Object.assign({}, a);
  c = { ...a };
  console.log(b, c, "getX" in b, "getX" in c);
  //{ x: 1 } { x: 1 } false false
  



//7,for ... in 会循环遍历所有可枚举，非Symbol属性
//The for...of statement iterates over values that the iterable object defines to be iterated over.
//【for of不可遍历对象，因为对象没有部署iterate接口，这里的对象是指单纯的键值对形式的 对象，不包括数组】
// x = Symbol("x");
// a = [2, 3, 4, 5, 6, 7];
// a.b = 1;
// a[x] = 0;
// for (let key in a) {
// //   console.log(key);//0,1,2,3,4,5,b
// }
// for(let val of a){
//     // console.log(val) //2,3,4,5,6,7
// }

//8,
obj = { a: 1 };
x = Object.create(obj);
//创建一个新对象，使用现有对象obj作为新创建的对象x的原型。
Object.defineProperty(x, "b", {
  value: 2,
  enumerable: false
});
x.c = 3;
//x {b:2,c:3}
for (let k in x) {//for--in不包括不可枚举的，包括原型上的属性
  console.log("key: " + k);//c:3 正确答案 key:c key:a
}
//下面两个  不包括原型上的（继承过来的），包括不可枚举的
console.log(x.hasOwnProperty("a"), x.hasOwnProperty("c"));//false ,true
console.log(Object.getOwnPropertyNames(x));//b c//["b","c"]
//下面三个都是，既不包括不可枚举的，又不包括原型上的
console.log(Object.keys(x));//c //["c"]
console.log(Object.assign({}, x));//{c:3}
JSON.stringify(x);//{"b":"2","c":"3"}  正确答案："{"c":3}"

//in 既包括不可枚举的，又包括原型上的
console.log("a" in x, "c" in x, "b" in x);//true true true
