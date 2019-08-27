//排序算法有很多种
//简单排序方法：冒泡排序、选择排序、插入排序、
//高级排序算法：归并排序、快速排序，希尔排序、
//针对排序方法也是，不要一味的追求说哪个排序算法好就用哪一个
//每一个算法都有其适应的场景，我们应当结合具体场景，具体数据特点选用不同的排序算法



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
// bubbleSort(arr);
// bubbleSort2(arr);
// bubbleSort3(arr);
//bubble 0.3
// 改进2: 传统冒泡排序中每⼀趟排序操作只能找到⼀个最⼤值或最⼩值,
//我们考虑利⽤在每趟排序中进⾏正向和反向两遍 冒泡的⽅法⼀次可以得到两个最终值(最⼤者和最⼩者) , 从⽽使排序趟数⼏乎减少了⼀半。
function bubbleSort3(arr3) {
  var low = 0;
  var high = arr.length - 1; //设置变量的初始值
  var  j;
  console.time("2.改进后冒泡排序耗时");
  while (low < high) {
    for (j = low; j < high; ++j) {
      //正向冒泡,找到最⼤者
      if (arr[j] > arr[j + 1]) {
        [arr[j],arr[j + 1]]=[arr[j + 1],arr[j]]
      }
    }
    --high; //修改high值, 前移⼀位
    for (j = high; j > low; --j) {
      //反向冒泡,找到最⼩者
      if (arr[j] < arr[j - 1]) {
        [arr[j],arr[j + 1]]=[arr[j + 1],arr[j]]
      }
    }
    ++low; //修改low值,后移⼀位
  }
  console.timeEnd("2.改进后冒泡排序耗时");
  console.log(arr3);
  return arr3;
}

//选择排序 遍历自身以后的元素，最小的元素和自己调换位置(原址比较排序法)
///嵌套了两层循环 时间复杂度也是O(n^2)，
function selectSort(arr) {
  var len = arr.length;
  for(let i = 0 ;i < len - 1; i++) {
      for(let j = i+1 ; j<len; j++) {
          if(arr[j] < arr[i]) {
              [arr[i],arr[j]] = [arr[j],arr[i]];
          }
      }
  }
  console.log(arr)
  return arr
}

selectSort(arr)

// 插入排序: 即将元素插入到已排序好的数组中
// 插入排序是最接近生活的排序，因为我们打牌时就差不多是采用的这种排序方法

function insertSort(arr) {
for(let i = 1; i < arr.length; i++) {  //外循环从1开始，默认arr[0]是有序段
    for(let j = i; j > 0; j--) {  //j = i,将arr[j]依次插入有序段中
        if(arr[j] < arr[j-1]) {
            [arr[j],arr[j-1]] = [arr[j-1],arr[j]];
        } else {
            break;
        }
    }
}
return arr;
}
//插入排序比一般的高级排序算法--快排，堆排性能要差，但是还是具有以下优点
//1、实现起来简单 理解起来不是很复杂
//2、对于较小的数据集而言比较高效
//3、相对于其他复杂度为O(n^2)的排序算法-冒泡，选择而言更加快速
//4、稳定，及时

// 到目前为止，已经介绍了三种排序方法，包括冒泡排序、选择排序和插入排序。
//这三种排序方法的时间复杂度都为O(n^2)，其中冒泡排序实现最简单，性能最差，选择排序比冒泡排序稍好，但是还不够，插入排序是这三者中表现最好的，对于小数据集而言效率较高。这些原因导致三者的实用性并不高，都是最基本的简单排序方法，多用于教学，很难用于实际中，从这节开始介绍更加高级的排序算法