function Foo() {
    //全局变量
    getName = function () { //在函数内部声明的getName变量，前面是不带有var、let,const的声明的getName是在全局范围内
        console.log('1');
    };
    return this;
}
//为函数添加属性getName,其类型是Function，所以这里也可以看出来，Function也是一种Object
Foo.getName = function () {
    console.log('2');
};
//为Foo的原型添加方法getName
Foo.prototype.getName = function () { 
    console.log('3');
};
//var声明的变量和函数声明function都会被提升，但是函数声明的提升的级别是比var要高的
var getName = function () { 
    console.log('4');
};
function getName() { 
    console.log(5);
}

Foo.getName();  //2
getName();    //4
Foo().getName(); //--1 

/**从上面可以看出来()与.优先级相同，所以Foo().getName()从左至右执行。
 * 首先运行Foo(),全局的getName被覆盖成输出console.log('1'),并且返回的this此时代表的是window。
 * 随后相当于执行的window.getName(),那么输出的实际就是1(被覆盖)。 */

getName();  //--1  和上面一样
new Foo.getName(); //-->2

/**
 *实际执行的是new (Foo.getName)()
*/
new Foo().getName();   //-->3
/**
 *实际执行的是(new Foo()).getName(),
 (new Foo())返回了新生成的对象，该对象没有getName()方法，
 所以在prototype中找到了getName()方法。所以输出的是3。
*/
new new Foo().getName();     //-->3  

/**
 *实际执行的是new (new Foo()).getName()
*/

/**
 * new ...(...)优先级18 带参数列表
 * new ...  优先级17 无参数列表
 */