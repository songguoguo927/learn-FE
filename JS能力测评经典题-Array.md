**1，找出元素item在给定数组中的位置。**

arr.indexOf(item);

**2,数组求和**

计算给定数组arr中所有元素的总和。
循环数组，再将每个元素相加。

```
function sum(arr) {
   var s=0;
    for(var i=0;i<arr.length;i++){
       s+=arr[i];
    }
   return s;
}
```

**3，移除数组中的元素**

移除数组 arr 中的所有值与 item 相等的元素。**不要直接修改数组 arr**，结果返回新的数组。

```
function remove(arr, item) {
    var newArr = [];
    for(i=0;i<arr.length;i++){
        if(arr[i] != item){
            newArr.push(arr[i]);
        }
    }
    return newArr;
    
}
```

移除数组 arr 中的所有值与 item 相等的元素，直接在给定的 arr 数组上进行操作，并将结果返回.

```
function removeWithoutCopy(arr, item) {
    for(var i=0;i<arr.length;i++){
        if(item==arr[i]){
            arr.splice(i,1);
            i--;
        }
    }
    return arr;
}
```

**4,添加元素**

==在数组 arr **末尾添加**元素 item。**不要直接修改数组 arr**，结果返回新的数组。

```
function append(arr, item) {
    // return arr.push(item);修改了原数组
    return arr.concat([item]);
}
```

==在数组 arr **开头添加**元素 item。不要直接修改数组 arr，结果返回新的数组.

```
function prepend(arr, item) {
    return [item].concat(arr)
}
```

===在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组.

```
function insert(arr, item, index) {
    var a = arr.slice(0);//复制原数组且不改变原数组
    a.splice(index,0,item);
    return a;
}
```

**5，删除数组的最后一个元素**

删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组。
`arr.slice(0,-1)`

**6,删除数组第一个元素**

删除数组 arr 第一个元素。不要直接修改数组 arr，结果返回新的数组。
`arr.slice(1)`

**7,数组合并**

合并数组 arr1 和数组 arr2。不要直接修改数组 arr，结果返回新的数组。

```
function concat(arr1, arr2) {
var arr = arr1.concat(arr2);
    return arr;
}
```

**8，计数**

统计数组 arr 中值等于 item 的元素出现的次数

```
function count(arr, item) {
    var count = 0;
    for(var i=0;i<arr.length;i++){
       if(item == arr[i]){
        count++;
    } 
    }
    return count;    
}
```

#### freeCodeCamp

==forEach() 方法对数组的每个元素执行一次提供的函数。arr.forEach(callback[, thisArg]);

参数:
- callback

>为数组中每个元素执行的函数，该函数接收三个参数：

- currentValue

>数组中正在处理的当前元素。

- index可选

>数组中正在处理的当前元素的索引。

- array可选

>forEach() 方法正在操作的数组。

- thisArg可选

>可选参数。当执行回调函数时用作 this 的值(参考对象)。

eg:在数组 arr 中，查找值与 item 相等的元素出现的所有位置

```
function findAllOccurrences(arr, target) {
    var temp=[];
    arr.forEach(function(el,index){
       // el!=target|| temp.push(index);//运行时间：255ms 占用内存：14912k
        if(el==target){
            temp.push(index);//运行时间：158ms 占用内存：15392k
        }
    });
    return temp;
}
```

==map()方法会迭代数组中的每一个元素，并根据回调函数来处理每一个元素，最后返回一个新数组。注意，这个方法不会改变原始数组。

```
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
    // Return element for new_array
}[, thisArg])
```

eg:求二次方

```
function square(arr) {
    //map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果
        return arr.map(function(item,index,array){
        return item*item;
    });  
}
```

==reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。`arr.reduce(callback[, initialValue])`
(callback函数接收4个参数:

- accumulator

>累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或initialValue（见于下方）。

- currentValue

>数组中正在处理的元素。

- currentIndex可选

>数组中正在处理的当前元素的索引。 如果提供了initialValue，则起始索引号为0，否则为1。

- array可选

>调用reduce()的数组

》您的 callback函数的返回值分配给累计器，该返回值在数组的每个迭代中被记住，并最后成为最终的单个结果值。（返回值：函数累计处理的结果）

- initialValue|可选

>作为第一次调用 callback函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 reduce 将报错。

===filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素.

`var new_array = arr.filter(callback(element[, index[, array]])[, thisArg])`

参数解读：
- callback
用来测试数组的每个元素的函数。调用时使用参数 (element, index, array)。
返回true表示保留该元素（通过测试），false则不保留。它接受三个参数：
  - element当前在数组中处理的元素。
  - index|可选，正在处理元素在数组中的索引。
  - array|可选，调用了filter的数组。
- thisArg|可选

>执行 callback 时的用于 this 的值。

返回值：
      一个新的通过测试的元素的集合的数组，如果没有通过测试则返回空数组

==filter 方法用来迭代一个数组，并且按给出的条件过滤出符合的元素。

filter 方法传入一个回调函数，这个回调函数会携带一个参数，参数为当前迭代的项（我们叫它 val ）。

回调函数返回 true 的项会保留在数组中，返回 false 的项会被过滤出数组。

eg:数组去重

```
var arr1=[1,2,2,5,7,9,7];
var arr2=arr1.filter(function(el,index,self){
  return self.indexOf(el)===index;
 });
console.log(arr2);//[1,2,5,7,9]
```

==arr.sort([compareFunction])
- compareFunction 可选,用来指定按某种顺序进行排列的函数。如果省略，元素按照转换为的字符串的各个字符的Unicode位点进行排序。
  - firstEl,第一个用于比较的元素。
  - secondEl,第二个用于比较的元素。

返回值：
排序后的数组。请注意，数组已原地排序，并且不进行复制。

//下面的例子将展示 sort 的使用，传入的比较函数把元素按照从小到大的顺序进行排列：

```
var array = [1, 12, 21, 2];
array.sort(function(a, b) {
  return a - b;
});
```

==split 方法按指定分隔符将字符串分割为数组。

你要给 split 方法传递一个参数，这个参数将会作为一个分隔符.返回源字符串以分隔符出现位置分隔而成的一个 Array 
当字符串为空时，split（）返回一个包含一个空字符串的数组，而不是一个空数组，如果字符串和分隔符都是空字符串，则返回一个空数组。

===翻转字符串

先把字符串转化成数组，再借助数组的reverse方法翻转数组顺序，最后把数组转化成字符串。

```
function reverseString(str) {
  // 请把你的代码写在这里
  return str.split("").reverse().join("");
}
// 如果空字符串("")被用作分隔符，则字符串会在每个字符之间分割。
reverseString("hello");
```


==在句子中找出最长的单词，并返回它的长度。

```
function findLongestWord(str) {
  return str
    .split(' ')
    .map(function(el){ return el.length;})
    .reduce(function(acc, cur){ return Math.max(acc, cur);}, 0);

  /*var max=0;
  var wordList=str.split(' ');//以空格作为分隔符将字符串分割为数组
  for(var i =0;i<wordList.length;i++){
    max=wordList[i].length >max ? wordList[i].length : max;
  }
  return max;*/ 
}
findLongestWord("The quick brown fox jumped over the lazy dog");//6
```


===确保字符串的每个单词首字母都大写，其余部分小写。

```
function titleCase(str) {
  // 请把你的代码写在这里
   var wordList=str.split(' ');
  for(var i = 0;i<wordList.length;i++){
   wordList[i]= wordList[i].charAt(0).toUpperCase()+wordList[i].slice(1).toLowerCase();
  }
  return wordList.join(' ');
 
}

titleCase("I'm a little tea pot");
```

===找出多个数组中的最大数
```
function largestOfFour(arr) {
  /*思路：遍历外数组中的每一个小数组，将小数组从大到小排列，后取小数组中的第一个元素放入maxArr*/
   var maxArr = [];
   var pxhsz=arr.map(function(el){
    return el.sort(function(a,b){
       return b-a;
     });
   });
   pxhsz.map(function(el){
    maxArr.push(el[0]);
  });
  return maxArr; 
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
```

===检查字符串结尾

判断一个字符串(str)是否以指定的字符串(target)结尾。

str.substr(start[, length])
 - start开始提取字符的位置。如果为负值，则被看作 strLength + start，其中 strLength 为字符串的长度（例如，如果 start 为 -3，则被看作 strLength + (-3)）。
 - length可选。提取的字符数。

```
function confirmEnding(str, target) {
  return str.substr(-target.length) === target;
}
confirmEnding("Bastian", "n");
```

===重复输出字符串

```
function repeat(str, num) {
  //重复一个指定的字符串 num次，如果num是一个负数则返回一个空字符串
  var arr=[];
  while(num>0){
    arr.push(str);
    num--;
  }
  return arr.join('');
}
repeat("abc", 3);
```
