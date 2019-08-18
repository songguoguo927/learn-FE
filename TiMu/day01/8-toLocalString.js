const date = new Date();                    //浏览器中控制台打印出
console.log(date.toLocaleString());       //2019/8/2 上午11:05:09
console.log(date.toLocaleString('zh'));   //2019/8/2 上午11:05:09
console.log(date.toLocaleString('en'));    //8/2/2019, 11:05:09 AM
console.log(date.toLocaleString('zh', { hour12: true }));
console.log();

//格式化数字，使整数部分每三位加一个逗号
const num = 66666666;
 //66,666,666 
console.log(num.toLocaleString());
console.log(num.toLocaleString('zh', {style: 'decimal'}));
console.log(num.toLocaleString('zh', {style: 'percent'}));
// console.log(num.toLocaleString('zh', {style: 'currency'}));
console.log(num.toLocaleString('zh', {style: 'currency', currency: 'CNY'}));
console.log(num.toLocaleString('zh', { style: 'currency', currency: 'cny', currencyDisplay: 'name' }));

/**`toLocaleString` 方法是用于返回格式化对象后的字符串，这个字符串因不同语言而不同，可以通过传参决定
 * object.toLocaleString([locales [, options]]);
 * 1,locales` 参数用于指定格式化对象时使用的语言环境（不区分大小写），默认为当前环境的语言，可以不传。
 * 2,hour12 表示是使用十二小时制还是二十四小时制，默认值视 `locales` 而定。【Date.prototype.toLocalString对object.toLocaleString补充实现】
 * 3，`style`格式化时使用的样式，可能的值有“decimal”表示纯数字格式，
 * “currency”表示货币格式，"percent"表示百分比格式。默认值是 "decimal"--十进制的逗号分隔3位。
 *      - currency`：在货币格式化中使用的货币符号。可能的值是ISO的货币代码，无默认值。例如"USD" 表示美元，"EUR" 表示欧元，or "CNY"是人民币。
 *          在上面的例子中，报错的那个，是因为一定要提供货币属性，不提供就会报错。
 * 
 * ps.学习资料：[想偷懒的话，toLocaleString 了解一下？](https://juejin.im/post/5ac472016fb9a028c22afa9d?utm_source=gold_browser_extension)
 */