function Set() {
  //Set集合 键值对相同
  let dataStore = {}; //key  这里是对象
  //向集合中添加元素
  this.add = function(val) {
    if (!this.has(val)) {
      dataStore[val] = val;
      // console.log(dataStore)
      return true;
    }
    return false;
  };
  //从集合中移除一个值
  this.remove = function(val) {
    if (this.has(val)) {
      delete dataStore[val];
      return true;
    }
    return;
  };
  //如果集合中有值val 返回true 否则 返回false
  this.has = function(val) {
    return dataStore.hasOwnProperty(val);
  };
  this.clear = function() {
    dataStore = {};
  };
  //返回集合中有多少项
  this.size = function() {
    let count = 0;
    for (let key in dataStore) {
      if (dataStore.hasOwnProperty(key)) {
        ++count;
      }
    }
    return count;
  };
  //返回一个包含集合中所有值的数组
  this.values = function() {
    let values = [];
    for (let key in dataStore) {
      if (dataStore.hasOwnProperty(key)) {
        values.push(dataStore[key]);
      }
    }
    return values;
  };

  this.getSetData = function(){
      return dataStore;
  }
}

let set = new Set();
set.add(1);
set.add(2);
set.add(3);
console.log(set.values());
console.log(set.has(3));
console.log(set.getSetData());

//集合操作
//并集--union
//交集--intersection
//差集--A-B = { x | x ∈ A ∧ x 不∈B } difference
//子集

//ES6的Set与上述我们实现的Set区别
//用ES6的Set实现并 交 差 
