//线性查找 最佳/最差/平均情况O(n)
const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};
//二分查找  最佳/最差/平均情况O(logn) 时间复杂度的算法随着数据规模的增⼤，它的优势就越明显。
//折半查找算法要求查找表的数据是线性结构存储，还要求查找表中的顺序是由小到大或由大到小排序

//通过while循环，成 2 倍数的缩减搜索范围，也就是说需要经过 log2^n 次即可跳出循环。
function binarySearch(arr, target) {
  //1，首先设两个指针 ，分别指向最高和最低索引
  let max = arr.length - 1;
  let min = 0;
  while (min <= max) {
    //2，取中间索引 判断中间索引出的值是否与所要查找的数相同，相同则结束查找
    //查找的值小 就把min设为mid+1 ；如果mid处的值比所要查找的值大，就把max设为mid-1
    //3，然后再在新区间继续查，直到找到或者min>max找不到所要查找的值结束查找
    let mid = Math.floor((max + min) / 2);
    if (target < arr[mid]) {
      max = mid - 1;
    } else if (target > arr[mid]) {
      min = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}
