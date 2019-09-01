/**
 * Boolean() String()  Number()
 */
var a=1;
console.log(a) //1 //基本数据类型number
console.log(typeof a)  //number
console.log(a instanceof Number)  //false
console.log(a instanceof Object) //false

var b = new Number(1)
console.log(b)  //[Number:1]//Number的实例
console.log(typeof b)  //object
console.log(b instanceof Number)  //true
console.log(b instanceof Object) //true

var o = new Object(123)//Object构造函数会根据传入的值的类型返回相应基本包装类型的实例
console.log(o) //[Number: 123]