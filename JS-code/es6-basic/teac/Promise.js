// const {JSDOM} = require('jsdom');
// const {window} =new JSDOM('<!DOCTYPE html>');
// const $ = require('jquery')(window)
// console.log($.ajax)

let p = new Promise((resolve,reject)=>{
    setTimeout(resolve,5000,1)//不能写成resolve(1)
})

// let p1 = Promise.resolve(p) //参数为一个Promise对象，不做任何操作，相当于
// p.then((result)=>{console.log(result)}).catch((err)=>console.log(err))

let obj = {
    name:'xjm'//非thenable对象
}
let obj2 = {
    age:18,
    then:()=>{
        console.log("我是obj2的then方法执行结果")
    }
}
// let p1 = Promise.reject(p)
// let p1 = Promise.reject(obj) //err 我都会执行 如果是一个普通对象，会执行
// let p1 = Promise.resolve(obj) //会打印{ name: 'xjm' } 我都会执行
let p1 = Promise.resolve(obj2) //会打印我是obj2的then方法执行结果
p1.then((res)=>{console.log(res)}).catch(()=>console.log('err')).finally(()=>{console.log('我都会执行')})