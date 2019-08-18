// var flag = 1;
// async function test(flag){
//     return  await new Promise(function(resolve,reject){
//         if(flag){
//             resolve()
//         }else{
//             reject()
//         }
//     }).then(() => {console.log('resolve')}).catch(()=>{console.log('reject')})
// }
// test(flag);
// console.log('1111111')

let array = [0,1,2,3,4,5];
/*(async ()=>{
  array.forEach(function(item){
    await wait(1000);//这是错误的写法, 因await不在async声明的函数上下文中
    console.log(item);
  });
})();*/
let wait = function(ts){
    return new Promise(function(resolve, reject){
      setTimeout(resolve,ts,'Copy that!');
    });
  };
// const fn = async (item)=>{
//     await wait(1000); // 循环中的多个await同时执行，因此等待1s后将同时输出数组各个元素
//     console.log(item);
//   };
//   array.forEach(fn);

//   正确的写法如下：

(async ()=>{
  for(let i=0,len=array.length;i<len;i++){
    await wait(1000);
    console.log(array[i]);
  }
})();