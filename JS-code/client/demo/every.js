var arr = [11,5,23,7,4,1,9,1];
var result = arr.every(function(item,index,arr){ 
    return item >2; //每一项都大于2才返回true  true 执行次数--遍历完
});
console.log(result); //false
console.log(arr)
/**--------myEvery---- */
Array.prototype.myEvery =function(func,funcThis){
    //this==>arr
    for(var i=0;i<this.length;i++){
        var result = func.call(funcThis,this[i],this)
        if(!result){
            break;           
        }
    }
    return result;
}


/**------------ */
var obj = {}
var result2 = arr.some(function(item,index,arr){
    // console.log(this) //{}
    return item >2;//有一项大于2，就返回true  false-》需要遍历完才知道
},obj)
console.log(result2); //true
console.log(arr)

var result3 = arr.filter(function(item,index,arr){
    return item >2 //留下项大于2的
})
console.log(result3); //[11,5,23,7,4,9]
console.log(arr)

