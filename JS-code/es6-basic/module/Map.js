'use strict';

//对象转成map结构

var map = new Map();

map.set('name', 'xjm');
map.set('age', 18);
map.set('sex', 'girl');
map.set({}, '空对象');
map.set('age', 19); //key值相同会覆盖原来的值

console.log(map);
console.log(map.size);
//通过key值获取value值
console.log(map.get('age'));
//删除
console.log(map.delete('age')); //返回true 表示成功删除，
// console.log(map.clear()) //无返回值，

console.log(map);

var keys = map.keys();
console.log(keys);

var values = map.values();
console.log(values);

var entries = map.entries();
console.log(entries);
console.log('---------');
map.forEach(function (value, key, map) {
    console.log(value, key, map);
});