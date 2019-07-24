文件说明：

### 01-label  主要是敲了一些常用的html标签

- 关于p，h1-h6标签，自带上下margin，会有margin重叠问题。--自带上下文。

- 对每个标签来说都有的属性，id class title，style。

  > title 描述信息------效果：当用户鼠标移动到该元素上，会出现的悬浮框

- 关于常用的字符实体
  `&lt;` `&gt;` `&copy;` `&times;`--删除x

- hgroup标签--标题组
- abbr标签 --放大写字母简写  `<abbr title="world wide web">WWW</abbr>`
- ol有序列表中的布尔属性reversed 对项目符号倒转，内容不
- dl自定义列表 dt + dd

### 02-tabel-img-a.html  对table，img，a标签和它们的属性进行演练

- a标签的target属性值有`_blank,_self`;`_parent、_top`已废弃
- img标签有width属性，img既不是行内元素也不是块级元素，因为他行内显示且可设置宽高，实际项目中让img块级显示 ，手动设置display:block。
- 行内元素不可设置宽高，设置也无效与其他元素共享一行；块级元素可以设置宽高且独占一行

---

简单表单用法  

**注意关注enctype**

```html
1.搜索表单

<!-- action表单提交的地址，实际项目中是一个后台接口地址 -->
    <!-- ./day02.html?search=123  GET提交时 -->
    <form action="./getdata.js" method="GET">
        <!-- 表单控件 -->
        <input type="text" name="search" id="">
        <button>submit</button>
    </form>

2.登录表单

<form action="./day01-label.html" method="POST" enctype="application/x-www-form-urlencoded">
      <!-- label用于与表单控件进行绑定 ; placeholder占位符-->
      <div><label for="">用户名：</label><input type="name" name="name" /></div>
      <div><label for="">密码：</label><input type="password" name="password" /></div>
      <div><input type="submit" value="登录" ></div>
      <!-- 替代元素 -->
</form>

3.文件图片上传
<form action="#" enctype="multipart/form-data" method="POST">
      <!-- 按照文件流的形式，不进行编码,采用post方式，get方式承载不了这么大的数据流 -->
      头像: <input type="file" name="file" />
      <button>提交</button>
</form>
```

### 03-form-register.html 通过写一个类注册页对一些表单控件标签及其属性的演练

- 涉及表单的要写name，不然提交无效
- input属性：autofocus 自动聚焦 checked默认选中
- 同一组单选按钮，name值保持一致，确保互斥；value值不同
- label用于与表单控件进行绑定，实现点击文字也相当与点在控件上，可增强用户体验
- select的属性multiple-配合ctrl键使用进行多选；size 默认展示的选项数
- 表单提交数据，实际上提交的是表单控件的value值

```html
<!-- 四种提交方式 ,写在form中-->
      <button>提交</button>
      <button type="submit">提交</button>
      <input type="submit"/>  <!-- 不加value值默认值是提交查询 -->
      <input
        type="image"
        src="../images/search.svg"
        width="20"
        alt="点击图片可提交表单数据"
      />
<!-- 重置按钮-->
 <input type="reset" />
```

- 对表单的布尔属性：disabled readonly hidden

*disabled修饰的表单 不可修改且不进行表单数据的提交；*

*readonly修饰的不可修改但会进行表单数据的提交* 

*hidden 修饰的隐藏可提交*

### 04-h5-label  对H5新增的一些语义化的标签进行演练

- header,footer, nav, aside,article, section,details,address

```html
<figure>
  <img src="../images/jin.jpg" alt="图片迷路了" />
  <figcaption>this is jinxuanya</figcaption>
</figure>
```

![figure效果图](./images/figure.png)

### 05-h5-form  H5新增的一些表单控件

- 进度条，年月日，slider 颜色  
- form外部的input如何与form里的一起提交

```html
<form action="#" id="form">
</form>
外部的input：<input type="text" name="outinput" form="form" />
```

