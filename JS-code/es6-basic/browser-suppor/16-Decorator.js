'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

{
  var readonly = function readonly(target, name, descriptor) {
    descriptor.writable = false;
    return descriptor;
  };

  // class Test{
  //   @readonly
  //   time(){
  //     return '2017-03-11'
  //   }
  // }

  var test = new Test();

  // test.time=function(){
  //   console.log('reset time');
  // };

  console.log(test.time());
}

{
  var typename = function typename(target, name, descriptor) {
    target.myname = 'hello';
  };

  // @typename

  var _Test = function _Test() {
    _classCallCheck(this, _Test);
  };

  console.log('类修饰符', _Test.myname);
  // 第三方库修饰器的js库：core-decorators; npm install core-decorators
}