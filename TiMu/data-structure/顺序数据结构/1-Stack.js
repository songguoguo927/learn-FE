// 栈的特点是只能在某一端添加或删除数据，遵循先进后出的原则
/**实现功能
 *1,向栈中加数据
 *2，移除数据
 *3，获取当前栈顶的值
 *4，有多少值
 *5，判断是否为空
 * @class Stack
 */
class Stack{
    constructor(arr){
        this.top = Array.isArray(arr) ? arr.length : 0; //指向栈顶的索引
        this.dataStore = arr || [];
    }
    //入栈
    push(ele){
        this.dataStore[this.top]=ele;
        this.top += 1;
    }
    //出栈
    pop(){
        return this.dataStore[--this.top]
    }
    //返回栈顶
    peek(){
        this.dataStore[this.top-1]
    }
    getCount(){//长度
        return this.top;
    }
    isEmpty(){
        return this.getCount()===0
    }
}

//栈的应用
/**
 * 1，进制转换；2，括号匹配；3，回文检测ntn 12345654321
*/
/**
 * 十进制转其他进制
 * @param {要进行转换的数，10进制的数，//2进制的数，8进制的数，16进制的数} num 
 * @param {转换规则，取值有2，8，16，10} rule  
 */
function transfer(num,rule){
  let s = new Stack();
  do{
    s.push(num%rule);
    num = Math.floor(num/rule);
  }while(num>0)
  let converted = '';
  while(s.getCount()>0){
    converted = converted + s.pop();
  }
  return converted;
}
console.log(transfer(10,16))

function isOk(str){
  let s = new Stack();
  let map = {
    "(":")",
    "[":"]",
    "{":"}"
  }
  //先把括号挨个存入栈内，然后先存入的元素就为"{","[","("，
  //如果说遍历元素为“}”，“]”，“)“，就取栈顶元素与元素进行比较，若括号匹配，就把栈顶元素删除
  for(item of str){
    if(map[item]){
      s.push(item)
    }else if(item !== map[s.pop()]){
      return false;
    }
  }
  return s.getCount()===0;
}
console.log(isOk("{([])}"))//