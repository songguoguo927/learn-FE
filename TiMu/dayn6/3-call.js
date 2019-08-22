var obj = {}
function fn(n) {console.log('say hello'+n)  }
fn.call(obj,1)

//参数第一个为要绑定的对象或者没有的话我们自定义为window全局
Function.prototype.myCall=function(context){
    context = context || window;
    context.fn = this; //给context绑定要执行的函数fn
    var args = [...arguments].splice(1)//从myCall的arguments过滤参数
    return context.fn(args)
}
fn.myCall(obj,2)
// fn.call(obj,[1,2,3])

Function.prototype.myApply = function(context,argsArr){
    context = context || window;
    context.fn = this; //给context绑定要执行的函数fn

    argsArr = Array.isArray(argsArr) ? argsArr : [];
}