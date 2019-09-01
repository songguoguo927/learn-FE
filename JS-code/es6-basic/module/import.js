'use strict';

var _export = require('./export');

var _export2 = _interopRequireDefault(_export);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//不使用花括号，是默认导出的值
console.log(_export.a); // import {a,b} from './export'//  单例模式只运行一次 ，第二次export.js从缓存中取
// import wow from './export'   //不使用花括号，是默认导出的值

console.log(_export.b);
console.log(_export2.default); //{ name: 'xjm', age: 18 }