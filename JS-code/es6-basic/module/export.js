'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var a = 1;
var b = 1;
var c = 2;
console.log('export-----');
exports.a = a;
exports.b = b;
// export default c; //export default只能使用一次，在一个模块中  一般默认导出不取名字，可以在导入的时候命名

exports.default = {
    name: 'xjm',
    age: 18

    //如果使用的两次，编译的时候就会报错

};