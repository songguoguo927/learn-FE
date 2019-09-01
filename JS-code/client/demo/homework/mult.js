/**
 * 阶乘 5 120
 * 3 6
 * num*(num-1)*(num-2)...*1
 */
// num=3
// result = 1;
// while(num>0){
//     result=num*result
//     num--;
// }
// console.log(result)

// for(var num=4;num>0;num--){
//     result = num * result
// }
// console.log(result)

// num = 5;
// do {
//   result = num * result;
//   num--;
// } while (num > 0);
// console.log(result);

function multiple(num){
    var result = 1;
    while(num>0){
        result = num*result;
        num--;
    }
    console.log(result)
    return result;
}
// multiple(3)
// multiple(4)
// multiple(5)

/*递归实现 */
function a(n){
    if(n==0 || n==1) return 1;
    return n*a(n-1)
}

//优化,以防函数改名，这样就不需要去函数内部改
function a(n){
    if(n==0||n==1) return 1;
    return n*arguments.callee(n-1);
}