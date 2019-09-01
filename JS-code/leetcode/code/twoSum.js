/**1,暴力解法
 * 思路，先遍历数值，将target与每次的值进行减，得到的值判断是否在剩余的数组元素中，在的话返回两个元素下标
 * 复杂度分析：时间复杂度O(n^2) 空间复杂度O(1)
 */
//优化点1，使用临时变量，将长度缓存起来，避免重复获取数组长度，当数组较大时优化效果才会比较明显。
//JavaScript 数组遍历方法的对比 https://juejin.im/post/5a3a59e7518825698e72376b
//JS几种数组遍历方式以及性能分析对比 地址https://dailc.github.io/2016/11/25/baseKnowlenge_javascript_jsarrayGoThrough
var twoSum = function(nums, target) {
  var indexArr = [];
  var len = nums.length;
  for (let i = 0; i < len; i++) {
    var restValue = target - nums[i];
    for (let j = i + 1; j < len; j++) {
      if (nums[j] == restValue) {
        indexArr.push(i,j);
      }
    }
  }
  return indexArr;
};
twoSum([3, 2, 1], 6);
