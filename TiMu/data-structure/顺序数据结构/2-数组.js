//1 2 3 5 8 ...从第三个数开始，每一项都等于前两项之和
let arr = [1,2]
//求出斐波那契数列的前20个数字 20可随心情改
// arr[2]=arr[0]+arr[1]
// arr[3]=arr[1]+arr[2]
for(let i=2;i<20;i++){
    arr[i]=arr[i-2]+arr[i-1]
}
console.log(arr)

//往数组尾中添加数据
//1,添加一个 可使用arr[length]
//2,添加任意个 可使用arr.push()

//往数头添加数据
//1，添加一个  将数组的每一项往后挪
// for(let i=arr.length;i>0;i--){
//     arr[i]=arr[i-1]
// }
//留出arr[0] 可将新值赋进来
//2，使用unshift

let arr2=[1,2,3]
arr2.unshift(-2,-1) 
console.log(arr2) //[ -2, -1, 1, 2, 3 ]

//数组尾删除数据
//1，arr.length-1
//2,arr.pop()  返回删除的元素

//数组头删除一位
//1，将数组的每一项统统往前挪一位,第一个会被覆盖
for(let i=0;i<arr2.length;i++){
    arr2[i]=arr2[i+1]
}
console.log(arr2) //[ -1, 1, 2, 3, undefined  ]

//2,arr.shift  返回删除的元素

//splice(起始位置索引，删除个数，添加元素列表)
//可删除，可插入

//二维数组和多维（三维）数组
//JS只支持一维数组，并不支持矩阵（二维数组）
//但是我们可以数组套数组，实现矩阵或任意多维数组
//arr[0][1]===2 表示第一行第二列
// [[1,2,3],[4,5,6]] 外层行 内层列

//二维数组的迭代 双重for循环 外层行循环 内层列循环
//三维数组遍历 三重for循环 四维四重 依次类推


//迭代数组
//1，forEach+箭头函数
//2，for 。。。of
//3，ES6为Array增加了一个iterator属性，需要通过Symbol.iterator来访问,值是一个方法 返回一个迭代器
let numbers = [1,2,3]
let iterator = numbers[Symbol.iterator]()
console.log(iterator.next().value); // 1 
console.log(iterator.next().value); // 2 
console.log(iterator.next().value); // 3 
//然后，不断调用迭代器的next方法，就能依次得到数组中的值,
//数组中所有值都迭代完之后，iterator.next().value会返回undefined。

//4，数组的entries、keys和values方法  都返回迭代器
//entries返回包含键值对的iterator
let aEntries = numbers.entries()//得到键值对的迭代器
console.log(aEntries.next().value)//[0,1] 位置0的值为1
//》使用集合、字典、散列表等数据结构时，能够取出键值对是很有用的。这个功能会在本书后
// 面的章节中大显身手。

//keys
let aKeys = numbers.keys() //得到数组索引的迭代器
console.log(aKeys.next()) //{ value: 0, done: false }
console.log(aKeys.next()) //{ value: 1, done: false }
console.log(aKeys.next()) //{ value: 2, done: false }
console.log(aKeys.next()) //{ value: undefined, done: true }//没有可迭代的值的表现

//values
let aValues = numbers.values()//得到包含数组值的迭代器
console.log(aValues.next()) //{ value: 1, done: false }
console.log(aValues.next()) //{ value: 2, done: false }
console.log(aValues.next()) //{ value: 3, done: false }
console.log(aValues.next()) //{ value: undefined, done: true }//没有可迭代的值的表现

//Array.from方法很有用
//1，将类数组对象（含有length属性）转成数组
//Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组
Array.from([1,2,3],x=>x*x) //[1,4,9]
Array.from({length:2},()=>"jack") //["jack","jack"]

//Array.of方法根据传入的参数创建一个新数组 弥补Array()的不足
//Array(1) //长度为1 [undefined]
//Array.of(1) //[1]
//1,复制已有的数组
let nums = Array.of(...numbers)
//和Array.from(numbers)的效果是一样的

//fill方法--用静态值填充数组
//fill(填充的值[,开始填充的索引][,填充结束的索引])

//copyWithin方法 --复制数组中的一系列元素到同一数组指定的起始位置

//排序元素
// reverse   反序
//sort 默认啥也不传的话，把元素默认成字符串进行相
// 互比较。排序  JavaScript在做字符比
// 较的时候，是根据字符对应的ASCII值来比较的。
//一般我们需要传入自己写的比较函数，在数组中都是数字
//可以这样写
arr.sort((a,b)=>a-b) //

//搜索
//indexOf
//lastIndexOf
//find和findIndex方法接收一个回调函数，搜索一个满足回调函数条件的值。
//find 返回第一个满足条件的值 没有返回undefined
//findIndex 返回这个满足条件的值在数组里的索引 没有则返回-1
//includes 数组中存在某个元素 会返回true 否则false
//includes还可以接受第二个参数 搜索起始索引

//输出数组为字符串
// toString 如果想把数组里所有元素输出为一个字符串，可以用toString方法：
// join 如果想用一个不同的分隔符（比如-）把元素隔开，可以用join方法