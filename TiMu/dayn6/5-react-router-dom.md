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
