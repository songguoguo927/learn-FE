var array = [1, 2, 3,{}];
//var arr0 = []
// arr0.length = arr.length;
// arr0[0]=arr[arr.length-1]
// arr0[1]=arr[arr.length-2]
// arr0[2]=arr[arr.length-3]
// arr0[i]=arr[arr.length-i-1]
// for(var i=0;i<arr.length;i++){
//     arr0[i]=arr[arr.length-i-1]
// }
// console.log(arr0)

/**------myReverse */
Array.prototype.myReverse = function() {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    arr[i] = this[this.length - i - 1];
  }
  //加了，就是更改原数组 // this = arr;
  for(var j=0;j<this.length;j++){
    this[j] = arr[j]
  }
  // this = arr;  Invalid left-hand side in assignment
  console.log(this);
  return this;
};
array.myReverse();
// console.log(array)

/*----myPop*/
Array.prototype.myPop = function(){
    this.length -= 1;
    console.log(this)
    return this.length;
}
array.myPop()

/*----myPush*/
//array[len+0]=arguments[0]
// array[len+1]=arguments[1]
// array[len+2]=arguments[2]
Array.prototype.myPush = function() {
  // var nums = arguments.length;//实参个数，arguments是类数组对象
  // console.log(arguments)
  for (key in arguments) {
    this[this.length] = arguments[key]; //this.length随着我们给this[this.length]赋值，长度会增加
  }
  console.log(this);
  return this.length;
};
array.myPush(7, 8, 9);

/**------myShift */
/**shift从头部删除
 * arr[0] = arr[1]
 * arr[1] = arr[2]
*/
Array.prototype.myShift = function(){
  for(var i=0;i<this.length;i++){
    this[i] = this[i+1]
  }
  this.length--;//删掉最后一个undefined
  console.log(this)
  return this.length;
}
array.myShift()
/**---myUnshift*/
//unshift在头部加
/**3个参数的话 arguments.length=3
 * arr[arguments.length]=arr[0]
 * arr[arguments.length+1]=arr[1]
 * arr[arguments.length+2]=arr[2]
 * arr[0]=arguments[0]
 * arr[1]=arguments[1]
 * arr[2]=arguments[2]
 */
var arr2=[1,2,3]
Array.prototype.myUnshift=function(){
// console.log(arguments) for in 、for都可遍历它
for(let i=0;i<arguments.length;i++){
   this[arguments.length+i]=this[i]
   //console.log(this)//[1,2,3,1,2,3]
   this[i]=arguments[i]
}
 
 console.log(this)
  return this.length;
}
arr2.myUnshift(4,5,6)


/**----myConcat */
var array = [1,1,1,1]
//myConcat
/**
 * 不改变原数组
 * 如果参数是数组，需要拆开放到末尾
 * 如果参数是其他，直接放进末尾
 * 返回副本
 */
Array.prototype.myConcat=function() {
    var temp = [];
    for(let i =0;i<this.length;i++){
        temp[i] = this[i]
    }
    // console.log(arguments.length)
    // console.log(Array.isArray(arguments[0]))
    if(arguments.length==1&&(Array.isArray(arguments[0]))){
        //如果只有一个是数组的参数
        var paramsArr = arguments[0];
        for(var i =0;i<paramsArr.length;i++){
            temp.push(paramsArr[i])
        }
    }else{
        //是其他散列的参数，1，2，3
        // console.log(arguments)
        for(key in arguments){
            temp.push(arguments[key])
        }
    }
    return temp;
  }
//   var result = array.myConcat('hello','h')
  var result = array.myConcat([6,7])
  console.log(result,array)

  //key  this 谁调用就是谁
Array.prototype.sorts = function() {
  for (var i = 0; i < this.length; i++) {
    var min = i;
    for (var j = i + 1; j < this.length; j++) {
      if (this[j] < this[min]) {
        min = j;
      }
    }
    var temp = this[i];
    this[i] = this[min];
    this[min] = temp;
  }
  return this;
};

var arr2 = [5, 7, 9, 2, 4];
console.log(arr2.sorts());
