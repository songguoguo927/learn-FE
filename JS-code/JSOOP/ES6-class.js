//类创建对象的方法
class Circle  {
    constructor(radius){
        this.radius = radius;
        this.move = function(){
            console.log('move');
        }
    }
    draw(){
        console.log('draw')
    }
}

const c = new Circle(1);
/*等价于一下代码实现*/
//构造函数结合原型的方式创建对象---学名原型模式
function Circle2(radius2){
    this.radius2 = radius2;
    this.move = function(){
        console.log('move');
    }
}
Circle2.prototype.draw = function(){
    console.log('draw')
}
const c2 = new Circle2(2);

/**
 * 区别
 * Circle实例对象时前不加new会报错，Circle2不加不报错
 */