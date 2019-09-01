'use strict';

var set = new Set();
set.add(3);
set.add('hello');
set.add(6);
// 在set中key和value是一样的，都是value
var keys = set.keys();
console.log(keys);

var values = set.values();
console.log(values);
//迭代器对象
//1，可使用for of遍历
//2,遍历   迭代器对象有next -->指针
console.log('---------');
while (true) {
    //不知何时停止，只知道停止条件，可写while死循环
    var result = values.next();
    if (result.done == true) {
        break;
    } else {
        console.log(result);
    }
}

console.log('---------');
var entries = set.entries();
console.log(entries);
//set的遍历
set.forEach(function (value, key, set) {
    console.log(value, key, set);
});