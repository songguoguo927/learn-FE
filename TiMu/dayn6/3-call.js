var obj = {}
function fn(n,m) {console.log('say hello'+n,m)  }
fn.call(obj,1)

//参数第一个为要绑定的对象或者没有的话我们自定义为window全局  不考虑有事件对象，有的话，事件对象为最后一个参数
Function.prototype.myCall=function(){
    let context = [...arguments].shift() || window;
    context.fn = this; //给context绑定要执行的函数fn
    let args = [...arguments].splice(1)//从myCall的arguments过滤参数
    return context.fn(args)
}
fn.myCall(obj,2)

Function.prototype.myApply = function(){
    let context = [...arguments].shift() || window;
    context.fn = this; //给context绑定要执行的函数fn
    //把传进来数组的参数拆解开来
    let argsArr = [...arguments].splice(1)[0]
    console.log(argsArr)
    return context.fn(...argsArr)
}
fn.myApply(obj,[3,1,2])
Function.prototype.myBind = function(){
    let context = [...arguments].shift() || window;
    context.fn = this; //给context绑定要执行的函数fn
    let args1 = [...arguments].splice(1)//过滤参数
    return function(){
        let args2 = [...arguments]//过滤参数
        context.fn(...args1,...args2)
    }
}
fn.myBind(obj,3)(2)

//将类数组对象转成数组，且不更改原数组的方法
//1，ES5
// Array.prototype.slice.call(arguments)
// [].slice.call(arguments)
//2、ES6
//[...arguments]
//合并两个数组生成新的数组
//1、ES5  concat 
// concat()：数组拼接，先创建当前数组的一个副本，然后<u>将接收到的参数添加到这个副本的末尾</u>，返回副本，<u>不改变原数组。</u>
//【如果是参数是数组展开放进去，如果是单个其他的直接放到末尾】
//2、ES6 [...arr1,...arr2]