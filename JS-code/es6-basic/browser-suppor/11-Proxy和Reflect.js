'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

{
  var obj = {
    time: '2017-03-11',
    name: 'net',
    _r: 123
  };

  var monitor = new Proxy(obj, {
    // 拦截对象属性的读取
    get: function get(target, key) {
      return target[key].replace('2017', '2018');
    },

    // 拦截对象设置属性
    set: function set(target, key, value) {
      if (key === 'name') {
        return target[key] = value;
      } else {
        return target[key];
      }
    },

    // 拦截key in object操作
    has: function has(target, key) {
      if (key === 'name') {
        return target[key];
      } else {
        return false;
      }
    },

    // 拦截delete
    deleteProperty: function deleteProperty(target, key) {
      if (key.indexOf('_') > -1) {
        delete target[key];
        return true;
      } else {
        return target[key];
      }
    },

    // 拦截Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
    ownKeys: function ownKeys(target) {
      return Object.keys(target).filter(function (item) {
        return item != 'time';
      });
    }
  });

  console.log('get', monitor.time);

  monitor.time = '2018';
  monitor.name = 'mukewang';
  console.log('set', monitor.time, monitor);

  console.log('has', 'name' in monitor, 'time' in monitor);

  // delete monitor.time;
  // console.log('delete',monitor);
  //
  // delete monitor._r;
  // console.log('delete',monitor);
  console.log('ownKeys', Object.keys(monitor));
}

{
  var _obj = {
    time: '2017-03-11',
    name: 'net',
    _r: 123
  };

  console.log('Reflect get', Reflect.get(_obj, 'time'));
  Reflect.set(_obj, 'name', 'mukewang');
  console.log(_obj);
  console.log('has', Reflect.has(_obj, 'name'));
}
//改变直接操作object的习惯，通过reflect来操作、取

// Proxy和 Reflect实现和业务解耦的校验模块
//代码维护，整洁性，健壮性，可复用性都很棒
//eg.数据校验
{
  var validator = function validator(target, _validator) {
    return new Proxy(target, {
      _validator: _validator, //保存配置选项
      set: function set(target, key, value, proxy) {
        if (target.hasOwnProperty(key)) {
          var va = this._validator[key];
          if (!!va(value)) {
            return Reflect.set(target, key, value, proxy);
          } else {
            throw Error('\u4E0D\u80FD\u8BBE\u7F6E' + key + '\u5230' + value);
          }
        } else {
          throw Error(key + ' \u4E0D\u5B58\u5728');
        }
      }
    });
  };

  var personValidator = {
    name: function name(val) {
      return typeof val === 'string';
    },
    age: function age(val) {
      return typeof val === 'number' && val > 18;
    }
  };

  var Person = function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
    return validator(this, personValidator);
  };

  var person = new Person('lilei', 30);
  console.info(person);
  // person.name=40;//buxing
  person.name = 'hanmeimei';
  console.info(person);
}