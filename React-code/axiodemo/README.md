axios+antd+sass+react+react-router-dom

axios   纯粹的http的库
√ 使用axios去完成文章管理模块的实现。
发送请求

拦截器（前后台都有这个概念）
    请求拦截器
    响应拦截器

---
✔️1.创建项目，搭建antd的环境
✔️2.搭建看点资讯项目的框架，左边导航，右边内容区。

√ antd快速搭建  yarn add antd
√ 高级配置 自定义主题
    yarn add react-app-rewired customize-cra
    yarn add babel-plugin-import
    yarn add less less-loader

√ Layout组件的使用
3、整合路由
    ✔️安装路由模块   yarn add react-router-dom
    ✔️导入
    ✔️在对应的位置更改Link,Route
    ✔️创建页面组件
√ 整合路由
yarn add react-router-dom

√ 内容页的编写
ArticleManage

    √ Sass 引入使用
    yarn add node-sass
    √ 获取数据
    axios配置  yarn add axios
        根据后台数据返回特点做一个拦截器
        //拦截器
  在请求发送前拦截请求，进行处理，然后再发送给后台
    拦住，设置验证信息，或者设置一些其他需要携带的数据给后台。
    请求头部可以添加一些信息，time:2019-08-26 14:13:23
  在响应回来之后拦截响应，处理，然后响应数据给前端
 ```js
 发送请求
    axios({
    //配置对象
    url:'',
    method:'',
    data:{},    //请求体里的参数。post
    params:{}   //url传参  get
  }).then().catch()
  axios.get(url,{params:obj}).then().catch()
  axios.post(url,obj).then().catch()
  ```
    分页处理

yarn add qs 
qs.stringify(obj)  将js对象数据转为表单格式数据

√ 新增 模态框

....增删查改 结合接口数据
---

---
项目
  原型   前端    数据交互
        后台

yarn add antd
yarn add react-app-rewired customize-cra
yarn add babel-plugin-import
yarn add less less-loader
修改package.json
添加config-overrides.js
  复制自定义主题那里的最终的文件内容

yarn add node-sass
cnpm install --save node-sass

qs   
  yarn add qs
  import qs from 'qs'
  qs.stringify(obj);

获取数据展示
  1.axios配置
    yarn add axios
    baseURL
  2.分页处理


新增
  模态框
  点击新增按钮，模态框显示，空数据。点击确定的时候，保存数据，关闭模态框
  点击修改按钮，模态框显示，有数据。点击确定的时候，保存数据，关闭模态框
  
导入模态框，显示模态框
编写内部表单