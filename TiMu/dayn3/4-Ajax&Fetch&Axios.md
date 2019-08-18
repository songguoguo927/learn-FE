# Ajax概念：
通过XMLHttpRequest对象 向服务器提出请求并处理响应，进行页面的局部更新

## 优点：
1.页面无刷新，用户体验优 
2.异步方式和服务器通信，响应能力迅速
3. 按需加载 最大减少数据冗余请求和响应对服务器带宽的负担
4.基于标准化的并被广泛支持的技术

## 缺点
1.不支持浏览器back按钮 
2.安全问题：暴露了与服务器交互的细节
3。 4.

## 面临问题：
1.以何种格式来减缓数据
2. 如何解决跨域问题--ajax本身不支持跨域请求，需要在服务器端处理--JSONP（一种跨域数据交互协议）

>现在 W3C 官方都不提倡 XHR 了，而是提倡 FetchAPI（虽然也不好用）Ajax 指的是XMLHttpRequest（XHR），未来现在已被 Fetch 替代;Fetch API 是基于 Promise 设计

## Ajax请求过程
### 浏览器端：
1.创建XMLHttpRequest，2.连接服务器 3.发送请求 4.服务器做出响应，接收响应数据

使用 XMLHttpRequest对象的open() 方法连接到服务器某url，设置回调函数监听返回结果、最后send() 并发出请求、传参。 

send(string) 	

将请求发送到服务器。
string：仅用于 POST 请求。如果上面open中设置请求方法为GET,则此处send(null)，若上面为Post，则send（"para1=val1 & para2=val2..."）传递参数

 POST方式：open()方法URL不携带参数，在send()中传递参数列表发送请求，并且在发送请求前需要设置请求头的Content-Type属性。

设置回调函数是通过

xmlHttp.onreadystatechange = 回调函数；
```js
POST方式：
xmlHttp.open("POST", url, true);
xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");//用post方法的话，一定要加这句设置请求头的contentType属性
xmlHttp.onreadystatechange = callback;
xmlHttp.send("参数=val &...");    //在send方法中传递参数。
```
>xmlHttp.onload= 进入onload之后，只出现了状态码4。也就是说，只有处于状态码4，请求已完成，响应已就绪的情况下，才会进入onload。只要进入onload请求中，一定是已经到4这个状态了。

Ajax请求总共有八种Callback：含义？？
onSuccess
onFailure
onUninitialized
onLoading
onLoaded  
onInteractive
onComplete
onException

2. 处理结果
服务器和浏览器的信息传递归根到底是IO流的传输，而IO流传输的是字节流，字符流。但是，简单的字符串有时不能很好的表达我们的结果。
比如，返回结果是一组对象，这时候我们就可以使用某种易于携带数据，易解析的字符串来传递结果。

在Ajax中，返回结果的类型有：普通文本，XML，JSON，HTML，然而多种结果类型最中只能用XMLHttpRequest的两个属性获取

- 1. responseText 获得字符串形式的响应数据。包括普通文本、json字符串、html字符串【目前一般这种用的居多】，普通文本可直接使用，json字符串可使用JSON.parse方法解析
- 2. responseXML  获得 XML 形式的响应数据并解析成xml的document对象。

### 服务器端

服务器端定义一个servlet进行请求处理，然后返回结果
返回结果的步骤：
1，设置响应那个编码格式
2，设置响应的Content-Type
3，拼接结果字符串
>：XML格式的结果需要用StringBuffer或StringBuilder来拼接。一定要先加XML标准定义：`<?xml version=\"1.0\" encoding=\"utf-8\"?> `

4，获取响应输出流
5,通过输出流向浏览器端传输结果字符串

# Fetch

目前要想在IE8/9/10/11中使用fetch还是有些犯难的,毕竟它连 Promise 都不支持, 更别说fetch了. 别急, 这里有polyfill(垫片). 

- es5的polyfill — es5-shim，es5-sham .
- Promise的polyfill — es6-promise .
- fetch的polyfill — fetch-ie8 .

由于IE8基于ES3, IE9支持大部分ES5, IE11支持少量ES5, 其中只有IE10对ES5支持比较完整. 因此IE8+浏览器, 建议依次装载上述垫片.

fetch方法返回一个Promise对象, 根据 Promise Api 的特性, fetch可以方便地使用then方法将各个处理逻辑串起来, 使用 Promise.resolve() 或 Promise.reject() 方法将分别返会肯定结果的Promise或否定结果的Promise, 从而调用下一个then 或者 catch. 一但then中的语句出现错误, 也将跳到catch中.

## fetch请求的响应类型
一个fetch请求的响应类型(response.type)为如下三种之一:

- basic:同域下, 响应类型为 “basic”.

- cors :同样是跨域下, 如果服务器返回了CORS响应头, 那么响应类型将为 “cors”. 此时响应头中除 Cache-Control , Content-Language , Content-Type , Expores , Last-Modified 和 Progma 之外的字段都不可见.

- opaque: 跨域下, 服务器没有返回CORS响应头, 响应类型为 “opaque”. 此时我们几乎不能查看任何有价值的信息, 比如不能查看response, status, url等等等等.

注意: 无论是同域还是跨域, 以上 fetch 请求都到达了服务器.

## mode 

fetch可以设置不同的模式使得请求有效. 模式可在fetch方法的第二个参数对象中定义.

fetch(url, {mode: 'cors'});

可定义的模式如下:
- cors: 表示同域和带有CORS响应头的跨域下可请求成功. 其他请求将被拒绝.
- no-cors: 常用于跨域请求不带CORS响应头场景, 此时响应类型为 “opaque”.
- cors-with-forced-preflight: 表示在发出请求前, 将执行preflight检查.

- same-origin: 表示同域下可请求成功; 反之, 浏览器将拒绝发送本次fetch, 同时抛出错误 “TypeError: Failed to fetch(…)”.

>除此之外, 还有两种不太常用的mode类型, 分别是 navigate , websocket , 它们是 HTML标准 中特殊的值, 这里不做详细介绍.

## header http头（请求头，响应头）

### fetch获取响应头-get方法
```js
fetch(url).then(function(response) { 
    console.log(response.headers.get('Content-Type'));
});
```
### fetch设置请求头 append方法
```js
var headers = new Headers()
headers.append("Content-Type","text/html");
fetch(url,{
  headers:headers
})
```
### 检索头  has方法
```js
var headers = new Headers({
  "Content-Type": "text/plain"
});
console.log(headers.has("Content-Type")); //true
console.log(headers.has("Content-Length")); //false
```

## fetch发送post请求，需要在fetch方法的第二个参数对象中设置
```js
var headers = new Headers();
headers.append("Content-type","application/json;charset=utf-8")
fetch(url,{
  method:'post',
  headers:headers,
  body:JSON.stringfy({
    date:"2019",
    time:"now"
  })
})
```
## cache--如何处理缓存
遵守http规范, 拥有如下几种值
- default: 表示fetch请求之前将检查下http的缓存.
- no-store: 表示fetch请求将完全忽略http缓存的存在. 这意味着请求之前将不再检查下http的缓存, 拿到响应后, 它也不会更新http缓存.
- reload: 表示fetch请求之前将忽略http缓存的存在, 但是请求拿到响应后, 它将主动更新http缓存.
- no-cache: 如果存在缓存, 那么fetch将发送一个条件查询request和一个正常的request, 拿到响应后, 它会更新http缓存.
- force-cache: 表示fetch请求不顾一切的依赖缓存, 即使缓存过期了, 它依然从缓存中读取. 除非没有任何缓存, 那么它将发送一个正常的request.
- only-if-cached: 表示fetch请求不顾一切的依赖缓存, 即使缓存过期了, 它依然从缓存中读取. 如果没有缓存, 它将抛出网络错误(该设置只在mode为”same-origin”时有效).

meOS:感觉一个比一个固执

如果fetch请求的header里包含 If-Modified-Since, If-None-Match, If-Unmodified-Since, If-Match, 或者 If-Range 之一, 且cache的值为 default , 那么fetch将自动把 cache的值设置为 "no-store" .

## async/await 为什么是它

回调地狱一直是jser的一块心病，虽然ES6提供了Promise，将嵌套平铺，但是用起来依然不便
>要说ES6也提供了generator/yield, 它将一个函数执行暂停, 保存上下文, 再次调用时恢复当时的状态.(学习可参考 Generator 函数的含义与用法 - 阮一峰的网络日志) 无论如何, 总感觉别扭. 如下摘自推库的一张图.

![]("./ajax22.png.jpg")

对比上面三种情况
1，callback简单粗暴，层层回调，回调越深，越不易理清
2，Promise将异步操作规范化，使用then连接，使用catch捕获异常，堪称完美，却美中不足--then和catch中传递的依然是回调函数，与心中同步代码不是一个套路
3，为此, ES7 提供了更标准的解决方案 — async/await. async/await 几乎没有引入新的语法, 表面上看起来, 它就和alert一样易用, 虽然它尚处于ES7的草案中, 不过这并不影响我们提前使用它.

meOS:async，await可以看作Promise的语法糖升级篇

### async await 语法

async 用于声明一个异步函数, 该函数需返回一个 Promise 对象.?

而 await 通常后接一个 Promise对象, 需等待该 Promise 对象的 resolve() 方法执行并且返回值后才能继续执行. (如果await后接的是其他对象, 便会立即执行)

await 只能用于 async 声明的函数上下文中
>await is only valid in async function

因此, async/await 天生可用于处理 fetch请求

```js
var word = '123',
    url = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+word+'&json=1&p=3';
(async ()=>{
  try {
    let res = await fetch(url, {mode: 'no-cors'});//等待fetch被resolve()后才能继续执行
    console.log(res);
  } catch(e) {
    console.log(e);
  }
})();
```

 async/await 也可处理 Promise 对象.

 ```js
 let wait = function(ts){
  return new Promise(function(resolve, reject){
    setTimeout(resolve,ts,'Copy that!');
  });
};
(async function(){
  try {
    let res = await wait(1000);//① 等待1s后返回结果
    console.log(res);
    res = await wait(1000);//② 重复执行一次
    console.log(res);
  } catch(e) {
    console.log(e);
  }
})();
//"Copy that!"
```
使用await后, 可以直接得到返回值, 不必写 .then(callback) , 也不必写 .catch(error) 了, 更可以使用 try catch 标准语法捕获错误.
由于await采用的是同步的写法, 看起来它就和alert函数一样, 可以自动阻塞上下文. 因此它可以重复执行多次, 就像上述代码②一样.

可以看到, await/async 同步阻塞式的写法解决了完全使用 ==Promise 的一大痛点——不同Promise之间共享数据问题==.Promise 需要设置上层变量从而实现数据共享, 而 await/async 就不存在这样的问题, 只需要像写alert一样书写就可以了.

### 如何弥补Fetch的不足

1、fetch-jsonp

fetch还不支持jsonp请求. 不过办法总比问题多, 万能的开源作者提供了 fetch-jsonp 库, 解决了这个问题. 

yarn add --dev fetch-jsonp

```js
fetchJsonp(url, {
  timeout: 3000,
  jsonpCallback: 'callback'
}).then(function(response) {
  console.log(response.json());
}).catch(function(e) {
  console.log(e)
});
```

2、abort timeout

由于Promise的限制, fetch 并不支持原生的abort，timeout机制, 但这并不妨碍我们使用 Promise.race() 实现一个.

## 常见坑
- Fetch 请求默认是不带 cookie 的，需要设置 fetch(url, {credentials: 'include'})
- 服务器返回 400，500 错误码时并不会 reject，只有网络错误这些导致请求不能完成时，fetch 才会被 reject。

参考文章：
[Fetch进阶指南](http://louiszhai.github.io/2016/11/02/fetch/)
[ajax已死，fetch永生](https://segmentfault.com/a/1190000003810652)