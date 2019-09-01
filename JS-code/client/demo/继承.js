// 原型链继承
// 关键点：子构造函数的原型对象是父构造函数的实例
//__proto__
// function Shape(color){
//     this.color = color;
// }
// Shape.prototype.show = function(){
//     console.log('Shape原型上的方法')
// }
// function Circle(radius){
//     this.radius = radius;
// }
// var circle1 =new Circle(1)

//让Circle找个爸爸 Shape
// 实现继承关键点：子构造函数的原型对象是父构造函数的实例
//Circle.prototype = new Shape()
// 不要忘了构造函数的指向要更改一下
//Circle.prototype.constructor = Circle;

// var shape1 = new Shape('red');
// console.dir(shape1.constructor)
// console.dir(Shape.constructor)
// console.log(shape1.color)
// console.dir(shape1.show())

//经典继承
function Shape(color){
    this.color = color;
}
Shape.prototype.show = function(){
    console.log('Shape原型上的方法')
}
function Circle(radius){
    Shape.call(this,arguments)
    this.radius = radius;
}
var circle1 =new Circle(1)

//判断Array继承谁
console.log(Array.prototype.__proto__.constructor)