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
