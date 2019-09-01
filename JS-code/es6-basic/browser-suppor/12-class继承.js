'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

{
  // 基本定义和生成实例
  var Parent = function Parent() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'mukewang';

    _classCallCheck(this, Parent);

    this.name = name;
  };

  var v_parent = new Parent('v');
  console.log('构造函数和实例', v_parent);
}

{
  // 继承
  var _Parent = function _Parent() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'mukewang';

    _classCallCheck(this, _Parent);

    this.name = name;
  };

  var Child = function (_Parent2) {
    _inherits(Child, _Parent2);

    function Child() {
      _classCallCheck(this, Child);

      return _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).apply(this, arguments));
    }

    return Child;
  }(_Parent);

  console.log('继承', new Child());
}

{
  // 继承传递参数
  var _Parent3 = function _Parent3() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'mukewang';

    _classCallCheck(this, _Parent3);

    this.name = name;
  };

  var _Child = function (_Parent4) {
    _inherits(_Child, _Parent4);

    function _Child() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'child';

      _classCallCheck(this, _Child);

      var _this2 = _possibleConstructorReturn(this, (_Child.__proto__ || Object.getPrototypeOf(_Child)).call(this, name));

      _this2.type = 'child';
      return _this2;
    }

    return _Child;
  }(_Parent3);

  console.log('继承传递参数', new _Child('hello'));
}

{
  // getter,setter
  var _Parent5 = function () {
    function _Parent5() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'mukewang';

      _classCallCheck(this, _Parent5);

      this.name = name;
    }

    _createClass(_Parent5, [{
      key: 'longName',
      get: function get() {
        return 'mk' + this.name;
      },
      set: function set(value) {
        this.name = value;
      }
    }]);

    return _Parent5;
  }();

  var v = new _Parent5();
  console.log('getter', v.longName);
  v.longName = 'hello';
  console.log('setter', v.longName);
}

{
  // 静态方法
  var _Parent6 = function () {
    function _Parent6() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'mukewang';

      _classCallCheck(this, _Parent6);

      this.name = name;
    }

    _createClass(_Parent6, null, [{
      key: 'tell',
      value: function tell() {
        console.log('tell');
      }
    }]);

    return _Parent6;
  }();

  _Parent6.tell();
}

{
  // 静态属性
  var _Parent7 = function () {
    function _Parent7() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'mukewang';

      _classCallCheck(this, _Parent7);

      this.name = name;
    }

    _createClass(_Parent7, null, [{
      key: 'tell',
      value: function tell() {
        console.log('tell');
      }
    }]);

    return _Parent7;
  }();

  _Parent7.type = 'test';

  console.log('静态属性', _Parent7.type);
}