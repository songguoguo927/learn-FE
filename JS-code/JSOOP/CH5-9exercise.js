//关于原型继承的练习
function HtmlElement() {
  this.click = function() {
    console.log("clicked");
  };
}
HtmlElement.prototype.focus = function() {
  console.log("focused");
};

function HtmlSelectElement(items = []) {
  //   this.items = [] || items; ES6 before
  this.items = items;
  this.addItem = function(item) {
    this.items.push(item);
  };
  this.removeItem = function(item) {
    // this.items.pop(item); i was wrong
    this.items.splice(this.items.indexOf(item), 1);
  };
}
// HtmlSelectElement.prototype = Object.create(HtmlElement);
// TODO搞清楚为什么不用上面的一句用下面的一句
//经在控制台实践 发现可能跟基类构造器有关，当用上面一句的话，实例出一个s（HtmlSelectElement）访问不到父类HtmlElement的click方法
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
