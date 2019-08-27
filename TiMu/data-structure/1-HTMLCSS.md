HTML以及CSS篇，集中在CSS

1、说下你常用的几种布局方式
    集中往盒模型、flex布局 grid布局
2、实现水平居中的几种方法？
    块级元素margin:0 auto; 行内元素 text-align:center
3、animation和transform有没有用过，一些常见的属性说下？ 
    animation-name
    animation-duration
    animation-play-state 动画的状态，暂停/恢复
    animation-iteration-count
    animation-direction
    animation-timing-function

    rotate
    skew
    scale
    translate 平移
4、CSS实现宽度自适应100%，宽高16:9的比例的矩形。
5、如何实现左边两栏一定比例，左栏高度随右栏高度自适应？

JavaScript篇(重要)
1、变量提升
2、对闭包的理解，以及你在什么场景下会用到闭包
3、对原型与原型链的了解度，有几种方式可以实现继承，用原型实现继承有什么缺点，怎么解决？
    原型：一个见到那的对象，用于实现对象的属性继承。可以简单的理解成对象的爸爸
    在火狐和谷歌中，每个js对象都有一个__proto__的属性指向它的原型，可以通过obj.__proto__进行访问
    
    原型 === 构造函数.prototype
    let 实例 = new 构造函数()
    实例.__proto__===原型
    原型.constructor === 构造函数
    构造函数.prototype===原型
    实例.constructor === 构造函数

    原型链：由原型对象组成，每个对象都有一个__proto__属性，指向了创建该对象的构造函数的原型，__proto__将对象连接起来组成了原型链。
    原型链作用：用于实现继承和共享属性的优先的对象链

    最顶级的原型对象`Object.prototype`
4、iframe的缺点有哪些
5、Ajax的原生写法
    实例化一个XMLHttpRequest的对象
    然后open
    设置监听state的回调函数
    发送请求
6、为什么会有同源策略
7、前端处理跨域有没有遇到过，处理跨域的方式有哪几种方式去解决
    后端设置CORS JSONP nginx反向代理配置
8、怎么判断两个对象是否相等
9、代码实现一个对象的深拷贝
10、从发送一个url地址到返回页面，中间发生了什么
    首先判断重定向 再判断有无本地缓存 若无 则发起请求 建立TCP连接 服务端返回数据
    浏览器拿到数据开始解析 ...
11、工作中你做过的一些性能优化处理
    代码压缩...

ES6篇(引导篇，相对重要)

这块面试官主要是问你哪块用的比较多，你可以引导性地把面试官往你会的地方说
1、箭头函数中的this指向谁
    指向箭头函数声明时的父作用域中的this
 
2、如何实现一个promise，promise的原理，以及它的两个参数是什么
3、promise中第二个参数的reject中执行的方法和promise.catch()都是失败执行的，分别这么写有什么区别，什么情况下会两个都同时用到？
4、map和set有没有用过，如何实现一个数组去重，map数据结构有什么优点？

计算机网络篇(相对重要)

1、http、https、以及websocket的区别
2、http常见的状态码，400,401,403状态码分别代表什么？
3、协商缓存和强缓存的区别
4、计算机网络的相关协议

浏览器兼容性问题

要是兼容IE8以上以及其他各个浏览器

1、使用meta标签来调节浏览器的渲染方式，告诉浏览器用哪种内核渲染，360双核浏览器就是在ie和chrome之间来回切换，现在使用meta标签来强制使用最新的内核渲染页面

`<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">`
2、rgba不支持IE8  解决：用opacity
2.1、过渡不兼容IE8，可以用JS动画实现
2.2、background-size不支持IE8，可以用img
3、CSS3前缀
-webkit- webkit渲染引擎  chrome/safari 
-moz gecko引擎    firefox 
-ms- trident渲染引擎IE 
-o-    opeck渲染引擎 opera

。。。

框架相关知识点
1、简单阐述生命周期
2、如何实现一个自定义组件，不同组件之间如何通信的？父子组件如何通信的？
3、前端路由有没有用过，你在项目中怎么实现路由的嵌套？


---实际自我介绍要带上项目去说
---实现继承的几种方式，之间优缺点
---最了解的框架--讲讲
---身为前端你可以做什么
    参与公司项目的原型设计、界面设计和网页制作；
    负责Web前端开发工作，设计具有较高交互性和兼容性的Web用户界面;
    与后台开发工程师合作，搭建平台
    持续迭代优化产品，提升用户体验；
    参与文档编写。
---成型的可展示项目更有说服力