const o = new Object()
console.log(o.constructor === Object) //  --> true
console.log(Object.prototype.constructor===Object) //true
console.log(o.__proto__===Object.prototype) //true   {}
o.__proto__ = null;
console.log(o.constructor === Object)  // --> false

function fn(){
    console.log(this) //window
    const obj= {
        foo : ()=>{console.log(this)} //window
    }
    obj.foo()
}