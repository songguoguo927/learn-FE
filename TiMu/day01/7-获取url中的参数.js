function getUrlParam(sUrl, sKey) {
  var obj = {}; //用于存放参数的对象
  /* var start = sUrl.indexOf("?");
  if (start == -1) {
    console.log("url中没有拼接参数");
    return obj;
  }
  var end = sUrl.indexOf("#");
  var arr = sUrl.slice(start + 1, end).split("&");*/

  //   var reg = /\??(\w+)=(\w+)&?/g
  var reg = /(\w+)=(\w+)/g;
  // console.log(sUrl.match(reg))
  var arr = sUrl.match(reg);

  arr.forEach(function(item) {
    var itemArr = item.split("=");
    var key = itemArr[0];
    var value = itemArr[1];

    console.log(value);
    // if(value==''){
    //     continue;
    // }
    if (obj.hasOwnProperty(key)) {
      //如果参数名相同
      //判断值，为数组，直接push，不为数组，需要转成数组--->创建一个数组空间，将之前和当前的值都存进去
      if (Array.isArray(obj[key])) {
        obj[key].push(value);
      } else {
        var temp = [];
        temp.push(obj[key], value);
        obj[key] = temp;
      }
    } else {
      //默认直接 放进对象
      obj[key] = value;
    }
  });
  // console.log(obj);
  // if (sKey != undefined) {
  //   return obj[sKey] ? obj[sKey] :""   
  // } else {
  //   return obj;
  // }
  return sKey != undefined ? obj[sKey] ? obj[sKey] :"" :obj
}
var result = getUrlParam(
  "http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe",
  "key"
); //[1,2,3]

console.log(result);
/**
 * 思路讲解：
1，根据获得的url路径字符串进行切割，把？和#之间的字符串截取出来。得到类似`key=1&key=2&key=3&test=4`的字符串再使用split方法按照&隔开变成数组`['key=1','key=2',...]`这种形式。
2，将得到的数组进行forEach遍历，对每一项又进行拆分成数组，这样数组的第一项作为key，第二项作为value，放进obj中，需要注意的是当有参数名相同时，不能进行覆盖，所以要把obj中有的参数名对应的值放进数组中，新加的值也放到数组中，再把整个数组重新赋给obj[key].
3,最后就是根据有无传递查询的sKey参数进行相应的返回值判断。

优化：思路大概就是这样，后续可以尝试对代码进行优化，利用正则去匹配要的字符串。
 */
