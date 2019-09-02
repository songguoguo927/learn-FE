//上一个文件讲了使用Symbol实现私有属性还是有隐患

//这里 有一种数据类型可以确保属性是私有的，这就是WeakMap
//WeakMap 可以存储键值对 键是对象 值可以是任意类型的数据

let Stack = (function(){
    let dataStore = new WeakMap()
    //使用外层函数形成一个闭包，保护 dataStore只能在该class内部使用
    class Stack{
        constructor(){
            dataStore.set(this,[])
        }
        push(ele){
            let s = dataStore.get(this)
            s.push(ele)
        }
        pop(){
            let s = dataStore.get(this)
            let r = s.pop()
            return r;
        }
        peek(){
            let s =dataStore.get(this)
            return s[s.length-1]
        }
        isEmpty(){
            let s = dataStore.get(this)
            return s.length==0
        }
        clear(){
            dataStore.set(this,[])
        }
        size(){
            let s = dataStore.get(this)
            return s.length
        }
    }
    return Stack;
})()
//栈的应用
//1，十进制转二进制问题，以及任意进制转换的算法
//2，平衡括号问题（括号匹配）TODO
//3，解决汉诺塔问题 TODO

function tenToTwo(tenNum){
    let stack = new Stack()
    let rest;//余数 0或1
    let twoNum='';//二进制结果保留处

    while(tenNum>0){
        rest = Math.floor(tenNum%2);
        stack.push(rest)
        tenNum = Math.floor(tenNum/2)
    }
    while(!stack.isEmpty()){
        twoNum += stack.pop().toString()
    }
    return twoNum;
}
// console.log(tenToTwo(10))//1010
// 我们只需要改变一个地方。在将十进制转成二进制时，余数是0或1；
//在将十进制转成八进制时，余数是0到7之间的数；
//但是将十进制转成16进制时，余数是0到9之间的数字加上A、B、C、 D、E和F（对应10、11、12、13、14和15）。
//因此，我们需要对栈中的数字做个转化才可以

/**
 *十进制转任意进制
 * @param {*} tenNum
 * @param {*} anyNum
 * @returns 转化后的结果
 */
function tenToAnyNum(tenNum,anyNum){
    let stack = new Stack()
    let rest;//余数
    let result='';//结果保留处
    let digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'//key
    if (!(anyNum >= 2 && anyNum <= 36)) {
        return '';
      }
    while(tenNum>0){
        rest = Math.floor(tenNum%anyNum);
        stack.push(rest)
        tenNum = Math.floor(tenNum/anyNum)
    }
    while(!stack.isEmpty()){
        result += digits[stack.pop()]//key
    }
    return result;
}
console.log(tenToAnyNum(20,2))
console.log(tenToAnyNum(20,7))
console.log(tenToAnyNum(20,8))
console.log(tenToAnyNum(20,16))