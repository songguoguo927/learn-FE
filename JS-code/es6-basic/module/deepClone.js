"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _arguments = arguments;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//target 目标对象，我们要把它返回出去
//Object.assign的思想，我们提升一下他的功能，变成深复制

//考虑的点，如何判断一个数据是数组，对象
// 数组推荐Array.isArray(要判断的数据)
//对象（除函数，数组）推荐 constructor
// obj.constructor === Object
/**
 *
 * @param {*} target
 * @param  {...any} tail
 */
function myObjectAssign(target) {
    for (var _len = arguments.length, tail = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        tail[_key - 1] = arguments[_key];
    }

    // var
    // console.log(tail)
    tail.forEach(function (item) {
        //遍历对象 for in
        for (var key in item) {
            // console.log(key,item[key])
            if (Array.isArray(item.key) || item[key].constructor === Object) {
                //如果是一个对象（除函数外） 再次遍历
                target[key] = JSON.parse(JSON.stringify(item[key]));
            } else {
                target[key] = item[key];
            }
        }
    });
    return target;
}
var obj = {};
var obj1 = {
    name: "xjm"
};
var obj2 = {
    sex: "女",
    class: {
        grade: "大一",
        classes: "3班"
    }
};

console.log(myObjectAssign(obj, obj1, obj2));
console.log(obj.class === obj2.class); //true

/**真正的实现深复制 */

var jj = {
    name: 'xjm'
};
console.log(jj.__proto__ === Object.prototype); //true
console.log(Object.getPrototypeOf(jj) === Object.prototype); //true

var objPro = { toString: function toString() {
        return 'hello';
    } };
Object.setPrototypeOf(jj, objPro);
console.log(Object.getPrototypeOf(jj) === objPro); //true
console.log(jj.valueOf()); //{ name: 'xjm' }
console.log(jj.toString()); //"hello"

//对象的遍历
//1,for in 2，先搞出entries再去for of遍历entries
for (var key in jj) {
    console.log(key, '----', jj[key]);
}

console.log(Object.keys(jj));
console.log(Object.values(jj));
// console.log()
var ens = Object.entries(jj);

//数组 类数组 set map 等iterable都可以使用for of遍历

/**
 * let en of ens
 * let [key,value] = en;
 * |
 */
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = ens[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _step$value = _slicedToArray(_step.value, 2),
            _key2 = _step$value[0],
            value = _step$value[1];

        console.log(_key2, value);
    }

    //普通函数 this
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

function test() {
    console.log('p');
    console.log(this);
}
// test() //global

// console.log(this) //{}  this 指向模块导出对象  module.exports
// console.log(this === module.exports) //this 指向模块导出对象  module.exports,默认情况下导出空对象

//箭头函数 this
console.log('------');
var test2 = function test2() {
    console.log(undefined);
};
// test2() //{}  this指向箭头函数声明时的父作用域中的this

var oobj = {
    test: test,
    test2: test2
};
oobj.test(); //oobj
oobj.test2(); //{}

//箭头函数内部的arguments不保存实参’

var test3 = function test3() {
    console.log(_arguments);
};
// test3(1,2,3)//arguments不再保存实参，而是一些和模块相关的内容

// function test4(){
//     console.log(this);
//     (()=>
//         console.log(this) //与外面的this保持一致
//     )();
// }

// test4()//两次打印global

var oojj = {
    name: 'xjm'
    // test4


    // oojj.test4() //两次oojj

};function test5() {
    var _this = this;

    console.log(this, '-----');
    return function () {
        console.log(_this, '++++++++');
    };
}
var xjm = {}
// test:test5()  //global -----

// xjm.test() //global ++++

// Array.from()
// Array.of()

;var tmp = {
    "0": 'hello',
    "1": "world",
    length: 2
};
console.log(Array.from(tmp)); //需要length
console.log(Array.of(10)); //用于弥补Array构造函数的不足
console.log(Array.of(10, 11));
console.log(new Array(10));
console.log(new Array(10, 11));
var arr = [24, 25, 34, 56, 7, 24, 34];
// console.log(new Set(arr)) //返回一个Set 对象 Set { 24, 25, 34, 56, 7 }
//想又转成数组 1,使用Array.from 2.使用扩展运算符

console.log(Array.from(new Set(arr))); //[ 24, 25, 34, 56, 7 ]
console.log([].concat(_toConsumableArray(new Set(arr)))); //[ 24, 25, 34, 56, 7 ]

//find findIndex

var result = arr.find(function (item) {
    return item > 30;
}); //返回找到的值
var result2 = arr.findIndex(function (item) {
    return item > 30;
}); //返回找到的位置
console.log(result, result2); //34  2

var xjmArr = [1, 2, 3];
// console.log(xjmArr.fill(9))
// console.log(xjmArr)//会改变原数组

xjmArr.includes(2); //是否包含，返回true/false