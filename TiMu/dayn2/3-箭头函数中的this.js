var name = "xjm";
a = 2;
var getName = () => {
  console.log(this.name);
};
//箭头函数中的this，指向声明函数是所处的上下文中的this，不会被其他方式所改变
//还有种说法：箭头函数中的this，只取决于包裹箭头函数的第一个普通函数的this
var person = {
  name: "xiaohong",
  getName: getName
};
var other = {
  name: "dong"
};

// getName(); //undefined
// person.getName(); //undefined
// getName.call(other); //undefined
// console.log(global.name); //undefined
// console.log(global.a); //2

