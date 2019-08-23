[原文](http://jdc.jd.com/archives/212552)

3.x

```jsx
import { Router, Route, browserHistory } from "react-router";

ReactDOM.render(
  <Router history={history}>
    <div className="container">
      <Route path={routePaths.INDEX} component={Index} />
    </div>
  </Router>,
  document.getElementById("app")
);
```

4.x

```jsx
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <div className="container">
      <Route path={routePaths.INDEX} component={Index} />
    </div>
  </BrowserRouter>,
  document.getElementById("app")
);
```

4.x 中采用了单代码仓库模型架构，所以里面包含了若干个相互独立的包，如下所示：

    react-router  React Router 核心
    react-router-dom  用于 DOM 绑定的 React Router
    react-router-native  用于 React Native 的 React Router
    react-router-redux  React Router 和 Redux 的集成
    react-router-config  用于配置静态路由

因此，在实际的 web 项目开发中，react-router 和 react-router-dom 不必同时引用。

## 解决页面中多个模块同时渲染问题

> 当访问 path="/card" 的页面时，path="/" 的页面也会被渲染出来。不同于 3.x 中路由匹配时的独一无二特性，4.x 中有了一层包含关系：如匹配 path="/card" 的路由会匹配 path="/" 的路由。那么这个问题怎么解决呢？有以下两种方法：

（1）使用 exact 关键字
（2）使用独立路由： <Switch>

这样解决问题的原因：
首先需要了解下 <Router> 。它是所有路由组件共用的底层接口，在 4.x 中，你可以将各种组件及标签放进 <Router> 组件中。需要注意的是： <Router> 下只允许存在一个子元素，如存在多个则会报错。
在实际的项目中，我们一般不会直接使用 <Router> ，而是使用如下所示的更高级的路由。

## **`<BrowserRouter>`**

使用 HTML5 提供的 history API ( pushState , replaceState 和 popstate 事件) 来保持 UI 和 url 的同步。

该路由组件中的 5 个属性：

- basename: string
- getUserConfirmation: func
- forceRefresh: bool
- keyLength: number
- children: node

分别介绍下自己

- basename: string 类型 当前位置的基准 url

如果你的页面部署在服务器的二级（子）目录，你需要将 basename 设置到此子目录。 正确的 url 格式是前面有一个前导斜杠，但不能有尾部斜杠

```js
<BrowserRouter basename="/calendar"/>
<Link to="/today"/> // 渲染为 <a href="/calendar/today">
```

- getUserConfirmation: func 当导航需要确认时执行的函数。默认使用 window.confirm 。

```js
// 使用默认的确认函数
const getConfirmation = (message, callback) => {
  const allowTransition = window.confirm(message);
  callback(allowTransition);
};
<BrowserRouter getUserConfirmation={getConfirmation} />;
```

- forceRefresh: bool

只有当浏览器不支持 HTML5 的 history API 时，才设置为 true 。

当设置为 true 时，在导航的过程中整个页面将会刷新。

```js
const supportsHistory = 'pushState' in window.history
<BrowserRouter forceRefresh={!supportsHistory}/>
```

- keyLength: number
  location.key 的长度，默认是 6。点击同一个链接时，每次该路由下的 location.key 都会改变，可以通过 key 的变化来刷新页面。

```jsx
<BrowserRouter keyLength={12} />
```

- children: node

渲染单一子组件（元素）

## `<HashRouter>`

HashRouter 是一种特定的 <Router> ， HashRouter 使用 url 的 hash (例如： window.location.hash ) 来保持 UI 和 url 的同步。由于使用 hash 的方式记录导航历史不支持 location.key 和 location.state ，该技术仅用于支持传统的浏览器

上面两个是经常使用的，剩下的还有 <MemoryRouter> 、<NativeRouter> 、 <StaticRouter>，有兴趣的同学可以自己了解一下。

## <Route>

介绍完 <Router>，当然也要说下 <Route> ，我们使用最频繁的组件，主要职责是当页面的访问地址与 Route 上的 path 匹配时渲染出对应的 UI 界面。

属性值主要有：path、exact、strict

- path: string
  可以被 path-to-regexp 解析的有效 url 路径。如果没有 path，路由将总是被匹配。

`<Route path="/users/:id" component={User}/>`

- exact: bool
  为 true 时，则要求路径与 location.pathname 必须完全匹配。
  /one /one/two exact=true 时 不匹配；exact=false 时 匹配
- strict: bool

为 true 时，有结尾斜线的路径只能匹配有斜线的 location.pathname
/one/ /one 不匹配
/one/ /one/ 匹配
/one/ /one/two 匹配

## <Route>渲染的三种方法

<Route component> 当访问地址和路由匹配时，一个 React component 将会被渲染
<Route render> 此方法适用于内联渲染，而且不会产生重复装载问题
<Route children>

这三种渲染方法都会用到 match 、location 、 history 这些属性值

需要注意的是 ：每一种渲染方法都有其适用背景， <Route component> 的优先级比 <Route render> 高，而他们又都优先于 <Route children> ，所以在同一个 <Route> 应该只使用一种方法，我们大多数使用的是 component 方法。

## <Switch>

该组件只渲染第一个与当前访问地址匹配的 <Route> 或 <Redirect> 。它和多个堆叠的 <Route> 组件之间的区别是： <Switch> 只渲染一个路由。

## <Redirect>

<Redirect> 渲染时将会导向一个新的地址，这个新的地址将会覆盖掉 history 堆栈中的当前地址。

比如当用户手动输入 /test 之后，我们需要跳转至首页，则代码如下所示：

```jsx
<BrowserRouter>
  <div className="container">
    <Switch>
      <Route path={routePaths.INDEX} exact component={Index} />
      <Route path={routePaths.CARD} component={Card} />
      <Redirect to="/" />
    </Switch>
  </div>
</BrowserRouter>
```

### 常用属性

> 冒号后是类型
> to: string 重定向的 url 地址。
> `<Redirect to="/somewhere/else"/>`
> to: object 重定向的 location 对象。

```js
<Redirect
  to={{
    pathname: "/login",
    search: "?utm=your+face",
    state: { referrer: currentLocation }
  }}
/>
```

push: bool
取值为 true 时，重定向操作将会把新地址加入到访问的历史记录里面，并不会替换掉当前的地址。
`<Redirect push to="/somewhere/else"/>`

from: string 需要匹配的将要被重定向的路径。

```js
<Switch>
  <Redirect from="/old-path" to="/new-path" />
  <Route path="/new-path" component={Place} />
</Switch>
```

需要注意的是：<Route> 元素使用 path 属性进行匹配，<Redirect> 元素使用 from 属性进行匹配。如果元素中没有对应的 path 或 from，那么它们将匹配任何当前的访问地址。

## 路由激活状态的控制

在 3.x 中，当需要将当前点击的理由置为激活状态时，我们可以这样设置：

```js
//通过Style进行配置
<li><Link to="/home" activeStyle={{ color: 'red' }}>Home</Link></li>

//通过类名进行设置
<li><Link to="/home" activeClassName="active">Home</Link></li>
```

但是，一般情况下只有主导航的链接才需要知道自己是否被激活。因此需要对主导航的 <Link> 进行一层包装，这样就不必记得哪些地方有 activeClassName 或 activeStyle 。所谓的对 <Link> 包装就是自定义 <Link> 组件，通过自定义实现特别的 Style 。在 3.x 中，具体实现方法如下：

```js
// modules/NavLink.js
import React from 'react';
import { Link } from 'react-router';

export default class NavLink extends React.Component({
    constructor(props) {
        super(props);
    }

    render() {
        return <Link {...this.props} activeClassName="active"/>
    }
})
//使用方法：
import NavLink from './NavLink'
// ...
<li><NavLink to="/home">Home</NavLink></li>
```

但是，在 4.x 中我们不需要做这些包装工作，因为它直接提供了 <NavLink> 组件供我们使用。

```js
<NavLink to="/faq" activeClassName="selected">
  FAQs
</NavLink>
```

### 对 <NavLink> 做下简单介绍

> 该组件是 <Link> 的特殊版本，当遇到匹配的 URL 渲染元素时会添加样式属性，适用于页面导航部分。

- activeClassName: string 导航选中时的样式名，默认样式名为 active。
  使用方法看上
- activeStyle: object

```js
<NavLink
  to="/faq"
  activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}
>
  FAQs
</NavLink>
```

- exact: bool
  若值为 true，当访问地址严格匹配时激活样式才会生效。
- strict: bool
  若值为 true，只有当访问地址后缀斜杠严格匹配（有或无）时激活样式才会生效
- isActive: func
  用于添加页面激活时的操作逻辑

```js
const oddEvent = (match, location) => {
  if (!match) {
    return false;
  }
  const eventID = parseInt(match.params.eventID);
  return !isNaN(eventID) && eventID % 2 === 1;
};

<NavLink to="/events/123" isActive={oddEvent}>
  Event 123
</NavLink>;
```

## 页面跳转

在 3.x 中，跳转页面可以使用以下方式

```js
import { browserHistory } from "react-router";
//第一种方法
browserHistory.push("/some/path");
//第二种方法
this.context.router.push("/some/path");
//第三种方法
<Link to="'/some/path'" />;
```

在 4.x 中使用 push 方法跳转页面时，如果按照上面的写法，页面会报错：
针对该问题有以下两种解决方法：
（1）使用 history 控制路由的跳转
`this.props.history.push('/some/path');`
简单介绍下 history：
history 指的是 history 包，是 4.x 中的重要依赖之一。常见的 history 路由方案有三种形式，分别是：

- browser history 在 DOM 上的实现，用于支持 HTML5 history API 的浏览器；
- hash history 在 DOM 上的实现，用于旧版浏览器；
- memory history 在内存上的实现，用于测试或非 DOM 环境（如 React Native）。

history 对象包含的属性和方法如下所示：

- length: number history 堆栈中的地址数目
- action: string 当前的动作 (PUSH , REPLACE , 或者是 POP )
- location: object 当前访问地址信息组成的对象
- push(path, [state]): func 在 history 堆栈信息里加入一个新路径
- replace(path, [state]) : func 替换 history 堆栈信息里的当前路径
- go(n) : func 将 history 堆栈中的指针向前移动 n
- goBack(): func 等同于 go(-1)
- goForward(): func 等同于 go(1)
- block(prompt) : func 阻止跳转

需要注意的是：history 对象是可变的，==所以不要从 history.location 直接获取，而是需要通过 <Route> 的 prop 来获取 location。==
（2）使用 Context，获得 router 对象
以上两种方法中推荐使用第一种，因为 React 不推荐使用 context , 在未来版本中有可能被抛弃哦。

## 切换路由后，页面仍然停留在上一个页面的位置

由 A 页面跳转到 B 页面，B 页面停留在 A 页面的位置，没有返回到顶部。

问题分析：在 React Router 早期版本中大家可以使用滚动恢复的开箱即用功能，但是在 4.x 中路由切换时并不会恢复滚动位置，用户需要对 window 和独立组件的滚动位置进行管理。可以使用 withRouter 组件

withRouter 可以访问历史对象的属性和最近的 <Route> 匹配项，当路由的属性值 { match, location, history } 改变时，withRouter 都会重新渲染。该组件可以携带组件的路由信息，避免组件之间一层层传递。使用方法如下

`withRouter(MyComponent)`
这样就可以获取到 MyComponent 组件的路由信息了。

解决方法：使用 withRouter 封装 ScrollToTop 组件。这里就用到了 withRouter 携带路由信息的特性，通过对比 props 中 location 的变化，实现页面的滚动。

（1）定义 ScrollToTop 组件，代码如下：

```js
import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
```

（2）在定义路由处引用该组件，例如：

```js
ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <div className="container">
        <Route path={routePaths.INDEX} exact component={Index} />
        <Route path={routePaths.CARD} component={Card} />
      </div>
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById("app")
);
```

这样处理之后，当跳转页面时都会自动回到该页面的顶部位置。

## 页面之间如何传值

问题背景：当路由发生跳转时我们可能需要携带一些参数。

解决方法：使用 props 属性，介绍以下三种传值方法：
（1）props.params
（2）query
（3）state
分别介绍下自己
### （1）props.params

指定一个 path ，然后指定通配符可以携带参数到指定的 path ：`<Route path='/user/:name' component={UserPage}></Route>`
跳转 UserPage 页面时，可以这样写：

```js
//link方法
<Link to="/user/sam">用户</Link>;
//push方法
this.props.history.push("/user/sam");
```

在 UserPage 页面中通过 this.props.params.name 获取值。

上面的方法可以传递一个或多个值，但是每个值的类型都是字符串，没法传递一个对象。如果要传的话可以将 json 对象转换为字符串，传递过去之后再将 json 字符串转换为对象。

```js
let data = { id: 3, name: sam, age: 36 };
data = JSON.stringify(data);
let path = "/user/${data}";

//在页面中获取值时
let data = JSON.parse(this.props.params.data);
```
### （2）query

query 方式可以传递任意类型的值，但是页面的 url 也是由 query 的值拼接的，url 很长且是明文传输。

```js
//定义路由
<Route path='/user' component={UserPage}></Route>

//数据定义
let data = {id:3,name:sam,age:36};
let path = {
    pathname: '/user',
    query: data,
}

//页面跳转
<Link to={path}>用户</Link>
this.props.history.push(path);

//页面取值
let data = this.props.location.query;
let {id,name,age} = data;
```
### （3）state

state 方式类似于 post，依然可以传递任意类型的数据，而且可以不以明文方式传输。

```js
//定义路由
<Route path='/user' component={UserPage}></Route>

//数据定义
let data = {id:3,name:sam,age:36};
let path = {
    pathname: '/user',
    state: data,
}

//页面跳转
<Link to={path}>用户</Link>
this.props.history.push(path);

//页面取值
let data = this.props.location.state;
let {id,name,age} = data;
```

在实际的项目开发中，大家可以根据项目需要选择合适的传值方法。

## 使用 <BrowserRouter> 配置路由，上传页面至服务器后页面出现 404

问题背景：项目中控制路由跳转使用的是 <BrowserRouter>，代码如下：

```js
ReactDOM.render(
  <BrowserRouter>
    <div className="container">
      <Route path={routePaths.INDEX} exact component={Index} />
      <Route path={routePaths.CARD} component={Card} />
    </div>
  </BrowserRouter>,
  document.getElementById("app")
);
```

在开发过程中使用是没有问题的，但是将页面上传至服务器之后，问题就来了：用户访问的资源不存在，页面是空白的。

问题分析：<BrowserRouter> 是使用 React-Router 应用推荐的 history 方案。它使用浏览器中的 History API 用于处理 url，创建一个像 example.com/list/123 这样真实的 url。
当通过真实 url 访问网站的时候，由于路径是指向服务器的真实路径，但该路径下并没有相关资源，所以用户访问的资源不存在。

解决方法：
（1）改用 <HashRouter>。
它使用 url 中的 hash（#）部分去创建路由，举例来说，用户访问 http://www.example.com/ ，实际会看到的是 http://www.example.com/#/ 。
为什么本地开发时没有问题呢？那是因为我们的 React 脚手架中使用 webpack-dev-server 做了配置。

```js
webpackConfig.devServer = {
  disableHostCheck: true,
  contentBase: path.resolve(__dirname, "build"),
  compress: true, //gzip压缩
  historyApiFallback: true
};
```

（2）如果要使用 <BrowserRouter> 的话，服务器需要进行相关路由配置，方法见扩展阅读 [1]。

hashHistory 使用 URL 中的 hash（#）部分去创建形如 example.com/#/some/path 的路由。

browserHistory 是使用 React-Router 的应用推荐的 history 方案。它使用浏览器中的 History API 用于处理 URL，创建一个像 example.com/list/123 这样真实的 URL

问题描述

在 React + React-router 实现的 SPA(单页面应用)项目中，当我们路由模式采用 browserHistory 时，点击每个导航都可以显示正确的页面，一旦浏览器刷新，页面就显示 Cannot GET（404）。

如当我们点击 List 链接，进入 List 页面之后，正常显示 List 页面内容，这时如果我们刷新页面，页面将会出错，返回 Cannot GET /list。
问题分析
当刷新页面时，浏览器会向服务器请求 example.com/list，服务器实际会去找根目录下 list.html 这个文件，发现找不到，因为实际上我们的服务器并没有这样的 物理路径/文件 或没有配置处理这个路由，所有内容都是通过 React-Router 去渲染 React 组件，自然会报 404 错误。这种情况我们可以通过配置 Nginx 或通过自建 Node 服务器来解决。

### 方法一：Nginx 方式

采用 Nginx 方案需要先将所有资源打包生成到对应的目录，比如 dist，然后做如下配置：

```js
server {
	server_name react.thinktxt.com;
	listen 80;

	root /Users/txBoy/WEB-Project/React-Demo/dist;
	index index.html;
	location / {
    	try_files $uri /index.html;
  	}
}
```

通过配置 Nginx，访问任何 URI 都指向 index.html，浏览器上的 path，会自动被 React-router 处理，进行无刷新跳转。

### 方法二：通过修改 webpack-dev-server 运行方式

这个解决方法很简单，直接在运行时加入参数“–history-api-fallback”就可以了。我们修改 package.json 相关的代码:

```json
"scripts": {
    "build": "webpack",
    "dev": "webpack-dev-server  --inline --devtool eval --progress --colors --hot --content-base ./build --history-api-fallback"
},
```

### 方法三：Node 服务端配置

一个 express 应用的配置示例

```js
const express = require("express");
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();

//加载指定目录静态资源
app.use(express.static(__dirname + "/dist"));

//配置任何请求都转到index.html，而index.html会根据React-Router规则去匹配任何一个route
app.get("*", function(request, response) {
  response.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

app.listen(port, function() {
  console.log("server started on port " + port);
});
```

#### 一个 Koa 应用的配置示例：

```js
import Koa from "koa";
import xtpl from "koa-xtpl";
import path from "path";

const app = new Koa();
const port = process.env.PORT || 8081;

app.use(
  xtpl({
    root: path.resolve(__dirname, "../dist"),
    extname: "html",
    commands: {}
  })
);

app.use(async (ctx, next) => {
  await ctx.render("index", {});
});

app.listen(port, () => {
  console.log("Server started on port" + port);
});
```

注意: 由于 koa 的这种方式端口与 webpack-dev-server（8080）必须不同，所以还需要配合 Nginx 代理。例如：

```js
server {
	server_name react.thinktxt.com;
	listen 80;

	location / {
		proxy_pass http://localhost:8081;
	}
}

server {
	server_name static.react.thinktxt.com;
	listen 80;

	location / {
		proxy_pass http://localhost:8080;
	}
}
```

既然我们的 Nginx 代理用了真实域名，自然别忘了修改一下 host，如下：

```js
127.0.0.1 react.thinktxt.com
127.0.0.1 static.react.thinktxt.com
```

这样我们就大功告成了，可以 happy 的在地址栏直接访问任何采用 browserHistory 方式配置的路由页面了。

### 总结

面对这种场景其实还有很多种方案，任何服务端的处理方式都可以，例如还有 PHP、Apache 等等

> 其本质的原理就是利用服务端将任何请求都指向 index.html，而在 React 应用中 index.html 又刚好通过 React-Router 配置了相应的路由，我们让服务器返回 index.html，后面就交给前端路由来实现无刷新加载对应页面。

==本质的原理就是利用服务端将任何请求都指向 index.html==
[所有使用html5 pushState的应用都有这个问题](https://stackoverflow.com/questions/41246261/react-routing-is-able-to-handle-different-url-path-but-tomcat-returns-404-not-av/41249464#41249464)
### 补充 apache
处理此问题的一种方法是将404错误配置为转发到/test/index.html。这可能是默认配置webpack dev服务器的方式。

问题原因

刷新页面时访问的资源在服务端找不到，因为 react-router 设置的路径不是真实存在的路径。
如上的 404 现象，是因为在 apache 配置的根目录下面压根没有 userinfo 这个真实资源存在，这些访问资源都是在 js 里渲染的。
三、解决方案

1：进入 apache 目录的 conf 目录

2：打开 httpd.conf

3：找到#LoadModule rewrite_module modules/mod_rewrite.so 然后把前面的#去掉--开启“mod_rewrite”模块重写  mod_rewrite是Apache的一个非常强大的功能，它可以实现伪静态页面。

>如果没有查找到，则到“LoadModule” 区域，在最后一行加入“LoadModule rewrite_module modules/mod_rewrite.so”（必选独占一行）

> httpd.conf文件更改想要立即生效的话，请重启apache服务器
4：找到==所有的== AllowOverride 配置项，把所有的 None 都修改为 All
目的：让apache服务器支持.htaccess
Options FollowSymLinks

AllowOverride None ==》 None 都修改为 All
5：在网站根目录下面新建一个 .htaccess 文件（不需要文件名，直接.htaccess 就可以，Windows 可以），输入以下内容
.htaccess 这个文件，这个文件是 apache 用的分布式配置文件
一个例子
```js
    <IfModule mod_rewrite.c>
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </IfModule>
```
自己改后:
```js
    <IfModule mod_rewrite.c>
        RewriteEngine On
        RewriteBase /jam
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </IfModule>
```
单纯这样改的话：刷新不再报404，但是你刷新会到显示localhost下的index.html,地址栏路径是没有变的。
所以机智的我，因为前一天晚上看了好多关于上面配置项啥意思的文章，抱着试一试踩坑的心态，又加了一行
```js
    <IfModule mod_rewrite.c>#如果mode_rewrite.c模块存在 则执行以下指令
        RewriteEngine On  //重写引擎开关on为开启off为关闭
        RewriteBase /jam //#重写范围，这里/为本地顶级目录
        RewriteRule ^index\.html$ - [L] //重写规则，支持正则表达式的
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        #上面两个均为重写条件，%｛｝中内容为apache定义的一系列返回参数
        RewriteRule . /jam/index.html [L]
    </IfModule>
```
果然，哈哈哈哈，开心，疼了一晚上的脑壳不疼了。
果然，有时候卡顿了，不要急，停一会，不到20分钟搞定
- [ ] 好哦，又可以分享一篇原创掘金了耶，周末总结


补充：rewrite规则学习
后面的L是结束符号，同等级的还有

[L](last)：终止一系列的RewriteCond和RewriteRule  

[R](redirect)：触发一个显示的跳转，也可以指定跳转类型，如[R=301]  

[F](forbidden)：禁止查看特定文件，apache会触发403错误

[NC](no case)：表示忽略大小写



重启 apache

问题：地址一级目录可刷新，二级目录刷新 404
说法 1：这个问题是因为在刷新时相关文件的路径的设置不对的问题，每次都从最后一个/之后为参照的路径，所以此时在 webpack 的配置文件中设置 output 里面的 publicPath 为/即可
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteCond %{REQUEST_URI} !^/index.html$
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} !\.(css|gif|ico|jpg|js|png|swf|txt|svg|woff|ttf|eot)$
RewriteRule . index.html [L]
</IfModule>

## React Router 4.x 如何配置按需加载？

问题背景：当访问首页时会一次性请求所有的 js 资源，这会大大影响页面的加载速度和用户体验。所以添加按需加载功能是必要的。

问题分析：4.x 官网中推荐使用 bundle loader 实现代码拆分，所以我们选择使用 bundle loader 。

解决方法：配置按需加载的步骤如下：
（1）安装 bundle-loader。
npm install --save-dev bundle-loader
yarn add --dev bundle-loader
（2）定义 Bundle.js。
<Bundle> 组件会接受一个名为 load 的 props， load 是一个组件异步加载的方法，该方法需要传入一个回调函数作为参数，然后回调函数会在方法内异步接收加载完的组件，详细代码如下

```js
import React, { Component } from "react";
export default class Bundle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // short for "module" but that's a keyword in js, so "mod"
      mod: null
    };
  }

  componentWillMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  }

  load(props) {
    this.setState({
      mod: null
    });
    props.load(mod => {
      this.setState({
        // handle both es imports and cjs
        mod: mod.default ? mod.default : mod
      });
    });
  }

  render() {
    if (!this.state.mod) return false;
    return this.props.children(this.state.mod);
  }
}
```

（3）入口文件 app.jsx 配置。
使用 bundle-loader 为每个页面组件配置按需加载，默认打开的首页可以直接引入，不需要使用 <Bundle> 组件进行处理，代码如下所示：

```js
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";
import * as routePaths from "./js/constants/routePaths";
import Bundle from "./js/constants/Bundle.js";
//默认打开页面直接引入
import Index from "./js/pages/Index";
//其他页面异步引入
import CardContainer from "bundle-loader?lazy&name=app-[name]!./js/pages/Card";
import "./assets/css/index.scss";

const Card = () => <Bundle load={CardContainer}>{Card => <Card />}</Bundle>;

ReactDOM.render(
  <HashRouter>
    <div className="container">
      <Route path={routePaths.INDEX} exact component={Index} />
      <Route path="/card" component={Card} />
    </div>
  </HashRouter>,
  document.getElementById("app")
);
```

（4）webpack.config.js 修改，配置子文件名称。

```js
webpackConfig.output = {
  path: path.resolve(__dirname, "build/" + config.ftpTarget),
  publicPath: config.publicPath + "/",
  filename: "js/[name].js",
  chunkFilename: "js/[id].js"
};
```

这样配置之后，打包出来的 js 文件已经进行了拆分，每个页面对应一个自己的 js ，当访问该页面时才加载相应的资源。

## this.props.history.push() 进行路由跳转时报错

问题背景：配置按需加载后，首页可以正常跳转子页面，而在子页面中进行页面跳转时出现报错：this.props.history.push 中'push'is undefined 。

问题分析：项目中使用 this.props.history.push() 方法实现路由跳转，未进行文件拆分时可以正常使用，但是当进行文件拆分之后，子文件中无法获取 this.props.history 对象

解决方法：使用 withRouter 封装页面组件。示例代码如下：

```js
import React from "react";
import { withRouter } from "react-router-dom";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="wrapper">
        <p>这是第二页：测试</p>
      </div>
    );
  }
}
export default withRouter(Card);
```

这样封装之后，就无需一级级传递 React Router 的属性，子文件内也可以拿到需要的路由信息。

以上列出的内容就是我们在使用 4.x 开发时遇到的一些问题，针对每个问题不仅给出了解决方法，还介绍了解决方法中涉及到的知识点。对于一些未介绍到的内容，大家可以移步官网进行深度学习

值得注意的是，上述问题解决方法中的示例代码使用的是 React v16 版本，在实际使用时需要结合自己的环境进行适当修改。

React Router 4.x 此次带来的改变是颠覆性的，对于我们使用者来说是一种挑战，同时也是一种知识的有趣探索。组件化路由设计理念和动态路由的配置给我们的项目开发带来了更大的灵活性。文中在介绍问题解决方法时对一些 4.x 的 API 做了简要的介绍，对于一些更细节化的东西，需要我们移步官网进行深入的学习，然后再慢慢的探索。React Router 的作者说过版本号要永远和 React 保持一致，所以相信我们的 React Router 探索之旅将会一直进行着……同志们，Hold On！

扩展阅读

[1] https://www.thinktxt.com/react/2017/02/26/react-router-browserHistory-refresh-404-solution.html

[2] http://reacttraining.cn/

[3] https://github.com/ReactTraining/react-router

[4] https://www.sitepoint.com/react-router-v4-complete-guide/
