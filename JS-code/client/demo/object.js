var person = new Object();
person.name = 'Tom';
person.sex = 'boy';
person.age = '18';
person.sayHi = function(){
    console.log('hello');
}
/**============= */
var animal = {
    type:"cat",
    age:'2-month',
    sayHi:function(){
        console.log('miao miao miao')
    },
    hobby:'',
    address:''
}
// console.log(person)
// console.log(animal)
// console.log(animal.sayHi)
// console.log(animal.sayHi())
for(key in animal){
    // console.log(key+':'+animal[key])
    if(animal[key]===''){
        delete animal[key];
    }
}
console.log(animal)

var animal2Json = JSON.stringify(animal)
console.log(animal2Json)

var jsonStr = '{"name":"xjm","age":"18"}';
var jsonStr2Obj = JSON.parse(jsonStr)
console.log(jsonStr2Obj)

console.log('name' in animal)
console.log('toString' in animal)
console.log(animal.hasOwnProperty('name'))
console.log(animal.hasOwnProperty('age'))

var date = new Date();
console.log(date)
console.log(date.toString())
console.log(date.toLocaleString())


var one = 1;
function one(){}

console.log(one)


function myFn(){
    // console.log(a,b)
    // console.log(arguments)   
    // console.log(callee) error
     console.log(arguments.callee) 
 var total = 0  
    for(var i = 0 ;i<arguments.length;i++){
        // console.log(arguments[i])
        total+=arguments[i]
    }
    console.log(total)
    return total;
}
// myFn(a,b)
myFn(3,0,9,6,10)
