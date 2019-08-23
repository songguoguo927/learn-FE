var obj = {}
function fn(n,m) {console.log('say hello'+n,m)  }
// fn.call(obj,1)
//手写call
//参数第一个为要绑定的对象或者没有的话我们自定义为window全局  有事件对象，有的话，事件对象为最后一个参数
Function.prototype.myCall=function(context,...args){
    context = context || window;
    context.fn = this; //给context绑定要执行的函数fn
    return context.fn(...args)
}
// fn.myCall(obj,2)
//手写apply
Function.prototype.myApply = function(context,argsArr){
    context = context || window;
    context.fn = this; //给context绑定要执行的函数fn
    //把传进来数组的参数拆解开来
    if(Array.isArray(argsArr)){
        argsArr = argsArr || []
        return context.fn(...argsArr)
    }
    else{
        return console.log("第二个参数必须为数组")
    }
}
fn.myApply(obj,[3,1,2])
fn.myApply(obj,3,1,2)

// //手写bind
Function.prototype.myBind = function(context,...args){
     context = context || window;
    if(typeof this !== 'function'){
        throw new TypeError('被绑定的对象需要是函数')
    }
    context.fn = this; //给context绑定要执行的函数fn
    return function(...args2){
        context.fn(...args,...args2)
    }
}
// fn.myBind(obj,3)(2)
//以上所有实现可以再加点判断啊,例如调用的不是function就返回或者抛出错误啊之类的
//将类数组对象转成数组，且不更改原数组的方法
//1，ES5
// Array.prototype.slice.call(arguments[,数值])
// [].slice.call(arguments[,数值])
//2、ES6
//[...arguments]
//合并两个数组生成新的数组
//1、ES5  concat 
// concat()：数组拼接，先创建当前数组的一个副本，然后<u>将接收到的参数添加到这个副本的末尾</u>，返回副本，<u>不改变原数组。</u>
//【如果是参数是数组展开放进去，如果是单个其他的直接放到末尾】
//2、ES6 [...arr1,...arr2]