/**
 * ES6实现一个栈的功能
 * pop push count peek
 */
const _arr = new WeakMap(); //mosh _arr =>_items
class Stack{
    constructor(count = 0){
        this.count = count;
        _arr.set(this,[]) //mosh
    }
    push(str){ //mosh str=>obj
        _arr.set(this,[].push(str))
       // _arr.get(this).push(str);//mosh
        this.count++;
    }
    pop(str){//mosh str delete
        if(_arr.set(this) == []) throw "no value, can't do this"
        _arr.set(this,[].pop(str))
        this.count--;
        /**
         * if(_arr.get(this).length === 0)
         *  throw new Error('Stack is empty.');
         * return _arr.get(this).pop() 可以将_arr.get(this)存在变量arr中
         */
    }
    peek(){
        return _arr.set(this)[this.count-1]
        /**同上自己修改*/
    }
    get count(){
        //mosh  return _arr.get(this).length;
    }
}

//自我检测与批评
//get与set配套使用不熟练，单独用也不怎么熟  pop方法用法不熟。 throw用法也不熟
//明天将get set知识点复习一下 在重新做这个题，默写出来