/** 
 * 冒泡排序算法
 * [23,4,56,232,9,100]
 *升序-思想：
 *  1.第一轮找出最大的放在最后
 *      ……232
 *  2.第二轮找出第二大的放在倒数第二个
 *      ……100，232
 *  3.第二轮找出第三大的放在倒数第三个
 *      ……88，100，232
 * ……有几个数字就走几轮
 * 内部两个数的交换,判断相邻像个数字，如果左边大于右边，则交换。
 * 第一轮：4，23，56，9，100|，232
 * 第二轮：4，23，9，56|，100，232
 * 第三轮：4，9，23|，56，100，232
 * 第四轮：4，9|，23，56，100，232
 * 第五轮：4|，9，23，56，100，232
 * 第六轮：4，9，23，56，100，232可省略
 * 
 * 优化的可能——基于有些轮是不必要的
 * 1.外层i<arr.length==》i<arr.length-1  省略最后一轮
 * 2.内层j<arr.length-1==》j<arr.length-1-i 已经排好的不再比较
*/
var arr = [23,4,56,232,9,100];
for(var i = 0; i<arr.length-1; i++){
    //i+1是第几轮
    for(var j = 0;j<arr.length-1-i;j++)
    //arr[j] arr[j+1]
    if(arr[j]>arr[j+1]){
        //swap 
        var temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp;
        // console.log('===') 看每一轮的比较中交换几次
        // console.log(j)
    }
    // console.log('第'+(i+1)+'轮数组：'+arr)
    console.log(`第${i+1}轮数组：${arr}`)
}
console.log(`最终数组：${arr}`)