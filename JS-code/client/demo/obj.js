var obj = {
    name:"xxx",
    age:12,
    _weight:100
}

console.log(Object.getOwnPropertyDescriptors(obj));

//获取属性的描述信息
// console.log(Object.getOwnPropertyDescriptor(obj,'name'));
// //修改属性的描述信息（修改属性的默认特性）
// Object.defineProperty(obj,'name',{
//     value:'terry',
//     enumerable:false //使name不被打印
// })
// console.log(obj);  

//设置访问器属性
// Object.defineProperty(obj,'weight',{
//     get:function(){
//         return this._weight-10; //修饰
//     },
//     set:function(param){
//         this._weight = param;
//     },
//     enumerable:true
// })
// Object.defineProperty(obj,'_weight',{ 
//     enumerable:false
// })
//把上面两个写在一个里头
Object.defineProperties(obj,{
    weight:{
        get:function(){
            return this._weight-10; //修饰
        },
        set:function(param){
            this._weight = param;
        },
        enumerable:true
    },
    _weight:{
        enumerable:false
    }
})
console.log(obj.weight);
console.log(obj);
// console.log(Object.getOwnPropertyDescriptor(obj,'weight'));
// console.log(Object.getOwnPropertyDescriptor(obj,'_weight'));
