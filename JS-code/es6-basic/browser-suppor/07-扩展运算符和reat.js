'use strict';

{
  var test = function test(x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'world';

    console.log('默认值', x, y);
  };

  test('hello');
  test('hello', 'kill');
}

{
  var test2 = function test2(x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;

    console.log('作用域', x, y);
  };

  var x = 'test';

  test2('kill');
}

{
  var test3 = function test3() {
    for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
      arg[_key] = arguments[_key];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = arg[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var v = _step.value;

        console.log('rest', v);
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
  };

  test3(1, 2, 3, 4, 'a');
}

{
  var _console, _console2;

  (_console = console).log.apply(_console, [1, 2, 4]);
  (_console2 = console).log.apply(_console2, ['a'].concat([1, 2, 4]));
}

{
  var arrow = function arrow(v) {
    return v * 2;
  };
  var arrow2 = function arrow2() {
    return 5;
  };
  console.log('arrow', arrow(3));
  console.log(arrow2());
}
//尾调用，提升性能'
{
  var tail = function tail(x) {
    console.log('tail', x);
  };

  var fx = function fx(x) {
    return tail(x);
  };

  fx(123);
}