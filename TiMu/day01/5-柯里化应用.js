// https://cnodejs.org/topic/5884574e250bf4e2390e9e99
// 其实在实际使用中使用最多的一个柯里化的例子就是Function.prototype.bind()函数
Function.prototype.bind = function(){
	var fn = this;
	var args = Array.prototype.slice.call(arguments);
	var context = args.shift();//shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。

	return function(){
		return fn.apply(context,
			args.concat(Array.prototype.slice.call(arguments)));
	};
};

function plus(num) {
    var adder = function () {
        var _args = [];
        var _adder = function _adder() {
            [].push.apply(_args, [].slice.call(arguments));
            return _adder;
        };

        _adder.toString = function () {
            return _args.reduce(function (a, b) {
                return a + b;
            });
        }

        return _adder;
    }
    return adder()(num);
}

module.exports = plus;

/**
 * 外部使用
 */
plus(1)(4)(2)(3).toString()