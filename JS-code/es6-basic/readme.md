npm 安装cnpm
`npm i -g cnpm -registry=http://registry.npm.taobao.org/`

这是es6基础知识，敲得一些栗子代码

babel工具只转换语法层次的,不转换新的API
babel-polyfill 垫片 将es6的功能性新特性转换成es5的代码

>Babel 默认只转换新的 JavaScript 句法（syntax），而不转换新的 API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。举例来说，ES6在Array对象上新增了Array.from方法。Babel 就不会转码这个方法。如果想让这个方法运行，必须使用babel-polyfill，为当前环境提供一个垫片

so 安装以下依赖
```json
"devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-polyfill": "^6.26.0",
    "babel-preset-latest": "^6.24.1"
  }
```
