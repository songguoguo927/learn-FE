// 只需要输入数组长度，即可生成一个符合长度要求的随机数组
exports.generateArray = function(length){
    let arr = Array(length);
    for(let i=0;i<length;i++){
        arr[i] = Math.ceil(Math.random()*100)
    }
    console.log(arr)
    return arr;
}
// generateArray(10)+