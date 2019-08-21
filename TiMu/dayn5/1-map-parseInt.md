# 关于JS中的进制转换

前置知识:数组，map，parseInt，进制转换规则，栈，
## 一道题
>由一个已经被讲遍掘金的面试题谈起

```js
["1","2","3"].map(parseInt)//[ 1, NaN, NaN ]
```

实际执行的的代码是：
```js
['1', '2', '3'].map((item, index) => {
    //执行的过程中把index传给了parseInt的第二个参数
	return parseInt(item, index)
})
```
即返回的值分别为：
```js
parseInt('1', 0) // 1  符合下面说的radix为0，JS会帮我们处理让radix为10  str是"1",则按10进制处理
parseInt('2', 1) // NaN  radix为1，不符合下面的js处理，且不在2-36之间，属于非法，故返回NaN
parseInt('3', 2) // NaN, '3'在2进制中是一个非法的值，2进制中只能存在0和1，所以最后返回了NaN
parseInt("11",4)//5  4进制的数没有包含大于三的数字 就可以
```
关于非法：非法指的是这个规则
一般2进制中，只有0，1
    8进制中，只有0-7
    10进制中，只有0-9
    16进制中，只有0-9，a-f 即0-15
其他进制同理，注意：没有0，1进制。满足这个规则为合法，下面说的合法指的就是符合这个规则

题目说完了，如果不理解可以继续往下看：
## map

>先来回顾一下map方法，熟悉的话，可以快速扫一眼，当复习一下

map() 方法
作用：
参数：一个回调函数[,thisArg]
        回调函数的参数：item[,index][,array]
            item: 是callback 数组中正在处理的当前元素。
            index: 是callback 数组中正在处理的当前元素的索引。
            array: 是callback map 方法被调用的数组。
        thisArg:执行 callback 函数时使用的this 值

返回值：一个新数组，其结果是该数组中的每个元素都调用回调函数后返回的结果。
```js
var new_array = arr.map(function callback(currentValue[,index[, array]]) {
 // Return element for new_array
 }[, thisArg])
```


## parseInt--其他进制转十进制
再来讲一下什么parseInt，先讲的官方一点，随后有我的通俗OS：【因为有时候官方虽然解释的好，但不一定易懂，反正我是第一遍看的时候是一脸黑人问号】

官方：
parseInt(str[,radix])
作用：解析一个字符串参数，并返回一个指定基数的整数 (数学系统的基础)。
参数：
    str要被解析的值。如果参数不是一个字符串，则将其转换为字符串(使用toString抽象操作)。字符串开头的空白符将会被忽略。
    radix 一个介于2和36之间的整数(数学系统的基础)，表示上述字符串的基数。默认为10。
返回值：返回一个整数或NaN

通俗一点：
作用：就是将其他进制转成10进制，radix是表明其他是几进制
参数：radix为介于2-36之间的数，使用者告诉这个函数parseInt-->str是radix进制的，你给我把它转成以十进制时显示的数。
```js
parseInt("11",2) //3   把2进制的11转成10进制-->3
parseInt(100, 10); // 100  把10进制的100转成10进制的
parseInt(100, 2); // 4 -> 把2进制的100转成10进制的
parseInt(11,16);//17=1*16+1*16^0  -->把16进制的11转成10进制的
parseInt(100); // 100
```
是不是发现最后一个没带参数，也就是平时我们经常会这样使用，但是很不好的习惯。会带来比较多的麻烦

在radix为 undefined或0或没有指定或为null的情况下，
JavaScript 作如下处理：
>因为实际处理时只会处理radix在2-36的范围,所以对这些不合理的值，JS会默认帮我们处理一下radix的值；

1，帮我们把radix变成16的情况：字符串 string 以"0x"或者"0X"开头
2，帮我们把radix变成8的情况：字符串 string 以"0"开头，且其中的每个字符合法在0-7
3，帮我们把radix变成10的情况：除上述两种情况外

讲完了parseInt，发现原来它就是一种可以帮我们把其他进制的数据转成10进制的数

再看一个例子 就好理解了
```js
console.log(['10','10','10','10','10'].map(parseInt))
// [10, NaN, 2, 3, 4]
```
小总结：
通过以上的分析，你会发现不带第二个参数有多讨厌，所以建议我们自己平时使用这个方法的时候最好表明清楚自己的数是几进制，别让别人猜来又猜去

所以实际中我们想要 循环访问字符串数组 或 将字符串转化为数字 怎么搞嘞？

我知道的有四种方式供选择：
```js
['10','10','10','10','10'].map(Number)  
//或者更好理解一点的方法
['10','10','10','10','10'].map(i=>+i) // [10, 10, 10, 10, 10]
```
当然最简单就是干脆别传这个index了，免得像parseInt()这种可以接受多个参数的函数面对一大堆参数时不知所措

```js
['1','2','3'].map(n=>parseInt(n,10))//  [1, 2, 3]

['1','2','3'].map(n=>parseInt(n))// [1, 2, 3]
```

## toString--10进制转其他进制
讲完了其他进制转10进制，那如果我们想要将10进制的数转成其他进制该如何实现？

噔噔噔噔，这个时候toString就闪亮登场啦，可能我们平时用的最多的时候不带参数，但是当它带了参数，顿时闪闪发光，牛啊toString

`num.toString(radix)  //将10进制的num转成radix进制的数`


```js

var num = 25;
num.toString(2) //11001  打印结果11001
num.toString(8) //31
num.toString(16)//19
num.toString(10)//25
```
过程：比如10进制的25转成2进制的数是几？
    思路：25模2，直到num为0，即
        25%2----等于12余1
        12%2----等于6余0
        6%2-----等于3余0
        3%2-----等于1余1
        1%2-----等于0余1
        然后对应二进制数就是 11001，先余出来的数进栈，最后把数都取出来就是我们要的2进制表示的数
       
        八进制同理，把要模的数改成8
        25%8----等于3余1
        3%8-----等于0余3
        对应八进制数就是 31

>思考如何实现自己的进制转换函数？使用栈，下面有答案
## 结合栈，实现自己的进制转换





