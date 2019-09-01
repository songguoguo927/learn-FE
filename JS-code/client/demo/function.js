function foo(a,b){
    console.log(this,a,b)
}
var obj = {
    a:10,
    b:20
}
foo(1,2)
foo.call(obj)
foo.apply(obj)
console.log('---------')
foo.bind(obj)  //只更改this指向，不立即执行函数
console.log('---------')
foo.bind(obj)(obj.a,obj.b)

// function bar(){
//     var a = 1;
// }
// var b = 8;
// console.log(a) //a is not define

//===函数作为参数,可以实现在一个函数中访问另一个函数中的变量

function fn(fn2){
    var msg = 'hello';
    fn2(msg)
}
fn(function(m){
    console.log('yoyoyo')
    console.log(m)  //hello
})

//==函数作为返回值
function bar(){
    return function(){
        console.log('123')
    }
}
bar()(); //123
//联想到bind() 的执行也是这样，因为它内部返回一个函数

var cat = {
    sex:'gong',
    age:2
}
var arr = [1,2,3]
arr = cat; //从这一刻开始 arr存的地址就是cat存的地址，相当于这个地址有两个名字，本质都是一个
console.log(cat)
console.log(arr)
cat.sex = 'mu'
console.log(cat)
console.log(arr)
