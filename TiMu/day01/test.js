Function.prototype.myBind = function(){
	var fn = this;
	// var args = Array.prototype.slice.call(arguments);
	// var context = args.shift();//shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
    var args = Array.prototype.slice.call(arguments,1);
	return function(){
		return fn.apply(context,
			args.concat(Array.prototype.slice.call(arguments)));
	};
};
var obj = {name:'xjm'}
te.myBind(obj,1,2,3)()
/**{ name: 'xjm' }
[Arguments] { '0': 1, '1': 2, '2': 3 }
[ 1, 2, 3 ]
[ 3 ] */
function te(){
    console.log(this)
    console.log(arguments)
    console.log(Array.prototype.slice.call(arguments,0))
    console.log(Array.prototype.slice.call(arguments,2))
}
// te(1,2,3,4)
/*[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
[ 1, 2, 3, 4 ]
[ 3, 4 ]*/


// 柯里化函数思想实现bind
// 结合事件绑定event进行理解
document.body.onclick = fn.myBind(obj,100,200)