function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape() {}
Shape.prototype.duplicate = function() {
  console.log("duplicate");
};
function Circle() {}
extend(Circle, Shape);
Circle.prototype.duplicate = function() {
    console.log("duplicate circle");
  };

function Square() {}
extend(Square, Shape);
Square.prototype.duplicate = function() {
  console.log("duplicate Square");
};
//多态的实际使用场景
const shapes = [
  new Circle(),
  new Square()
]
for (let shape of shapes){
  shape.duplicate();
}
//等价于以下
// for (let shape of shapes) {
//   if (shapes.type === "Circle") duplicateCircle();
//   else if (shapes.type === "Square") duplicateSquare();
//   else duplicateShape();
// }