/**
 * class6 xjm girl 18
class6 gugu boy 17
class6 qiiq girl 19
class10 coco girl 19
class20 tom boy 12
class10 red girl 15
[
    "class6":[{
        "name":"xjm",
        "sex":"girl",
        "age":"18"
    },{
        "name":"gugu",
        "sex":"boy",
        "age":"17"
    },{
        "name":"xjm",
        "sex":"girl",
        "age":"18"
    },
]
]
*/
//删除在字符串末尾的任何换行符或空格
//转成一个包含字符串的数组
//转成数组里包含数组，数组里包字符串的数组
const fs = require('fs')
var output=fs.readFileSync('data.txt','utf8')
.trim()
.split('\r\n') //win下的换行符\r\n 
.map(line =>line.split(' '))
.reduce((stus,line) =>{
    // console.log(line)
    stus[line[0]] = stus[line[0]] || []
    stus[line[0]].push({
        name:line[1],
        sex:line[2],
        age:line[3]
    })
    return stus
},{})
// console.log(output)
console.log(JSON.stringify(output,null,2))