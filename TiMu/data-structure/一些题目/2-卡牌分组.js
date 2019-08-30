//关键点 1，先洗牌--排序(升序，降序无所谓)
//2，最少一组的个数为基数（大于1）其他分组元素的个数是基数的整数倍
// 则满足条件返回true

//难点：相同的数分为一组

function hasGroupSizeX(arr){
    arr.sort((a,b)=>a-b);
    let min = Number.MAX_SAFE_INTEGER;
    let dst = [] //用来保存分好组的元素
    let result = true
    
    for(let i=0,len=arr.length,tmp=[];i<il;i++){
        dst.push(arr[i])
        for(let j = i+1;j<len;j++){
            if(arr[j]===arr[i]){
                tmp.push(arr[j])
            }else{
                if(min>tmp.length){
                    min = tmp.length
                }
                //引用类型 需备份 或者dst.push([[...tmp]])
                dst.push([].concat(tmp))
                //JS高级程序设计中规定 清空数组
                tmp.length = 0;
                break;
            }
        }
    }
    //之所以使用every不使用forEach 是因为forEach不支持跳出
    dst.every(item=>{
        if(item.length%min!==0){
            result=false
            return result;
        }
    })
    return result;
}