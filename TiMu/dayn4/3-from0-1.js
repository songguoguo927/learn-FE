// forEach: 无法break，可以用try/catch中throw new Error来停止
[1, 2, 3].forEach(item => {
  // console.log(item)
  if (item > 1) {
    // throw new Error("找到一个大于1的数：",item);
  }
});

//数组乱序
console.log([1, 2, 3, 4, 5, 6].sort(() => Math.random() - 0.5));

//数组拆解[1,[2,3]]==>[1,2,3]
console.log(
  [1, 2, [3, 4]]
    .toString()  //1,2,3,4
    .split(",")  //[ '1', '2', '3', '4' ]
    .map(item => +item) //[ 1, 2, 3, 4 ]
);

var arr = [1,2,,3]
arr.b="b"
arr.fn = function () {console.log("hello")}
var arr2 = arr.slice()
arr2[0]=0
console.log(arr2,arr)

/*document的load事件和DOMContentLoaded事件之间的区别

当初始的 HTML 文档被完全加载和解析完成之后，DOMContentLoaded事件被触发，而无需等待样式表、图像和子框架的完成加载。
window的load事件仅在 DOM 和所有相关资源全部完成加载后才会触发。*/

//防抖与节流函数是一种最常用的 高频触发优化方式，能对性能有较大的帮助。

//防抖 (debounce): 将多次高频操作优化为只在最后一次执行，通常使用的场景是：用户输入，只需再输入完成后做一次输入校验即可。

//节流(throttle): 每隔一段时间后执行一次，也就是降低频率，将高频操作优化成低频操作，通常使用场景: 滚动条事件 或者 resize 事件，通常每隔 100~500 ms执行一次即可。

function throttle(method, context) {
    clearTimeout(method.tID);
    method.tID = setTimeout(function () {
        method.call(context);
    }, 1000);
}
//用法
function showTime() {
    console.log("nowDate:" + new Date().toLocaleDateString());
}

setInterval(function () {
    throttle(showTime);
}, 2000);


/*
从输入 url 到展示的过程

DNS 解析
TCP 三次握手
发送请求，分析 url，设置请求报文(头，主体)
服务器返回请求的文件 (html)
浏览器渲染
    HTML parser --> DOM Tree
        标记化算法，进行元素状态的标记
        dom 树构建
    CSS parser --> Style Tree
        解析 css 代码，生成样式树

    attachment --> Render Tree
        结合 dom树 与 style树，生成渲染树

    layout: 布局
    GPU painting: 像素绘制页面

*/
/*
跨域的解决方案
按实际使用量排序(个人理解)：
    CORS 跨域
    nginx反向代理
    WebSockets
    JSONP 只支持GET请求
    hash + iframe 只支持GET请求
    postMessage 只支持GET请求
    document.domain
*/

/*
Web安全举例

XSS(跨站脚本攻击)几种形式，防范手段，过滤哪些字符
csrf(跨站请求伪造)原理，实现，防范手段
sql注入
命令行注入
DDoS(Distributed Denial of Service) 又叫分布式拒绝服务
流量劫持
DNS劫持
HTTP劫持
服务器漏洞
*/