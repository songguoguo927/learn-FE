const _radius = new WeakMap()
const _move = new WeakMap()
class Circle{
    constructor(radius){
        _radius.set(this,radius)
        _move.set(this,function(){
            console.log('move',this) //move undefined 因为类体默认被以严格模式执行
        })
    }
    draw(){
        console.log(_radius.get(this)) //6
        _move.get(this)() //在公开方法中调用私有方法
    }
}

const c = new Circle(6)