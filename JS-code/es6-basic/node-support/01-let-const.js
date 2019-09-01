/**
 * 作用域的概念 --新增块级作用域
 * 如何使用let 和 const
*/
function test(){
  // for(let i=1;i<3;i++){
  //   console.log(i);
  // }
  // console.log(i);
  let a = 1;
  // let a = 2;
}

function last(){
  const PI=3.1415926;
  const k={
    a:1
  }
  k.b=3;
  console.log(PI,k);
}


// test();
last();
const arr = [1, 2, 3, 4]; 
arr.forEach(function(item) { 
  const temp = item + 1; 
  console.log(temp) ;
})
/* 2 3 4 5*/
{//里面的能访问到外面的
  let a= 1;
  {
      console.log(a) //1
  }
}