// 值得注意的是，JavaScript中的Array.prototype.sort方法没有规定使用哪种排序算法，允许浏览器自定义，
//FireFox使用的是归并排序法，而Chrome使用的是快速排序法。

//---高级排序算法
//归并排序 O(nlogn)  采用**分治法**
// 分治是通过递归地将问题分解成相同或者类型相关的两个或者多个子问题，直到问题简单到足以解决
//然后将子问题的解决方案结合起来，解决原始方案的一种思想

// 最佳情况：T(n) = O(n)；最差/平均情况：T(n) = O(nlogn)

//归并排序是⼀种稳定的排序⽅法。将已有序的⼦序列合并，得到完全有序的序列；
//即先使每个⼦序列有序，再使⼦序列段间有序。将两个有序表合并成⼀个有序表，称为2-路归并。
//归并排序通过将复杂的数组分解成足够小的数组（只包含一个元素），然后通过合并两个有序数组（单元素数组可认为是有序数组）来达到综合子问题解决方案的目的。
//所以归并排序的==核心在于如何整合两个有序数组==，拆分数组只是一个辅助过程。
//算法描述如下：
//1. 把⻓度为n的输⼊序列分成两个⻓度为n/2的⼦序列；
// 2. 对这两个⼦序列分别采⽤归并排序；
// 3. 将两个排序好的⼦序列合并成⼀个最终的排序序列。
// 假设有以下数组，对其进行归并排序使其按从小到大的顺序排列：
// var arr = [8,7,6,5];
// 对其进行分解，得到两个数组：
// [8,7]和[6,5]
// 然后继续进行分解，分别再得到两个数组，直到数组只包含一个元素：
// [8]、[7]、[6]、[5]
// 开始合并数组，得到以下两个数组：
// [7,8]和[5,6]
// 继续合并，得到
// [5,6,7,8]
// 排序完成
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
  // 数组的合并函数，left是左边的有序数组，right是右边的有序数组
function merge(left, right) {
  var result = [];
  // 同时遍历左右两个数组，直到有一个指针超出范围。
  while (left.length && right.length) {
    //左边数组的第一项如果小于右边数组的第一项，那么将左边数组的当前项推入result
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) result.push(left.shift());//？
  while (right.length) result.push(right.shift());
  return result;
}
  
  // 归并排序的性能确实达到了应用级别，但是还是有些不足，
  //因为这里的merge函数新建了一个result数组来盛放合并后的数组，导致空间复杂度增加，
  //这里还可以进行优化，使得数组进行原地排序。



  //---
  //快速排序 最佳/平均情况：T(n) = O(nlogn) 最差情况：T(n) = O(n2)
  //其核心思想也是分而治之，它递归地将大数组分解为小数组，直到数组长度为1，
  //不过与归并排序的区别在于其重点在于数组的分解，而归并排序的重点在于数组的合并。
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
  

  // 快速排序相对于归并排序而言加强了分解部分的逻辑，消除了数组的合并工作
  //并且不用分配新的内存来存放数组合并结果，所以性能更加优秀，是目前最常用的排序方案。

  //知乎上看到过一个回答，代码大致如下（从小到大排序）。以下代码有利于对快排思想的理解，但是实际运用效果不太好，不如之前的代码速度快。
  function quickSort(arr) {
    // 当数组长度不大于1时，返回结果，防止callstack溢出。
    if(arr.length <= 1) return arr;
    return [
        // 递归调用quickSort，通过Array.prototype.filter方法过滤小于arr[0]的值，注意去掉了arr[0]以防止出现死循环。
        ...quickSort(arr.slice(1).filter(item => item < arr[0])),
        arr[0],
        ...quickSort(arr.slice(1).filter(item => item >= arr[0]))
    ];
}
//堆排序：堆排序也是一种很高效的排序方法，因为它把数组作为二叉树排序而得名，可以认为是归并排序的改良方案，
//它是一种原地排序方法，但是不够稳定，其时间复杂度为O(nlogn)。
//如果说快速排序是应用性最强的排序算法，那么我觉得堆排序是趣味性最强的排序方法，非常有意思。

//code 未读
// 堆排序的性能稍逊于快速排序，但是真的很有意思

//希尔排序  核心在与间隔序列的设定
//1959年Shell发明；第⼀个突破O(n^2)的排序算法；是简单插⼊排序的改进版；
//它与插⼊排序的不同之处在于，它会优先⽐较距离较远的元素。希尔排序⼜叫缩⼩增量排序
  
//code 未读
  