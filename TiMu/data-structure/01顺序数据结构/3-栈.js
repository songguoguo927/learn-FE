//>数组是计算机科学中最常用的数据结构，我们可以在数组的任意位置上删除或添加元素，
//然而，有时候我们还需要在添加或者删除元素是有更多控制的数据结构。
//有两种数据结构类似于数组，在添加和删除元素时更为可控
//它们就是栈和队列
//先来学习
// 栈，一种具有特殊行为的数组
//1,根据栈的特点 先进后出 创建栈
//2,选择一种数据结构来保存栈里的元素-->数组
//3，给栈声明一些方法

//实现私有属性 1-利用Symbol  存在问题 ：Object.getOwnPropertySymbols方
// 法能够取到类里面声明的所有Symbols属性
let _dataStore = Symbol()
//这种方法创建了一个假的私有属性，因为ES6新增的Object.getOwnPropertySymbols方
// 法能够取到类里面声明的所有Symbols属性。-组成数组返回
class Stack{
    constructor(){
        this[_dataStore]=[]
        this.len = this[_dataStore].length;
    }
    //添加一个或几个新元素到栈顶
    push(...elements){
        this[_dataStore].push(...elements)
    }
    //移除栈顶元素 同时返回被移除的元素
    pop(){
        if(this.isEmpty()){
            console.log('当前栈中没有元素')
        }
       return this[_dataStore].pop()
    }
    //返回栈顶元素 不对栈做任何修改
    peek(){
        if(this.isEmpty()){
            console.log('当前栈中没有元素')
        }
        return this[_dataStore][this.len-1]
    }
    isEmpty(){
        return this.len==0
    }
    //移除栈中所有元素
    clear(){
        // this.len=0
        this[_dataStore] = []
    }
    //返回栈里的元素个数
    size(){
        return this.len
    }
    print(){
        if(this.isEmpty()){
            console.log('当前栈中没有元素')
        }
        console.log(this[_dataStore].toString())
    }

}
let stack1 = new Stack()
stack1.push(5)
stack1.push(8)
// stack1.push(1,2,3)
// stack1.print()
// console.log(stack1.dataStore)
let objectSymbols = Object.getOwnPropertySymbols(stack1)
console.log(objectSymbols)
console.log(objectSymbols.length)
console.log(objectSymbols[0])
stack1[objectSymbols[0]].push(7)
stack1.print()
//访问stack[objectSymbols[0]]是可以得到_dataStore的。并且，
// _dataStore属性是一个数组，可以进行任意的数组操作，比如从中间删除或添加元素。我们操作的
// 是栈，不应该出现这种行为。
