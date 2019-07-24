

## CSS/code���ļ�˵����

### 01-a��ǩ��α��ѡ����.html

```html
 <div class="btn-div">
      <button>show menu</button>
      <!-- Сtip:����ʾ��Ԫ�ط��ڴ�����Ԫ���ڲ�,������button���ƿ���list��ʧ������ -->
      <div class="list-div">
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Node</li>
        </ul>
      </div>
    </div>
```
```css
.list-div {
      display: none;
    }
.btn-div:hover > .list-div {
      display: block;
    }
```
### 02-����ѡ����.html

### 03-αԪ��ѡ����.html

### 04-α��ѡ����-Ԫ�����.html

```css
box-shadow: 3px 3px 3px coral;/* ������Ӱ��x�������������� y�������������� ģ������*/
outline: 1px solid red; /*���ߣ���ռ����Ļ�ռ�*/
```
### 05-α��-��Ԫ�����.html

- ��������ÿ�ߣ�����tr���øߣ�����td��th���ÿ�

```css
border-collapse: collapse;/*���߿�ϲ���==ԭ�ȵ�cellspacing=0*/
/*ʵ�ֱ����б�ɫ*/
tbody>tr:nth-child(even){
  background-color: #ccc;
}
```

### 06-�ı���ʽ.html

### 07-����border��������.html

���ı���������Ĵ�����ʹ��border���������κͼ�ͷ��ʵ��

### 08-animation.html

�����Ķ��弰������Ե�ʹ��

---
### ���в���

```html
<style>
        *{
            margin: 0;
            padding: 0;
        }
        .container{
            display: flex;
            height: 300px;/*�̶��߶�*/
            /*ȥ��height�����������д���  �߶ȿ�ռ��*/
/* �������߶�λ����Ԫ�أ���Ƚ�������100%���������ڲ����ݳ����������ϣ������ԭ���Ŀ�����ֶ����� */
           /* position: absolute;
            top: 0;
            bottom: 0;
            width:100%;*/
        }
    .left-div{
        width:200px;
        background-color: coral;
    }
    .right-div{
        width: calc(100% - 200px);
        background-color: teal;
    }
</style>

<body>
    <div class="container">
        <div class="left-div"></div>
        <div class="right-div"></div>
    </div>
</body>
```

09-float-position.html  

- �����Ͷ�λ�Կ鼶Ԫ�ز�����Ӱ��--��ʹ�鼶Ԫ�صĿ�Ƚ�������100%���������ڲ����ݳ�����

- ������� --ȷ�е���˵Ӧ����������˸������Լ�������Ӱ��
  - ����ֵܶ��Ҳ�����Ӱ�� ���Ҹ��Լ�����clear��both�����һ���ԭ����λ�á�
  - �����Ԫ�ض��Ҳ�����Ӱ�죬�Ҹ��Լ�����overflow��hidden�����ҵĸ߶���Ȼ���֡�
- ����һ��div��position��fixed���������ĵ�����Ʈ����һ�㣩��Զ�̶��ڶ�����ײ������ܻ�ʹһЩ�ı������������ʱ�����ͨ����body����padding-top��padding-bottom���ڻ���ڿɼ��ı��ĸ߶ȼ��ɿ��ü���

### 10-position.html

��relative absolute��fixed��λ��ʽ��ʵ����ע���ע�Ƿ������ĵ������Լ���ζ�λ��

---

### ͼƬ�ײ���϶����

![](images/�ı����.png)

```html
<style>
      img {
        width: 100px;
        height: 100px;
        /* display:  block;����ײ���϶ */
      }
      div {
        border: 1px solid red;
        /* font-size: 0;Ч��ͬ��display */
      }
</style>

  <body>
    <div>
      <img src="../images/jin.jpg" alt="" />
    </div>
  </body>
```

### �������ֵ�ʵ��

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>����</title>
    <style>
        /*һ���ƶ�һ��תȦ*/
    div{
        width:100px;
        height:100px;
        background: teal;
        border-radius: 50%;
        animation: myani 2s infinite alternate;
        display: inline-block;
    }
    @keyframes myani{
        0%{
            transform: translate(0) rotate(0deg);
        }
        100%{
            transform: translateX(400px) rotate(360deg);
            background: chocolate;
        }
    }
    @media screen and (min-width:1200px){
        div{
            background: red;
        }
    }
    @media screen and (min-width:768px) and (max-width:992px){
        div{
            background: blue;
        }
    }
    </style>
</head>
<body>
    <div>ԲȦ</div>
    <div>gungun</div>
</body>
</html>
```

### 11-transform.html

��һЩtransform���Ե�ʵ��  --��ת�����ţ�ƽ��

