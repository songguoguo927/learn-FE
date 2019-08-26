//排序算法有很多种,最具代表性的⼏种算法：
//冒泡排序、希尔排序、归并排序、快速排序，
//针对排序方法也是，不要一味的追求说哪个排序算法好就用哪一个
//每一个算法都有其适应的场景，我们应当结合具体场景，具体数据特点选用不同的排序算法

//归并排序 O(nlogn)  采用分治法 最佳情况：T(n) = O(n)；最差/平均情况：T(n) = O(nlogn)
//归并排序是⼀种稳定的排序⽅法。将已有序的⼦序列合并，得到完全有序的序列；
//即先使每个⼦序列有序，再使⼦序列段间有序。将两个有序表合并成⼀个有序表，称为2-路归并。

//算法描述如下：
//1. 把⻓度为n的输⼊序列分成两个⻓度为n/2的⼦序列；
// 2. 对这两个⼦序列分别采⽤归并排序；
// 3. 将两个排序好的⼦序列合并成⼀个最终的排序序列。
const mergeSort = array => {
  const len = array.length;
  if (len < 2) {
    return len;
  }
  const mid = Math.floor(len / 2);
  const first = array.slice(0, mid);
  const last = array.slice(mid);
  return merge(mergeSort(first), mergeSort(last));
};

function merge(left, right) {
  var result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  return result;
}

//冒泡排序 O(n^2) 存在双重排序
//实现思路:
//1. ⽐较相邻的元素。如果第⼀个⽐第⼆个⼤，就交换他们两个。
//2. 对每⼀对相邻元素作同样的⼯作，从开始第⼀对到结尾的最后⼀对。这步做完后，最后的元素会是最⼤的数。
//3. 针对所有的元素重复以上的步骤，除了最后⼀个。
//4. 持续每次对越来越少的元素重复上⾯的步骤，直到没有任何⼀对数字需要⽐较。
//bubble 0.1
let arr = [6, 3, 9, 2, 4, 2, 39, 4324, 42, 43];
function bubbleSort(arr) {
  console.time("改进前冒泡排序耗时");
  var temp;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
        //ES6交换arr[j]和arr[j+1]
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  console.timeEnd("改进前冒泡排序耗时");
  console.log(arr);
  return arr;
}
//bubble 0.2
//改进1: 设置⼀标志性变量pos,⽤于记录每趟排序中最后⼀次进⾏交换的位置。
//由于pos位置之后的记录均已交换到位,故在进⾏下⼀趟排序时只要扫描到pos位置即可。

function bubbleSort2(arr) {
  console.time("改进后冒泡排序耗时");
  var i = arr.length - 1;
  //初始时,最后位置保持不变
  while (i > 0) {
    var pos = 0; //每趟开始时,⽆记录交换
    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        pos = j; //记录交换的位置
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
      i = pos; //为下⼀趟排序作准备
    }
    console.timeEnd("改进后冒泡排序耗时");
    console.log(arr);
    return arr;
  }
}
bubbleSort(arr);
bubbleSort2(arr);
bubbleSort3(arr);
//bubble 0.3
// 改进2: 传统冒泡排序中每⼀趟排序操作只能找到⼀个最⼤值或最⼩值,
//我们考虑利⽤在每趟排序中进⾏正向和反向两遍 冒泡的⽅法⼀次可以得到两个最终值(最⼤者和最⼩者) , 从⽽使排序趟数⼏乎减少了⼀半。
function bubbleSort3(arr3) {
  var low = 0;
  var high = arr.length - 1; //设置变量的初始值
  var tmp, j;
  console.time("2.改进后冒泡排序耗时");
  while (low < high) {
    for (j = low; j < high; ++j) {
      //正向冒泡,找到最⼤者
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
    --high; //修改high值, 前移⼀位
    for (j = high; j > low; --j) {
      //反向冒泡,找到最⼩者
      if (arr[j] < arr[j - 1]) {
        tmp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = tmp;
      }
    }
    ++low; //修改low值,后移⼀位
  }
  console.timeEnd("2.改进后冒泡排序耗时");
  console.log(arr3);
  return arr3;
}


//快速排序 最佳/平均情况：T(n) = O(nlogn) 最差情况：T(n) = O(n2)

//快排基本思想：
//通过⼀趟排序将待排记录分隔成独⽴的两部分，
//其中⼀部分记录的关键字均⽐另⼀部分的关键字⼩，
//则可分别对这两部分记录继续进⾏排序，以达到整个序列有序。

//算法描述和实现 1.从数组中选择中间⼀项作为主元；
//2.创建两个指针，左边⼀个指向数组的第⼀项，右边指向数组最后⼀项。
//移动左指针直到我们找到⼀个⽐主元⼤的元素，接着，移动右指针直到找到⼀个⽐主元⼩的元素。然后交换它们，
//重复这个过程，直到左指针超过了右指针。这个过程是的⽐主元⼩的值都排在了主元之前，⽽⽐主元⼤的值都排在了主元之后，这⼀步叫**划分操作**

//3.接着，算法对划分的小数组（比主元小的值组成的子数组，比主元大的值组成的小数组）重复上述两步，直至数组以完全排序

const quickSort = (function() {
  //默认状态下的比较函数
  function compare(a, b) {
    if (a === b) {
      return 0;
    }
    return a < b ? -1 : 1;
  }
  function swap(array, a, b) {
    [array[a], [array[b]]] = [array[b], array[a]];
  }
  //分治函数
  function partition(array, left, right) {
    //用index取中间值(主元)而非splice
    const pivot = array[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
      while (compare(array[i], pivot) === -1) {
        //移动左指针直到我们找到⼀个⽐主元⼤的元素
        i++; //即在左指针指向的数小于主元，继续向右（向主元靠近的方向）移动
      }
      while (compare(array[j], pivot) === 1) {
        //移动右指针直到我们找到⼀个⽐主元小的元素
        j--; ////即在右指针指向的数大于主元，继续向左（向主元靠近的方向）移动
      }
      if (i <= j) {
        swap(array, i, j);
        i++;
        j--;
      }
    }
    return 1;
  }
  //快排函数
  function quick(array,left,right){
      let index;
      if(array.length>1){
          index = partition(array,left,right)
          if(left<index-1){
              quick(array,index,right)
          }
          if(index<right){
              quick(array,index,right)
          }
      }
      return array;
  }

  return function quickSort(array){
      return quick(array,0 ,array.length-1)
  }
})();


//希尔排序  核心在与间隔序列的设定
//1959年Shell发明；第⼀个突破O(n^2)的排序算法；是简单插⼊排序的改进版；
//它与插⼊排序的不同之处在于，它会优先⽐较距离较远的元素。希尔排序⼜叫缩⼩增量排序