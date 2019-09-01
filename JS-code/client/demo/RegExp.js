// var reg = /aa/g; //等价于 var reg = new RegExp('aa','g')
var reg = /hello/ig;
var reg1 = /o/g;

var str = "helloworld HEllo wo hello";
// console.log(reg)
// console.log(reg.global)
// console.log(reg.ignoreCase)
// console.log(reg.multiline)
// console.log(reg.source)  //aa

// console.log(reg.lastIndex)  //0
// console.log(reg.test(str))  //true  含有hello字符串
// console.log(reg.exec(str))  //null
// console.log(reg1.lastIndex)  //0
// console.log(reg1.exec(str))  //[ 'o', index: 4, input: 'helloworld', groups: undefined ]
// console.log(reg1.lastIndex)  //5
// console.log(reg1.exec(str)) //[ 'o', index: 6, input: 'helloworld', groups: undefined ]
// var result = reg1.exec(str)
// console.log(result.length)
// console.log(result[0])
//***** */
// var arr = []
// while(result = reg.exec(str)){
//     arr = arr.concat(result)
// }
// console.log(arr)//[ 'hello', 'HEllo', 'hello' ]

// var result = str.match(reg)
// console.log(result)//[ 'hello', 'HEllo', 'hello' ]

var result = str.replace(reg,'js')
console.log(result)//jsworld js wo js

var str = '12&34&56'
var result = str.split('&')
console.log(result) //[ '12', '34', '56' ]
// 123@qq.com
var strEmail ='1351443467@qq.com'
var emailReg = /^[0-9a-z]{3,12}@[a-z0-9]{2,10}\.[a-z]{3,5}$/gi;
console.log(strEmail.match(emailReg))