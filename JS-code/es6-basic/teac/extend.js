class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log(this)  //Dog { name: 'xx', age: 1 } 如果在子类中调用父类的构造方法，this指向子类的实例
  }
  say() {
    console.log("Animal中的实例方法");
  }
  static animalSay() {
    console.log("Animal的静态方法");
  }
}
Animal.attr = "Animal中的静态属性";
//继承
class Dog extends Animal {
  constructor(name, age, color) {
    super(name, age); //在子类构造其中调用父类构造器
    //在super底下调用this
    console.log(this); //Dog { name: 'xx', age: 1 }  
    this.color = color; 
    console.log(this);//Dog { name: 'xx', age: 1, color: 'black' }
  }
}
let dog = new Dog("xx", 1, "black");
Dog.animalSay() //Animal的静态方法
dog.say()

console.log(Dog.attr) //Animal中的静态属性
console.log(Dog.__proto__===Animal) //true
console.log(Dog.prototype.__proto__===Animal.prototype)//true
Animal.animalSay()
Animal.prototype.say()