const generateArray = require("./generateArray");
//创建一个数组列表来表示待排序和搜索得数据结构

let swap = function(array, a, b) {
  [array[a], array[b]] = [array[b], array[a]];
};
//以下排序方法都是按从小到大设计的 可以修改 --从大到小
function bubbleSort(arr) {
  let len = arr.length;
  console.time();
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  console.timeEnd();
  return arr;
}

console.log(bubbleSort(generateArray(10)));

function selectionSort(arr) {
  let len = arr.length,
    indexMin;
  console.time();
  for (let i = 0; i < len - 1; i++) {
    indexMin = i;
    for (let j = i; j < len; j++) {
      if (arr[indexMin] > arr[j]) {
        indexMin = j;
      }
    }
    if (i != indexMin) {
      swap(arr, i, indexMin);
    }
  }
  console.timeEnd();
  return arr;
}
console.log(selectionSort(generateArray(10)));

function insertionSort(arr) {
  let len = arr.length;
  console.time();
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
      } else {
        break;
      }
    }
  }
  console.timeEnd();
  return arr;
}
console.log(insertionSort(generateArray(10)));
