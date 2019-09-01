// import {a,b} from './export'//  单例模式只运行一次 ，第二次export.js从缓存中取
// import wow from './export'   //不使用花括号，是默认导出的值
//上面两个可以简写为以下的
import wow,{a,b} from './export'   //不使用花括号，是默认导出的值
console.log(a)
console.log(b)
console.log(wow) //{ name: 'xjm', age: 18 }