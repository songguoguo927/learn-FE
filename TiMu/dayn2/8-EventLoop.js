{
// setTimeout(function(){console.log(1)},0)
// console.log(2)
for(var i=0;i<5;i++){
    // console.log(3)
}
// console.log(4)
//2 5个3 4 1
}
{
    console.log(1)
    for(var i=0;i<5;i++){
        setTimeout(function(){console.log('2-'+i)},0)
    }
    console.log(3)
    // 1 3 5个2-5
}
// 每一个 JavaScript 程序都拥有唯 的事件循环，大多数代码的执行顺序是可以根据函数调用
// 械的规则执行的，而 setTimeout/setlnterval 或者不同的事件绑定（ click mousedown 等）中
// 的代码，则通过队列来执行