// var reverseWords = function(s){
//     let arr = s.split(' ')
//     //对数组进行遍历，然后将每个元素进行反转
//     let result = arr.map((item)=>{
//         return item.split('').reverse().join('')
//     })
//     return result.join(' ')
// }
// module.exports = reverseWords

//更优雅
var reverseWords = function(s){
    // let arr = s.split(' ')
    //对数组进行遍历，然后将每个元素进行反转
     return  s.split(' ').map((item)=>{
        return item.split('').reverse().join('')
    }).join(' ')
    
}
module.exports = reverseWords
/**
 * 还有其他方式？
 */
// 利用String 正则表达式方法 match，唯一参数正则表达式，返回一个由匹配结果组成的数组
// s.match(/[\w']+/g) 

// 涉及知识点
// String原生方法API split match 
// Array 原生方法API map reverse join