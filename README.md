# re-study-frontend-passage
>winner大神的重学前端专栏-记录一些我觉得重要的知识点
## 05 | JavaScript类型：关于类型，有哪些你不知道的细节？

### 7种类型Undefined； Null； Boolean； String; Number; Symbol;Object.

**Boolean**

Boolean 类型有两个值， true 和 false，它用于表示逻辑意义上的真和假，同样有关键字 true 和 false 来表示两个值。

**1、为什么有的编程规范要求用 void 0 代替 undefined?**

**Undefined**

Undefined类型表示未定义，它的类型只有一个值，就是undefined。（在实际编程时，我们一般不会把变量赋值为 undefined）从而保证任何变量在未赋值前都是Undefined类型，值为undefined，一般我们可以用全局变量 undefined（就是名为 undefined 的这个变量）来表达这个值，或者void运算来把任意一个表达式变成undefined值。

*ans:* 

但是呢，*因为 JavaScript 的代码undefined 是一个变量，而并非是一个关键字*，这是JavaScript 语言公认的设计失误之一，所以，我们为了避免无意中被篡改，建议使用 void 0 来获取 undefined 值。

**Null** 

Null类型也只有一个值，就是 null，它的语义表示空值，null 表示的是：“定义了但是为空”。

ps.*null 是 JavaScript 关键字*，所以在任何代码中, 都可以放心用 null 关键字来获取 null 值.

**2、字符串是否有最大长度？**

**String**

String用于表示文本数据，有最大长度2^53 - 1，这在一般开发中都是够用的，但是这个所谓最大长度，并不完全是你理解中的字符数。String的意义并非“字符串”而是字符串的UTF16编码。我们字符串的操作 charAt、charCodeAt、length 等方法针对的都是 UTF16 编码。

*ans:*

字符串的最大长度实际上是受字符串的编码长度影响。

>Note：现行的字符集国际标准，字符是以 Unicode 的方式表示的，每一个Unicode 的码点表示一个字符，理论上，Unicode 的范围是无限的。UTF 是 Unicode 的编码方式，规定了码点在计算机中的表示方法常见的有 UTF16 和 UTF8Unicode 的码点通常用 U+??? 来表示，其中 ??? 是十六进制的码点值。 0-65536（U+0000 - U+FFFF）的码点被称为基本字符区域（BMP）。

*字符串具有值类型的特征：是永远无法变更的，一旦字符串构造出来，无法用任何方式改变字符串的内容。*

对上面一句话理解敲的小栗子：
```
>var str="xjm"
<undefined
>str.slice(1)
<"jm"
>console.log(str)
 xjm
<undefined
>str.slice(0,-1)
<"xj"
>str.slice(0,1)
<"x"
```

**Number**

Number 类型表示我们通常意义上的“数字”。这个数字大致对应数学中的有理数，但在计算机中有一定的*精度限制*。 JS中的Number类型有18437736874454810627(即 2^64-2^53+3) 个值。

特殊情况：
NaN，Infinity，-infinity

ps.JS中有+0，-0，在加法类运算中没有区别，在除法中，注意除以+0得到Infinity，除以-0得到-Infinity。（检测 1/x 是 Infinity 还是 -Infinity此可以作为区分+0 和 -0 的方式）

**3、在 JavaScript 中，0.1+0.2 不能 =0.3**

`  console.log( 0.1 + 0.2 == 0.3);`//false

根据双精度浮点数的定义，Number 类型中有效的整数范围是-0x1fffffffffffff 至0x1fffffffffffff，所以 Number 无法精精确表示此范围外的整数。
同样根据浮点数的定义，非整数的 Number 类型无法用 ==(=== 也不行) 来比较。这里错误的不是结论，而是比较的方法，正确的比较方法是使用JS提供的最小精度值。

`console.log( Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON);`//true

检查等式左右两边差的绝对值是否小于最小精度，才是正确的比较浮点数的方法。

**4、ES6 新加入的 Symbol 是个什么东西？**

**Symbol**

Symbol 是 ES6 中引入的新类型，它是一切非字符串的对象 key 的集合，在 ES6 规范中，整个对象系统被用 Symbol 重塑。

-Symbol 可以具有字符串类型的描述，但是即使描述相同，Symbol 也不相等。
-如何创建Symbol类型
 
 使用全局的 Symbol 函数。例如：`    var mySymbol = Symbol("my symbol");`


**Object**

Object表示对象的意思，它是一切有形和无形物体的总称。在JS中，对象的定义是“属性的集合”。属性分为数据属性和访问器属性，二者都是 key-value 结构，key 可以是字符串或者 Symbol 类型。

-从类型的角度来介绍对象类型

==提到对象，我们必须要提到一个概念：类。
JavaScript 中的“类”不同于C++和Java中的类，在JS中“类”仅仅是运行时对象的一个私有属性(JS中无法自定义类型，JS是一门动态弱类型语言-myadd)。

==JS中的几个基本类型：Number； String； Boolean； Symbol，都在对象类型中有一个“亲戚”：

举个栗子： 3与 new Number(3) 是完全不同的值，前者是 Number 类型， 后者是对象类型。

>ps.Number、String 和 Boolean，三个构造器是两用的，当跟 new 搭配时，它们产生对象，当直接调用时，它们表示强制类型转换。
Symbol 函数比较特殊，直接用 new 调用它会抛出错误，但它仍然是 Symbol 对象的构造器。

**5、为什么给对象添加的方法能用在基本类型上？**

JavaScript 语言设计上试图模糊对象和基本类型之间的关系，举个栗子："abc"是基本类型String，但可以使用对象String的方法charAt()` cosole.log("abc".charAt(0)); //a`

甚至我们在原型上添加方法，都可以应用于基本类型,举个栗子：在 Symbol 原型上添加了 hello 方法，在任何 Symbol 类型变量都可以调用。
```
    Symbol.prototype.hello = () => console.log("hello");

    var a = Symbol("a");
    console.log(typeof a); //symbol，a 并非对象
    a.hello(); //hello，有效
```
**ans**. 运算符提供了装箱操作，它会根据基础类型构造一个临时对象，使得我们能在基础类型上调用对应对象的方法。

### 类型转换

大部分类型转换规则是非常简单的，如下表所示：

|          | Null | Undefined | Boolean(true) | Boolean(false) | Number | String | Symbol | Object |
| :------: | :------: | :------: |:------: |:------: |:------: |:------: |:------: |:------: |
| Boolean | FALSE | FALSE | -| - | 0/NaN->false | ""->false |TRUE | TRUE |
| Number | 0 | NaN |1| 0 | - | #StringToNumber  | TypeError | #拆箱转换  |
| String | "null" | "undefined" |TRUE | FALSE |#NumberToString | - | TypeError | #拆箱转换 |
| Object | TypeError | TypeError | #装箱转换 | #装箱转换 |#装箱转换 | #装箱转换 | #装箱转换 | - |

较为复杂的部分是 Number 和 String 之间的转换，以及对象跟基本类型之间的转换。



























