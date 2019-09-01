let a = 1;
let b = 1;
let c =2;
console.log('export-----')
export {a,b}
// export default c; //export default只能使用一次，在一个模块中  一般默认导出不取名字，可以在导入的时候命名

export default {
    name:'xjm',
    age:18
}

//如果使用的两次，编译的时候就会报错