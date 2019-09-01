"use strict";

/**
 * 作用域的概念 --新增块级作用域
 * 如何使用let 和 const
*/
function test() {
  // for(let i=1;i<3;i++){
  //   console.log(i);
  // }
  // console.log(i);
  var a = 1;
  // let a = 2;
}

function last() {
  var PI = 3.1415926;
  var k = {
    a: 1
  };
  k.b = 3;
  console.log(PI, k);
}

// test();
last();
