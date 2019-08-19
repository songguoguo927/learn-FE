function A(name) {
  this.name = name;
}
A.prototype.myName = function() {
  return this.name;
};

function B(name, label) {
  A.call(this, name);
  this.label = label;
}

function C(name, label) {
  A.call(this, name);
  this.label = label;
}

B.prototype = A.prototype; //将对象的引用分配给b.prototype
C.prototype = new A();
console.log(new A()) //A { name: undefined }
B.prototype.myName = function() {
  //所以这里对应a的原型也改变了
  return 111;
};

x = new A("xxx");
y = new B("yyy");
z = new C("zzz");
console.log(x.myName(), y.myName(), z.myName());
//z的__proto__===C.prototype没有myName，继续往上找z.__proto__.__proto__===C.prototype.__proto__===A.prototype
// 111 111 111
