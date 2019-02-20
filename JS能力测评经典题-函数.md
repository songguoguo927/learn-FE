**函数声明与函数表达式的区别**

- 对于函数声明，解析器会率先读取并且让其在执行*任何代码*前可用（函数声明提升）
- 函数表达式，当解析器执行到它所在的代码行时，才会真正被解释执行。

eg：
/*错误代码,错误原因：别的代码还没运行呢，两个getValue声明已经被读取，所以总是执行最新的那个*/
```
function functions(flag) {
    if (flag) {
      function getValue() { return 'a'; }
    } else {
      function getValue() { return 'b'; }
    }

    return getValue();
}
```

/*修正后为函数表达式的形式：当解析器执行到它所在的代码行时，才会真正被解释执行，所以两个逻辑分支可以分别执行*/

```
function functions(flag) {
    if (flag) {
     getValue = function() { return 'a'; }
    } else {
     getValue = function() { return 'b'; }
    }

    return getValue();
}
```

**函数传参--call,apply方法**

每个函数都包含两个非继承而来的方法：apply（）、 call（），这两个方法的用途都是在特定的作用域中调用函数，实际上等于设置函数体内this对象的值。


思路:
1.通过fn调用了apply方法，this指向fn，即将数组arr中的元素传递给函数fn作为实参；
2.之所以使用apply方法，是因为apply方法的第二个参数可以是Array的实例（即数组），也可以是arguments对象（类数组）。apply可以将一个数组默认的转换为一个类数组。使用call方法时传递给函数的参数必须逐个列举出来，不能是一个数组。
```
function argsAsArray(fn, arr) {
//return fn(arr[0],arr[1],arr[2]);最直接的方法
 //return fn(...arr); ES6解构赋值
return fn.apply(this,arr);//比较高级的方法，通过apply改变作用域
}
```

作用：调用函数

区别：
- call需要将传递给函数的参数明确写出来，是多少参数就需要写多少参数  func.call(obj,args);//参数列出
- apply则将传递给函数的参数放入一个数组中，传入参数数组即可。 func.apply(obj,[m,n......]);//参数数组

**函数的上下文**
将fn的执行上下文改为obj对象，也就是说把fn的方法 放到 obj上执行（放到obj执行了，执行上下文当然是obj对象了）相当于把obj 的定义上下文改为 fn的.

在JavaScript中，函数是一种对象，其上下文是可以变化的，对应的，函数内的this也是可以变化的，函数可以作为一个对象的方法，也可以同时作为另一个对象的方法，可以通过Function对象中的call或者apply方法来修改函数的上下文，函数中的this指针将被替换为call或者apply的第一个参数。将函数 fn 的执行上下文改为 obj 对象，只需要将obj作为call或者apply的第一个参数传入即可。

```
//三种方案
//apply
function speak(fn, obj) {
    return fn.apply(obj);
    //return fn.apply(obj, obj);
}
//call
function speak(fn, obj) {
    return fn.call(obj);
}
//bind
function speak(fn, obj) {
    return fn.bind(obj)();
}
```
