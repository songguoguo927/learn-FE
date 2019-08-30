// 方法论：//1，问题抽象//2，数学建模//3，动态输入
/**
 *
 *[1,0,0,0,1,0,0]
 * @param {*} flowered 给定地块 展示种植情况
 * @param {*} n 再种n朵
 */
function canPlaceFlowers(arr, n) {
  //me 思路 1，先判断当前给定地块还能种几朵花x 2，再比较x和n的值
  // 难点：如何判断当前地块还能种几朵
  //010 头10 010 尾 01 010--考虑边界问题
  let max = 0 //计数器
  for(let i=0,len=arr.length;i<len-1;i++){
      if(i===0&&arr[1]===0){
          max++;
          i++
      }else if(arr[i-1]===0&&arr[i+1]===0){
          max++;
          i++
      }
  }
  return max >= n;
}
console.log(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2));
console.log(canPlaceFlowers([0, 1, 0, 0, 0,0,1, 0,1, 0,0,0,0,0,0,1,0,1], 8));
// console.log(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2));
