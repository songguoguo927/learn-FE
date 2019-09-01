var arr = [1,2]
console.log(arr instanceof Array);
console.log(Array.isArray(arr))

var len = arr.push(3,4,5)
console.log(arr)
// console.log(len)
var delItem = arr.pop()
console.log(arr)
// console.log(delItem)

arr.shift()
console.log(arr)
arr.unshift(9,10,11)
console.log(arr)

var arr2 = [3,7,2,9,8]
arr2.sort(compare)
function compare(a,b){
    return a-b;
}
console.log(arr2)


var stus=[
    {"name":"xjm","age":18},
    {"name":"end","age":23}
]
/*按照name，或age的值进行排序*/
stus.sort(compare("name","降序"))
function compare(key,rule){
    for(var i=0;i<arr.length;i++){}
}
/**----mySorts */
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
  