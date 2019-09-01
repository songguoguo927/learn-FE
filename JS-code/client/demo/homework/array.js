var arr = [1, 2, 3, 4];

function sum(array) {
  var sum = 0;
  array.forEach(function(item) {
    sum += item;
  });
  console.log(sum);
  return sum;
}
sum(arr)
function removeSame(array,num){
    var temp = [];
    array.forEach((item)=>temp.push(item))
    temp.forEach((item,index)=>
    {
        if(item==num){
            temp.splice(index,1)
        }
    })
    console.log(temp,array)
    return temp;
}
removeSame(arr,2)

function removeSame2(array,num){

    array.forEach((item,index)=>
    {
        if(item==num){
            arr.splice(index,1) //删除数组中特定的一项
        }
    })
    console.log(array)
    return array;
}
removeSame2(arr,2)

//合并数组，且不改变原数组
var arr2 = [5, 6, 7, 8];
// var arrN = arr.slice()
// arrN=arrN.concat(arr2)

var arrN = arr2.concat(arr);
console.log(arrN);
console.log(arr);
console.log(arr2);
