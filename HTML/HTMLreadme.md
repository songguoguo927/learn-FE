�ļ�˵����

### 01-label  ��Ҫ������һЩ���õ�html��ǩ

- ����p��h1-h6��ǩ���Դ�����margin������margin�ص����⡣--�Դ������ġ�

- ��ÿ����ǩ��˵���е����ԣ�id class title��style��

  > title ������Ϣ------Ч�������û�����ƶ�����Ԫ���ϣ�����ֵ�������

- ���ڳ��õ��ַ�ʵ��
  `&lt;` `&gt;` `&copy;` `&times;`--ɾ��x

- hgroup��ǩ--������
- abbr��ǩ --�Ŵ�д��ĸ��д  `<abbr title="world wide web">WWW</abbr>`
- ol�����б��еĲ�������reversed ����Ŀ���ŵ�ת�����ݲ�
- dl�Զ����б� dt + dd

### 02-tabel-img-a.html  ��table��img��a��ǩ�����ǵ����Խ�������

- a��ǩ��target����ֵ��`_blank,_self`;`_parent��_top`�ѷ���
- img��ǩ��width���ԣ�img�Ȳ�������Ԫ��Ҳ���ǿ鼶Ԫ�أ���Ϊ��������ʾ�ҿ����ÿ�ߣ�ʵ����Ŀ����img�鼶��ʾ ���ֶ�����display:block��
- ����Ԫ�ز������ÿ�ߣ�����Ҳ��Ч������Ԫ�ع���һ�У��鼶Ԫ�ؿ������ÿ���Ҷ�ռһ��

---

�򵥱��÷�  

**ע���עenctype**

```html
1.������

<!-- action���ύ�ĵ�ַ��ʵ����Ŀ����һ����̨�ӿڵ�ַ -->
    <!-- ./day02.html?search=123  GET�ύʱ -->
    <form action="./getdata.js" method="GET">
        <!-- ���ؼ� -->
        <input type="text" name="search" id="">
        <button>submit</button>
    </form>

2.��¼��

<form action="./day01-label.html" method="POST" enctype="application/x-www-form-urlencoded">
      <!-- label��������ؼ����а� ; placeholderռλ��-->
      <div><label for="">�û�����</label><input type="name" name="name" /></div>
      <div><label for="">���룺</label><input type="password" name="password" /></div>
      <div><input type="submit" value="��¼" ></div>
      <!-- ���Ԫ�� -->
</form>

3.�ļ�ͼƬ�ϴ�
<form action="#" enctype="multipart/form-data" method="POST">
      <!-- �����ļ�������ʽ�������б���,����post��ʽ��get��ʽ���ز�����ô��������� -->
      ͷ��: <input type="file" name="file" />
      <button>�ύ</button>
</form>
```

### 03-form-register.html ͨ��дһ����ע��ҳ��һЩ���ؼ���ǩ�������Ե�����

- �漰����Ҫдname����Ȼ�ύ��Ч
- input���ԣ�autofocus �Զ��۽� checkedĬ��ѡ��
- ͬһ�鵥ѡ��ť��nameֵ����һ�£�ȷ�����⣻valueֵ��ͬ
- label��������ؼ����а󶨣�ʵ�ֵ������Ҳ�൱����ڿؼ��ϣ�����ǿ�û�����
- select������multiple-���ctrl��ʹ�ý��ж�ѡ��size Ĭ��չʾ��ѡ����
- ���ύ���ݣ�ʵ�����ύ���Ǳ��ؼ���valueֵ

```html
<!-- �����ύ��ʽ ,д��form��-->
      <button>�ύ</button>
      <button type="submit">�ύ</button>
      <input type="submit"/>  <!-- ����valueֵĬ��ֵ���ύ��ѯ -->
      <input
        type="image"
        src="../images/search.svg"
        width="20"
        alt="���ͼƬ���ύ������"
      />
<!-- ���ð�ť-->
 <input type="reset" />
```

- �Ա��Ĳ������ԣ�disabled readonly hidden

*disabled���εı� �����޸��Ҳ����б����ݵ��ύ��*

*readonly���εĲ����޸ĵ�����б����ݵ��ύ* 

*hidden ���ε����ؿ��ύ*

### 04-h5-label  ��H5������һЩ���廯�ı�ǩ��������

- header,footer, nav, aside,article, section,details,address

```html
<figure>
  <img src="../images/jin.jpg" alt="ͼƬ��·��" />
  <figcaption>this is jinxuanya</figcaption>
</figure>
```

![figureЧ��ͼ](./images/figure.png)

### 05-h5-form  H5������һЩ���ؼ�

- �������������գ�slider ��ɫ  
- form�ⲿ��input�����form���һ���ύ

```html
<form action="#" id="form">
</form>
�ⲿ��input��<input type="text" name="outinput" form="form" />
```

