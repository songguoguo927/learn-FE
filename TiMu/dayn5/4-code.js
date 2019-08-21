//体现了函数式编程的--不可变性
let student = {
    firstName: "testing",
    lastName: "testing",
    marks: 500
}
// 在javascript中，函数参数是对实际数据的引用，你不应该使用 student.firstName =“testing11”，这会改变实际的student 对象，应该使用Object.assign复制对象并返回新对象。
function changeName(student) {
    // student.firstName = "testing11" //should not do it
    // return student;//should not do it
    let copiedStudent = Object.assign({}, student);
    copiedStudent.firstName = "testing11";
    return copiedStudent;
}

console.log(changeName(student));

console.log(student);

//递归  循环
function printMyName(name, count) {
    if(count <= name.length) {
        console.log(name.substring(0,count));
        printMyName(name, ++count);
    }
}

console.log(printMyName("Bhargav", 1));

/*
B
Bh
Bha
Bhar
Bharg
Bharga
Bhargav
*/

// withotu recursion
var name = "Bhargav"
var output = "";
for(let i=0; i<name.length; i++) {
    output = output + name[i];
    console.log(output);
}

