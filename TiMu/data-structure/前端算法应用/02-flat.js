//1,递归法-扁平化
function myFlat(array) {
  let len = array.length,
    result = [];

  if (len === 0) {
    return result;
  }
  for (let i = 0; i < len; i++) {
    if (Array.isArray(array[i])) {
      result = result.concat(myFlat(array[i])); //key
    } else {
      result.push(array[i]);
    }
  }

  return result;
}
let arr = [1, 2, [3, 4, [5]], 6, [7, [8, 9, [10, 11, [12]]]]];

console.log(myFlat(arr));
//2，toString
function myFlat2(arr) {
  return arr
    .toString()
    .split(",")
    .map(item => +item);
}
console.log(myFlat2(arr));
console.log(arr);

//3,reduce

function myFlat3(arr) {
  return arr.reduce(
    (pre, item) => pre.concat(Array.isArray(item) ? myFlat3(item) : item),
    []
  );
}
console.log(myFlat3(arr));
//4 rest运算符
function myFlat4(arr){
    while(arr.some(item=>Array.isArray(item))){
        arr = [].concat(...arr)
    }
    return arr
}
console.log(myFlat4(arr));
