/**
 * @param {string} s
 * @return {number}
 */
// var countBinarySubstrings = function(s) {

// };
export default (str) => {
  //建立数据结构 堆栈 保存数据
  let r = [];
  //给定任意子输入都返回第一个符合条件（具有相同数量的连续的1和0）的子串
  let match = str => {
    let j = str.match(/^(0+|1+)/)[0];
    let o = (j[0] ^ 1).toString().repeat(j.length);
    //使用正则对象，
    let reg = new RegExp(`^(${j}${o})`);
    if (reg.test(str)) {
      return RegExp.$1;
    } else return "";
  };
  for (let i = 0, len = str.length - 1; i < len; i++) {
    let sub = match(str.slice(i));
    if (sub) {
      r.push(sub);
    }
  }
  return r;
};
