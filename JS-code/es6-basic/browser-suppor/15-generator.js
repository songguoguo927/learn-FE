'use strict';

{
  // generator基本定义
  var tell = /*#__PURE__*/regeneratorRuntime.mark(function tell() {
    return regeneratorRuntime.wrap(function tell$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return 'a';

          case 2:
            _context.next = 4;
            return 'b';

          case 4:
            return _context.abrupt('return', 'c');

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, tell, this);
  });

  var k = tell();

  console.log(k.next());
  console.log(k.next());
  console.log(k.next());
  console.log(k.next());
}

{
  var obj = {};
  obj[Symbol.iterator] = /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return 1;

          case 2:
            _context2.next = 4;
            return 2;

          case 4:
            _context2.next = 6;
            return 3;

          case 6:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee, this);
  });

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = obj[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var value = _step.value;

      console.log('value', value);
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
//状态机
{
  var state = /*#__PURE__*/regeneratorRuntime.mark(function state() {
    return regeneratorRuntime.wrap(function state$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!1) {
              _context3.next = 9;
              break;
            }

            _context3.next = 3;
            return 'A';

          case 3:
            _context3.next = 5;
            return 'B';

          case 5:
            _context3.next = 7;
            return 'C';

          case 7:
            _context3.next = 0;
            break;

          case 9:
          case 'end':
            return _context3.stop();
        }
      }
    }, state, this);
  });
  var status = state();
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
}

// {
//   let state=async function (){
//     while(1){
//       await 'A';
//       await 'B';
//       await 'C';
//     }
//   }
//   let status=state();
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
// }


//实例，抽奖业务，长轮询