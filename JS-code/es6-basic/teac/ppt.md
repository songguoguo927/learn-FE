## let 命令

> ES6 新增了 let 命令，用来声明变量。它的用法类似于 var，但是也存在新的特性。

1. let 所声明的变量，只在 let 命令所在的代码块内有效。适用于 for 循环

```js
{
  let a = 10;
  var b = 1;
}
a; // ReferenceError: a is not defined.
b; // 1
```

2. 不存在变量提升

```js
console.log(bar); // 报错ReferenceError
let bar = 2;
```

3. 暂时性死区
   在代码块内，使用 let 命令声明变量之前，该变量都是不可用的。

```js
var tmp = 123;
if (true) {
  tmp = "abc"; // ReferenceError
  let tmp;
}
```

4. 不允许重复声明。

```js
function () { let a = 10; let a = 1; } // 报错是也存在新的特性。
```

## 块级作用域

Let 实际上为 Javascript 新增了块级作用域。外层作用域无法读取内层作用域的变量，
内层作用域可以定义外层作用域的同名变量。

```js
let foo = 1;
{
  let foo = 2; //定义同名变量
  let bar = "one";
}
console.log(foo); //1
console.log(bar); //报错
```

块级作用域的出现，实际上使得获得广泛应用的立即执行函数表达式（IIFE）不再必要了。

## const 命令

基本用法
const 声明一个只读的常量。一旦声明，常量的值就不能改变。

```js
const PI = 3.1415;
PI = 3; // TypeError: Assignment to constant variable.
```

1. const 声明的变量不得改变值，这意味着，const 一旦声明变量，就必须立即初始化，不能留到以后赋值。

```js
const foo; // SyntaxError: Missing initializer in const declaration
```

2. 块级作用域

只在声明所在的块级作用域内有效。

3. 暂时性死区。
   在代码块内，使用 let 命令声明变量之前，该变量都是不可用的。

```js
if (true) { console.log(MAX); // ReferenceError const MAX = 5; }
```

4. 不允许重复声明。

```js
var message = "Hello!";
let age = 25;
// 以下两行都会报错
const message = "Goodbye!";
const age = 30;
```

## 解构赋值

解构
ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。例如：
`let [a, b, c] = [1, 2, 3];`
本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。如果解构不成功，变量的值就等于 undefined。另一种情况是不完全解构，即等号左边的模式，只匹配一部分的等号右边的数组。这种情况下，解构依然可以成功。

### 数组的解构赋值

let [a, b, c] = [1, 2, 3];
Ø 不完全解构
`let [a, [b], d] = [1, [2, 3], 4]; //a = 1; b = 2; d = 4`
Ø 集合解构
`let [head, ...tail] = [1, 2, 3, 4]; //head = 1; tail = [2, 3, 4]`
Ø 默认值（当匹配值严格等于 undefined 时，默认值生效）
`let [x, y = 'b'] = ['a']; // x='a', y='b’`
Ø 默认值也可以为函数【当默认值为表达式的时候是惰性的，即没有赋值才执行，而不是先执行，再赋值时覆盖】

```js
function f() {
  console.log("aaa");
}
let [x = f()] = [1];
```

### 对象的解构赋值

Ø 对象的属性没有次序，变量必须与属性同名，才能取到正确的值

```js
let { foo, bar } = { foo: "aaa", bar: "bbb" }; // foo = "aaa"; bar ="bbb"
```

Ø 如果变量名与属性名不一致，必须写成下面这样。重命名

```js
var { foo: baz } = { foo: "aaa", bar: "bbb" }; //baz = "aaa”
```

Ø 这实际上说明，对象的解构赋值是下面形式的简写。

```js
let { foo: foo, bar: bar } = { foo: "aaa", bar: "bbb" };
```

Ø 嵌套解构

```js
let obj = { p: ["Hello", { y: "World" }] };
let {
  p: [x, { y }]
} = obj; //x = "Hello”; y = "World”
```

Ø 默认值（默认值生效的条件是，对象的属性值严格等于 undefined）
`var {x: y = 3} = {}; //y=3`

### 字符串的解构赋值

Ø 解构时，字符串被转换成了一个类似数组的对象。
`const [a, b, c, d, e] = 'hello'; //a=h;b=e;c=l;d=l;e=o`
Ø 也可以对 length 属性解构
`let {length : len} = 'hello'; //len = 5`

### 数值和布尔值解构赋值

Ø 解构时，如果等号右边是数值和布尔值，==则会先转为对象==

```js
let { toString: s } = 123; //函数 s === Number.prototype.toString true
let { toString: s } = true; //函数 s === Boolean.prototype.toString true
```

### 函数参数的解构赋值

Ø 基本语法。

```js
function add([x, y]) {
  return x + y;
}
add([1, 2]);
```

Ø 默认值

```js
function move({ x = 0, y = 0 }) {
  return [x, y];
}
move({ x: 3, y: 8 }); // [3, 8]
move({ x: 3 }); // [3, 0]
move({}); // [0, 0]
move(); //报错 Cannot destructure property `x` of 'undefined' or 'null'.
```

### 常见用途

1. 交换变量的值
   `let x = 1; let y = 2; [x, y] = [y, x];`

2. 从函数返回多个值

```js
function example() {
  return [1, 2, 3];
}
let [a, b, c] = example();
```

3. 函数参数的定义

```js
function f([x, y, z]) { ... }
f([1, 2, 3]);
```

4. 提取数据

```js
let obj = { id: 42, status: "OK", data: [867, 5309] };
let { id, status, data: number } = obj;
```

5. 输入模块的指定方法
   `const { SourceMapConsumer, SourceNode } = require("source-map");`

6. 函数参数的默认值

```js
jQuery.ajax = function (url, {
async = true, cache = true, global = true,
beforeSend = function () {},
complete = function () {},
// ... more config
}) { // ... do stuff };
```

指定参数的默认值，就避免了在函数体内部再写`var foo = config.foo || 'default foo';`这样的语句

7. 遍历map结构
```js
var map = new Map(); 
map.set('first', 'hello'); 
map.set('second', 'world'); 
for (let [key, value] of map) { 
console.log(key + " is " + value); 
}
```
<!-- 
> [..."hello"]
[ 'h', 'e', 'l', 'l', 'o' ]
> [...[1,2,3,4]]
[ 1, 2, 3, 4 ]
 -->

## 对象、函数、数组的扩展

学习目标 
 属性简写方式
 方法简写方式
 Object方法的扩展
 函数默认值
 箭头函数
 扩展运算符
 Array.from()
 Array.of()
 数组实例的find(), findIndex()
 数组实例的fill()
 数组实例的entries(),keys(), values()
 数组实例的includes()


### 对象扩展
1. 属性简写
ES6允许直接写入变量和函数，作为对象的属性和方法。这时，属性名为变量名, 属性值为变量的值。
```js
var foo = 'bar'; 
var baz = {foo}; // 等同于 var baz = {foo: foo}; 
```
2. 方法简写--【注意，这并不意味着函数可以简写，外面该怎么写函数还怎么写，这只是针对于对象里的方法】
```js
var o = { method() { return "Hello!"; } }; 
// 等同于
var o = { method: function() { return "Hello!"; } }; 
```
3 属性名表达式
ES6 允许字面量定义对象时，可以把表达式放在方括号内。
```js
let propKey = 'foo'; 
let obj = { [propKey]: true, ['a' + 'bc']: 123 };
```

4. 方法的name属性
对象里函数的name属性，返回函数名。
```JS
const person = { sayName() { console.log('hello!'); }, };
person.sayName.name // "sayName" 
```
5. Object.is(value1,value2)
同值相等，与===类似，不同之处在于：一是+0不等于-0，二是NaN等于自身。
```js
Object.is('foo', 'foo') // true 
Object.is({}, {}) // false
```

6. Object.assign(target,o1,o2…)
用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target
）。 Object.assign方法实行的是浅拷贝，而不是深拷贝。也就是说，如果源对象某个属
性的值是对象，那么目标对象拷贝得到的是这个对象的引用。具有以下作用：
- 为对象添加属性和方法
```js
Object.assign(SomeClass.prototype, { 
someMethod(arg1, arg2) { ··· }, 
anotherMethod() { ··· } 
});
```
- 克隆对象
```js
function clone(origin) { return Object.assign({}, origin); }
```
- 为属性提供默认值
```js
function processContent(options) { 
options = Object.assign({}, DEFAULTS, options); 
//...
}
```
上面代码中，DEFAULTS对象是默认值，options对象是用户ᨀ供的参数

- __proto__属性
本质上属于内部属性，指向当前对象的prototype对象，一般不直接使用。

- Object. setPrototypeOf(obj,prototype)
用来设置一个对象的prototype对象，返回参数对象本身。它是 ES6 正式推荐的设置
原型对象的方法。该方法等同如下写法：
```js
function (obj, proto) { 
obj.__proto__ = proto; 
return obj; 
}
```
- Object. getPrototypeOf(obj)
用于读取一个对象的原型对象。
#### 遍历对象的方法，返回值为一个数组
- Object.keys(obj)
返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）
属性的键名。
- Object.values(obj)
返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）
属性的键值
- Object. entries(obj)
返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）
属性的键值对数组。

### 函数参数的默认值
ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面。
function log(x, y = 'World') { 
    console.log(x, y);
}
 通常情况下，定义了默认值的参数，应该是函数的尾参数

==函数的length属性，将返回没有指定默认值的参数个数==。<u>如果遇到有默认值的参数就停止。</u>

函数的name属性打印出函数的名字

### 与解构赋值默认值结合使用
参数默认值可以与解构赋值的默认值，结合起来使用。
function foo({x, y = 5}) { 
console.log(x, y); 
}
foo({}) // undefined 5 
foo({x: 1}) // 1 5 
foo({x: 1, y: 2}) // 1 2

### rest参数
ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要
使用arguments对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入
数组中
function add(...values) { 
let sum = 0; 
for (var val of values) { 
sum += val; 
} 
return sum;
}
add(2, 5, 3) // 10

### 箭头函数
ES6 允许使用“箭头”（=>）定义函数
l 基本用法
let f = v => v;
等价于
let f = function(v) { 
return v; 
};
Ø 如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。
Ø 如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且
使用return语句返回。

#### l this
箭头函数里面没有自己的this，而是引用外层的this。
// ES6 
function foo() { setTimeout(() => { console.log('id:', this.id); }, 100); } 
// ES5 
function foo() { 
var _this = this; 
setTimeout(function () { console.log('id:', _this.id); }, 100);
} 
Ø 不能作为构造函数  this指向不明确
Ø 有内部属性arguments，不保存实参

扩展运算符
扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转
为用逗号分隔的参数序列
console.log(...[1, 2, 3]) // 1 2 3
Ø 函数的调用
function add(x, y) { return x + y; }
add(…[1,3])
Math.max(...[14, 3, 77])
Ø 将字符串转换为数组
[...'hello']

Array.from
用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（
iterable）的对象（包括ES6新增的数据结构Set和Map）
let arrayLike = { '0': 'a', '1': 'b', '2': 'c', length: 3 }; 
// ES6的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
Ø 只要是部署了Iterator接口的数据结构，Array.from都能将其转为数组。
Array.from(‘hello’) //将字符串转换为数组 [‘h’, ‘e’, ‘l’, ‘l’, ‘o’] 
let namesSet = new Set(['a', 'b']) 
Array.from(namesSet) // ['a', 'b']

Array.of()
用于将一组值，转换为数组。这个方法的主要目的，是弥补数组构造函数Array()的
不足。因为参数个数的不同，会导致Array()的行为有差异。
Array.of(3, 11, 8) // [3,11,8]
new Array(10) [] length=10

数组实例的 find() 和 findIndex()--都是迭代方法，参数为一个函数
Ø 数组实例的find方法，用于找出第一个符合条件的数组成员。它的参数是一个回调
函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，
然后返回该成员。如果没有符合条件的成员，则返回undefined 。find方法的回调
函数可以接受三个参数，依次为当前的值、当前的位置和原数组。
[1, 4, -5, 10].find((n) => n < 0) // -5 Ø 数组实例的findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组
成员的位置，如果所有成员都不符合条件，则返回-1。
[1, 5, 10, 15].findIndex(function(value, index, arr) { return value > 9; }) // 2

数组实例的fill()
fill方法使用给定值，填充一个数组。
['a', 'b', 'c'].fill(7) // [7, 7, 7] 
new Array(3).fill(7) // [7, 7, 7]

数组实例的 includes()
该方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法
类似。ES2016 引入了该方法。
[1, 2, 3].includes(2) // true 
[1, 2, 3].includes(4) // false 
[1, 2, NaN].includes(NaN) // true

数组实例的 entries()，keys()//注意与对象的构造函数的keys,entries区分开
这两个方法用于==遍历数组==。它们都返回一个遍历器对象（详见第四章中的Iterator迭
代器），是遍历器对象就可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历，
entries()是对键值对的遍历
for (let index of ['a', 'b'].keys()) { 
console.log(index); 
}
for (let [index, elem] of ['a', 'b'].entries()) {
console.log(index, elem);
}
不使用数组实例的values()方法，返回的是迭代器对象，还需继续遍历。