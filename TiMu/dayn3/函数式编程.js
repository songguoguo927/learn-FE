//1.高阶函数
//高阶函数接受一个函数作为参数，也可以传入其他参数，最后返回另一个函数。返回的函数通常会添加一些增强的特殊行为。
const add = (x,y) => x+y;
const log = func =>(...args)=>{
    console.log(...args)
    return func(...args)
}
//一个两数相加的函数在增强后先打印所有参数，再接着执行原先的逻辑：
const logAdd = log(add)

//2，柯里化
// 柯里化是函数式编程的常用技巧。
// 柯里化过程就是将多参数函数转换成单参数函数，这些单参数函数的返回值也是函数。
const addd = x => y => x+y;
const add1 = addd(1)
// 因为传入第一个参数后，第一个值被保留起来，返回的第二个函数可以多次复用。
add1(2) //3
add1(3) //4

//3,组合，。函数（和组件）可以结合产生新函数，从而提供更高级的功能与属性。

const Add = (x,y)=>x+y;
const Square = x =>x*x;
// 两个函数可以组合创建一个新函数，用于两数相加，再对结果求平方
const AddSquare = (x,y) => Square(Add(x,y))