//关于多态
//render方法，子类中不同的表现
function HtmlElement() {
  this.click = function() {
    console.log("clicked");
  };
  this.render = function() {
    console.log("HtmlElement render");
  };
}
HtmlElement.prototype.focus = function() {
  console.log("focused");
};

function HtmlSelectElement(items = []) {
  this.items = items;
  this.render = function(item) {
    return `
    <select>${this.items.map(item => `<option>${item}</option>`)}</select>
    `;
  };
}
function HtmlImageElement(src) {
  this.src = src;
  this.render = function(item) {
    // console.log("<img src=" + this.src + " />");
    //建议使用模板字符串
    return `<img src="${this.src}" />`;
  };
}
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;


const elements = [
  new HtmlSelectElement([1, 2, 3]),
  new HtmlImageElement("http://")
];
for (let element of elements) console.log(element.render());


