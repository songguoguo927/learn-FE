HEAD: 请求资源的头部信息, 并且这些头部与 HTTP GET 方法请求时返回的一致. 该请求方法的一个使用场景是在下载一个大文件前先获取其大小再决定是否要下载, 以此可以节约带宽资源

数据类型不同：GET只允许 ASCII 字符，而POST无限制
GET无害： 刷新、后退等浏览器操作GET请求是无害的，POST可能重复提交表单
特性不同：GET是安全（这里的安全是指只读特性，就是使用这个方法不会引起服务器状态变化）且幂等（幂等的概念是指同一个请求方法执行多次和仅执行一次的效果完全相同），而POST是非安全非幂等


## PUT 和POST方法的区别是:
PUT方法是幂等的：连续调用一次或者多次的效果相同（无副作用），而POST方法是非幂等的。
>举个例子，我们在开发一个博客系统，当我们要创建一篇文章的时候往往用POST https://www.jianshu.com/articles，这个请求的语义是，在articles的资源集合下创建一篇新的文章，如果我们多次提交这个请求会创建多个文章，这是非幂等的。

>而PUT https://www.jianshu.com/articles/820357430的语义是更新对应文章下的资源（比如修改作者名称等），这个URI指向的就是单一资源，而且是幂等的，比如你把『刘德华』修改成『蔡徐坤』，提交多少次都是修改成『蔡徐坤』


除此之外还有一个区别，通常情况下，PUT的URI指向是具体单一资源，而POST可以指向资源集合。

>ps: 『POST表示创建资源，PUT表示更新资源』这种说法是错误的，两个都能创建资源，根本区别就在于幂等性

PUT和PATCH都是给服务器发送修改资源，有什么区别？

直接覆盖资源的修改方式应该用put，但是你觉得每次都带有这么多无用的信息，那么可以发送PATCH

PUT和PATCH都是更新资源，而PATCH用来对已知资源进行局部更新。
---
HTTP协议原理-实践video


## 经典五层模型

应用层--http ftp
    为应用软件提供了很多服务
    构建于TCP协议之上
    屏蔽网络传输相关细节
传输层---TCP/IP UDP
    向用户提供可靠的端到端服务
    向高层屏蔽了下层数据通信的细节
网络层---为数据在结点之间传输创建逻辑链路
数据链路层---在通信的实体间建立数据链路链接
物理层---主要作用：定义物理设备如何传输数据

## HTTP协议发展的历史
HTTP/0.9
    只有一个GET命令
    没有HEADER等描述数据的信息
    服务器发送完毕，就关闭TCP连接

注意：此处连接和http请求是不一样的，在同一个TCP连接中可以发送多个http请求-》http/1.1可以这样做
某一个http请求一定是在一个TCP连接中进行发送的

HTTP/1.0
    增加了很多命令-如POST，PUT，HEAD
    增加了status code和header
    多字符集支持，多部分发送，全选，缓存

HTTP/1.1
>基于HTTP1.0,增加了一些功能优化网络连接的过程
    1、增加持久连接--不同于HTTP/0.9 1.0的时候一个http请求完就关闭TCP连接
        有助于提升性能，因为建立一个TCP连接需要3次握手，等等操作，消耗，延迟很高
    2、pipeline
    在同一个TCP连接中可以发送多个http请求，但是串行
    但服务端对请求结果的处理返回也是按顺序的（串行），造成一个问题，当后面的结果处理的快，还是要等待前一个慢的被处理完，这部分时间的消耗在串行/并行差异就体现出来了---http/2会对这部分进行优化
>HTTP2优化服务端对请求结果的处理返回，串行
    3、增加host和其他一些命令
        物理服务器上的可以同时跑多个软件服务（node服务，java服务），通过host字段判断确定到底是哪个服务；提高物理服务的使用效率
HTTP2
>主要解决一些HTTP1.1中性能底下的部分
    1、所有数据以二进制传输，之前HTTP1.1通过字符串
    数据分片的方式----以帧的方式---》
    2、同一个连接里发送多个请求不再需要按照顺序来
    ---并行，提高传输效率
    3、头信息压缩
    4、推送--服务端可以主动给客户端发送资源内容
    并行传输HTML，CSS，JS文件
    --等提高效率的功能

## TCP连接和HTTP的关系
HTTP只有请求和响应的概念，它们都是数据包，基于建立TCP连接通道进行数据包传输

## HTTP三次握手
三次握手时序图
客户端 发送一个我想创建一个连接的数据包 给服务端
服务端 返回一个 好我给你开了啊
客户端说，好哦我知道你开了

建立三次握手目的：规避网络传输过程中延时导致的一些服务器开销

## URI 包含URL URN
Uniform Resource Identifier /统一资源标志符
    用来唯一标识互联网上的信息资源
Uniform Resource Locator/统一资源定位器
不止只有http开头的可以叫url，比如还有ftp吖
URN永久统一资源定位符

 解决即便搬了网站url仍能定位到--即在资源移动之后还能被找到

 目前还没有非常成熟的使用方案
 ## HTTP报文格式
 请求报文：
 首行: GET /test/hi-here.txt HTTP/1.0-协议版本
 请求头：
    Accept:
    Accept-language:
 空行

 响应报文：
 首行：HTTP/1.0 200 OK--描述状态码的含义
 首部：Content-type:text/plain
 Content-length:19
空行
主体：
Hi

## HTTP方法
用来定义对于资源的操作
GET POST DELETE 。。。
从定义上讲各自有语义
 >语义用来规范，具体操作你不想遵循语义它也不会限制你，但建议遵守

## HTTP CODE 状态码

定义服务器请求的处理结果
各个区间的CODE有各自的语义
好的HTTP服务可以通过CODE判断结果

>知道了解就行

## nodejs创建一个最简单的web服务

curl 在命令行使用，帮助我们很好的分析发送请求与请求响应的一个报文
>gitBash自带集成
尝试在gitBash分别输入以下命令观察结果
curl baidu.com
curl www.baidu.com
curl -v www.baidu.com  更详细比上面详细

## CORS跨域请求的限制与解决
1、
response.writeHead(200,{
    'Access-Control-Allow-Origin':'*';
    //*表示任何域名都可以访问这个服务，但是这是不安全的，可以将其设置为特定的域名，也可以根据请求的url来进行判断，然后写入
})

浏览器跨域限制，实际上请求发送了，也响应了，只不过中间被浏览器插了一道，忽略响应内容，并给你报错

2、JSONP

利用link、img、script的src可以进行跨域

## CORS跨域限制以及预请求验证
>保证安全
允许方法 GET HEAD POST
使用其他方法需要预请求

允许Content-Type：
text/plain
multipart/form-data
application/x-www.form-urlencoded
使用其他需要预请求

请求头限制

预请求：对跨域请求的一个预请求，Request Method为OPTIONS
'Access-Control-Allow-Headers':'x-xx',
'Access-Control-Allow-Methods':'DELETE,PUT',
'Access-Control-Max-Age':'1000'
//最长时间：多少秒之内允许跨域请求而不需要进行预请求--即直接发送正式请求

## 缓存 Cache-Control  
特性
1、可缓存性--指定哪些地方可以进行缓存
    public---->http请求返回的内容经过的任何地方（中间代理服务器，客户端浏览器等），都可以进行缓存
    private--->只有发起请求的这个浏览器可以进行缓存
    no-cache-->（本地可以进行缓存但要进行缓存验证）任何一个结点都不进行缓存
2、到期--缓存到期时间
    max-age=<seconds> 设置某一部分的缓存内容多少秒之后过期，过期之后会再次发送请求给服务端请求新的内容；过期时间之内不会再发送请求给服务器，而是直接从缓存中取资源
    >但一般有一种情况，就是服务端的内容发生改变而因为路径没变导致仍然使用的是缓存的内容，如何及时更新到客户端呢？目前业界大多数的解决方案是在打包文件的时候，根据文件的内容生成对应的hash码，给文件名加上这一串码

    s-maxage=<seconds> 会代替max-age，但只有在代理服务器内才会生效，含义类似上面
    max-stale=<seconds> 在发起请求方（服务端返回内容时）主动带的请求头，代表即便缓存已经在max-age内过期，只要在max-stale时间内，仍使用过期的缓存的内容，不需要去获取新的内容，一般在浏览器用不到，浏览器使用的都是返回的内容

3、重新验证
must-revalidate
proxy-revalidate  用在缓存服务器

其他
no-store--本地和代理服务器都是不可以进行缓存，永远都要去服务端获取新的内容；忽略任何缓存验证信息
no-transform 禁止（有想法的）代理服务器随意更改压缩返回的内容

>注意，以上只是规范，不强制
'Cache-Control':'max-age=200,public'
逗号分隔，同值覆盖，不同值共同起作用

## 资源验证 Last-Modified和Etag--一般服务端设置

浏览器-》 本地缓存 -》代理缓存 -》源服务器

Last-Modified  上次修改时间
配合If-Modified-Since或者If-Unmodified-Since使用（浏览器再次发送请求携带，）

对比上次修改时间来验证资源是否需要更新

Etag    数据签名
    通过数据签名 进行验证，更为严格
    对资源的内容进行hash计算 得到唯一值，作为资源签名
    配合If-Match或者If-Non-Match使用
对比资源的签名判断是否使用缓存

服务端返回code 304 告诉浏览器可以使用缓存中的内容，忽略服务端的返回body内容

chrome中disable cache勾上会帮我们忽略设置的验证头信息，直接取服务端的最新内容

## Cookie Session
Cookie是在服务端返回数据的时候，**通过Set-Cookie**这个header**设置**给浏览器，并在浏览器当中保存的一个内容。当**下一次**浏览器再发送**请求**的时候，**会自动带上**这个cookie

键值对形式

max-age设置时间多长 expires设置到什么时间点
>都是设置过期时间
Secure只有在https的时候发送
HttpOnly 禁止js访问cookie
无法通过document.cookie访问

不能跨域设置cookie
domain 设置二级域名可读取一级域名下的cookie

hostadmin

cookie保存session,但不一定要由cookie实现，反正他俩不是一个概念

## 长连接
Connection：Keep-Alive  默认就有
            close 代表完成一个请求就关闭TCP连接
服务端可以设置keep-alive的时间
>chrome允许并发6个connection id

信道复用  同域下只使用一个TCP连接  降低开销，提升速度

HTTP2服务给我们带来的好处


## 数据协商

分类

请求
Accept 
Accept-Encoding
Accept-Language
    q权重
user-Agent

返回
Content-Type  实际返回内容的类型
Content-Encoding  编码压缩方式
Content-Language

和上面的3个对应

zlib

## Redirect
```js
if(req.url==='/'){
    res.writeHead(302, {//302-->200 不行
    'Location':'/new'     
    });
    res.end('')
}
if(req.url==='/new'){
    res.writeHead(200, {
    'Content-Type':'text/html'     
    });
    res.end('<h1>hello</h1>')
}

```
区别：
302--临时跳转
    /
    /new
    再次请求
    /
    /new
301--永久跳转--慎重，使用后不可控
    /
    /new
    再次请求，直接告诉浏览器，下次再遇到这个路径，你直接变更，不需要和服务器打招呼
    /new

## CSP
Content-Security-Policy内容安全策略
>主动屏蔽不安全的内容请求
作用

限制资源获取
报告资源获取越权

限制方式

default-src限制全局
制定限制类型
script-src

```js
res.writeHead(200, {
    'Content-Type':'text/html' ,
    'Content-Security-Policy':'default-src http: https:'    
    });
```
Content-Security-Policy-Report-Only

详细信息查看：mdn csp

## Nginx安装和基础代理配置

一个单纯的HTTP服务器

代理

在http明文传输的过程中所有的东西都是不可靠的

 缓存

 proxy_cache_path 配置缓存的存储路径
 proxy_cache_path levels=1:2 keys_zone=my_cache:10m;

 server{
     location / {
         proxy_cache my_cache
     }
 }
 代理缓存的意义，换了一个浏览器仍能很快的加载出来？

 Vary  根据头是否相同返回内容


 ## HTTPS
 HTTP+Security

 HTTP都是明文传输

 HTTPS
 加密

 私钥--只放在服务器上
 公钥
 >握手时传输

 首先客户端发送一个随机数，和加密套件给服务端

 服务端从中选取一个加密套件  生成一个随机数 返回随机数，加密套件名 加密证书

 ## 如何在nginx中部署一个https服务

 证书生成命令

 https默认使用端口443

 访问https://test.com

 ## HTTP2优势

 信道复用

 分帧传输 每一帧都有上下文联系  所以不一定要按顺序
 >在同一个TCP连接上可以去并发的发送多个http请求

 Server Push 推送

 ### 在nginx中配置http2

 和https一起用

chrome://net.internals