# re-study-frontend-passage
>winner大神的重学前端专栏-记录一些我觉得重要的知识点
## 05 | JavaScript类型：关于类型，有哪些你不知道的细节？

>### 7种类型
Undefined； Null； Boolean； String; Number; Symbol;Object.

**Boolean**
Boolean 类型有两个值， true 和 false，它用于表示逻辑意义上的真和假，同样有关键字 true 和 false 来表示两个值。

**1、为什么有的编程规范要求用 void 0 代替 undefined?**

**Undefined**类型表示未定义，它的类型只有一个值，就是undefined。（在实际编程时，我们一般不会把变量赋值为 undefined）从而保证任何变量在未赋值前都是Undefined类型，值为undefined，一般我们可以用全局变量 undefined
（就是名为 undefined 的这个变量）来表达这个值，或者void运算来把任意一个表达式变成undefined值。

**ans:** 但是呢，*因为 JavaScript 的代码undefined 是一个变量，而并非是一个关键字*，这是JavaScript 语言公认的设计失误之一，所以，我们为了避免无意中被篡改，建议使用 void 0 来获取 undefined 值。

**Null** 类型也只有一个值，就是 null，它的语义表示空值，null 表示的是：“定义了但是为空”。

ps.*null 是 JavaScript 关键字*，所以在任何代码中, 都可以放心用 null 关键字来获取 null 值.

**2、字符串是否有最大长度？**

**String**用于表示文本数据，有最大长度2^53 - 1，这在一般开发中都是够用的，但是这个所谓最大长度，并不完全是你理解中的字符数。String的意义并非“字符串”而是字符串的UTF16编码。我们字符串的操作 charAt、charCodeAt、length 等方法针对的都是 UTF16 编码。

**ans:** 字符串的最大长度实际上是受字符串的编码长度影响。

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
