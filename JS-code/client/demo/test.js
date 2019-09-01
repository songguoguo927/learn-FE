// class Coder{
//     constructor(a,b){//里面是类的参数,用constructor来进行类的参数传递
//         this.a=a;
//         this.b=b;
//     }
//     add(){
//         return this.a+this.b
//     }
// }

// let xjm2 = new Coder(3,4); //这里传的是类的参数
// console.log(xjm2.add())

[1,2,3].forEach(console.log);
/**forEach接收一个函数，并将数组中的每一个元素依次交给该函数执行
 * 执行结果
 * 1 0 [ 1, 2, 3 ]
 * 2 1 [ 1, 2, 3 ]
 * 3 2 [ 1, 2, 3 ]
 * 和下面代码执行结果一样
 */
[1,2,3].forEach(function(item,index,arr) {
    console.log(item,index,arr)
})


/**函数式编程初试--一个返回函数的函数 */
function splat(fun){
    return function(array){
        return fun.apply(null,array)
    };
}

var addArrayElements = splat(function(x,y){return x+y;})

addArrayElements([1,2]); //3

/**---*/
function unsplat(fun){
    return function(){//返回一个接受任意多个参数的函数
        return fun.call(null,this.toArray(arguments))
    };
}

var joinElement = unsplat(function(array){return array.join(' ')});

console.log(joinElement(1,2)) //"1,2"
console.log(joinElement('-','$','/','!',';'))//"- $ / ! ;"