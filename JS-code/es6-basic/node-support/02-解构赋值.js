/**
 * 什么是解构赋值：
 * 分类：
 * 数组解构赋值
 * 对象解构赋值
 * 字符串解构赋值
 * 布尔值解构赋值  --属于对象解构中的一种
 * 函数参数解构赋值 --数组解构赋值在函数参数方面的一个应用
*/
{
  let a,b,rest;
  [a,b]=[1,2];
  console.log(a,b); //1 2
}

{
  let a,b,rest;
  [a,b,...rest]=[1,2,3,4,5,6];
  console.log(a,b,rest); //1 2 [3,4,5,6]
}

{
  let a,b;
  ({a,b}={a:1,b:2})
  console.log(a,b);//1  2
}
 
{
  let a,b,c,rest;
  [a,b,c=3]=[1,2];
  console.log(a,b,c); //1 2 3
}

{
  let a=1;
  let b=2;
  [a,b]=[b,a]; //交换a和b
  console.log(a,b);//2 1
}

{
  function f(){
    return [1,2]
  }
  let a,b;
  [a,b]=f();
  console.log(a,b);//1 2
}

{
  function f(){
    return [1,2,3,4,5]
  }
  let a,b,c;
  [a,,,b]=f();
  console.log(a,b);//1 4
}

{
  function f(){
    return [1,2,3,4,5]
  }
  let a,b,c;
  [a,,...b]=f();
  console.log(a,b);//1 [3,4,5]
}

{
  let o={p:42,q:true};
  let {p,q}=o;
  console.log(p,q);//42 true
}

{
  let {a=10,b=5}={a:3};
  console.log(a,b);//3,5
}

{
  let metaData={
    title:'abc',
    test:[{
      title:'test',
      desc:'description'
    }]
  }
  let {title:esTitle,test:[{title:cnTitle}]}=metaData;
  console.log(esTitle,cnTitle);//abc test
}
