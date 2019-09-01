// var arr = [];
// for(var i = 0;i<5;i++){
//     arr[i] = function(){
//         console.log(i)  //给arr里
//     }
// }
// arr[0]()  //5
// arr[2]()  //5
// arr[4]()  //5

//解决上述闭包问题---IIFE

// var arr = [];
// for(var i = 0;i<5;i++){
//     arr[i] = (function(num){return function(){console.log(num) } })(i)
// }
// arr[0]() //0
// arr[2]() //2
// arr[4]()  //4

//---let
var arr = [];
for (let i = 0; i < 5; i++) {
  arr[i] = function() {
    console.log(i); //给arr里
  };
}
// arr[0]() //0
// arr[2]() //2
// arr[4]()  //4
