/**
 * 对字符串进行遍历，使用String.prototype.indexOf()实时获取遍历过程中的无重复子串并存放于str，并保存当前状态最长无重复子串的长度为res，
 * 当遍历结束时，res的值即为无重复字符的最长子串的长度。
 */
var lengthOfLongestSubstring = function(s) {
  var res = 0; //用于存放当前最长无重复子串的长度
  var str = ""; //用于存放无重复子串

  var len = s.length;
  for (var i = 0; i < len; i++) {
    var char = s.charAt(i);//获取i下标所在是什么字符串
    var index = str.indexOf(char);//判断i下标所在的字符串是否存在于 我们目标str
    if (index === -1) {//如果不在
      str += char;//将该字符串加入str
      res = res < str.length ? str.length : res;//并且计算
    } else {
      str = str.substr(index + 1) + char;
    }
  }
  return res
};