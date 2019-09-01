/**
 * map filter reject find都是列表转换（将列表转换成其他内容）
 * map 获取一个数组，并将其转换为相同长度的数组，但每个单独的项目都转变了
 * filter 将一个数组转换为长度更小的数组，留下符合条件的
 * reject 将一个数组转换为长度更小的数组，留下不符合条件的
 * find 与filter做同样的事情，但只返回第一个项目，这样可以系那个数组转换成单个项目
 * 
 * reduce 是列表转换的多工具。可用于任何列表的转换，是超级列表转换
 */

 var orders = [
     {amount:250},
     {amount:400},
     {amount:100},
     {amount:325},
 ]

 var totalMount = orders.reduce(function(sum,order){
     console.log(sum,order)
    return sum+order.amount
 },0)
 /*var totalMount = 0;
 for(var i=0;i<orders.length;i++){
     totalMount += orders[i].amount
 }*/
 console.log(totalMount)