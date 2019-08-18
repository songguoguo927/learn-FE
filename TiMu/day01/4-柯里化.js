a = 2;
f = a => b => console.log(a + b); //与上述a无关

// function f(a){
//     return function(b){
//         console.log(a+b);
//     }
// }
calc = f(1); //function(b){return 1+b;}
calc(2); //？---->3
calc(1); //？----->2

// 原始的加法函数 定义
function originPlus(a, b) {
  return a + b;
}
//函数调用
originPlus(3, 4);
// 柯里化是函数式编程的常用技巧。柯里化过程就是将多参数函数转换成单参数函数，这些单
// 参数函数的返回值也是函数。

// 柯里化后的plus函数
function plus(a) {
  return function(b) {
    return a + b; //由于闭包的原因，返回的函数可以访问到父函数的参数a
  };
}
//函数调用
plus(3)(4);

// ES6写法
const plus = a => b => a + b;
