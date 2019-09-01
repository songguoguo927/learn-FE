class Circle {
    constructor(radius){
        this.radius = radius;
    }
    //实例方法
    draw(){
        console.log('原型上的实例方法draw')
    }
    //静态方法
    static parse(str){
        console.log('原型上的静态方法parse')
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}
const circle = Circle.parse('{"radius":"1"}');
console.log(circle);

//实际使用场景：可以用静态方法的方式创建不属于具体实例的工具函数
/**
 * 例如创建一个类似javascript中的Math对象，里面有一个abs(求绝对值）方法
*/
class Math2 {
    static abs(num){
        const result = num>=0 ? num : -num;
        return result;
    }
}
