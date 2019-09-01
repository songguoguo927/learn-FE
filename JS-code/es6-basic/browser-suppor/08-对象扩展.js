'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

{
  // 简洁表示法
  var o = 1;
  var k = 2;
  var es5 = {
    o: o,
    k: k
  };
  var es6 = {
    o: o,
    k: k
  };
  console.log(es5, es6);
  //对象中方法写法的不同
  var es5_method = {
    hello: function hello() {
      console.log('hello');
    }
  };
  var es6_method = {
    hello: function hello() {
      console.log('hello');
    }
  };
  console.log(es5_method.hello(), es6_method.hello());
}

{
  // 属性表达式
  var a = 'b';
  var es5_obj = {
    a: 'c',
    b: 'c'
  };

  var es6_obj = _defineProperty({}, a, 'c');

  console.log(es5_obj, es6_obj);
}

{
  // 新增API
  console.log('字符串', Object.is('abc', 'abc'), 'abc' === 'abc');
  console.log('数组', Object.is([], []), [] === []);

  console.log('拷贝', Object.assign({ a: 'a' }, { b: 'b' }));

  var test = { k: 123, o: 456 };
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.entries(test)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];

      console.log([key, value]);
    }
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
}

{
  // 扩展运算符
  // let {a,b,...c}={a:'test',b:'kill',c:'ddd',d:'ccc'};
  // c={
  //   c:'ddd',
  //   d:'ccc'
  // }
}