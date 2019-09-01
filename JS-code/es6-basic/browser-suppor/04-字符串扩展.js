'use strict';

var _templateObject = _taggedTemplateLiteral(['i am ', ',', ''], ['i am ', ',', '']),
    _templateObject2 = _taggedTemplateLiteral(['Hi\n', ''], ['Hi\\n', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

{
  console.log('a', 'a');
  console.log('s', '\u20BB7');

  console.log('s', '\uD842\uDFB7');
}

{
  var s = '𠮷';
  console.log('length', s.length);
  console.log('0', s.charAt(0));
  console.log('1', s.charAt(1));
  console.log('at0', s.charCodeAt(0));
  console.log('at1', s.charCodeAt(1));

  var s1 = '𠮷a';
  console.log('length', s1.length);
  console.log('code0', s1.codePointAt(0));
  console.log('code0', s1.codePointAt(0).toString(16));
  console.log('code1', s1.codePointAt(1));
  console.log('code2', s1.codePointAt(2));
}

{
  console.log(String.fromCharCode("0x20bb7")); //es5
  console.log(String.fromCodePoint("0x20bb7")); //es6
}

{
  var str = '\uD842\uDFB7abc';
  for (var i = 0; i < str.length; i++) {
    console.log('es5', str[i]);
  }
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = str[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var code = _step.value;

      console.log('es6', code);
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
  var _str = "string";
  console.log('includes', _str.includes("c"));
  console.log('start', _str.startsWith('str'));
  console.log('end', _str.endsWith('ng'));
}

{
  var _str2 = "abc";
  console.log(_str2.repeat(2));
}

{
  var name = "list";
  var info = "hello world";
  var m = 'i am ' + name + ',' + info;
  console.log(m);
}

{
  console.log('1'.padStart(2, '0'));
  console.log('1'.padEnd(2, '0'));
}

{
  var abc = function abc(s, v1, v2) {
    console.log(s, v1, v2);
    return s + v1 + v2;
  };

  var user = {
    name: 'list',
    info: 'hello world'
  };
  console.log(abc(_templateObject, user.name, user.info));
}

{
  console.log(String.raw(_templateObject2, 1 + 2));
  console.log('Hi\n' + (1 + 2));
}