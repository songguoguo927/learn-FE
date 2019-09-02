//先进先出
//现Queue类和Stack类非常类似，只是添加和移除元素的原则不同

//普通队列
let Queue = (function() {
  let dataStore = new WeakMap();
  class Queue {
    constructor() {
      dataStore.set(this, []);
    }
    //入队
    enqueue(ele) {
      let q = dataStore.get(this);
      q.push(ele);
    }
    //出队
    dequeue() {
      let q = dataStore.get(this);
      q.shift();
    }
    //返回队头
    front() {
      let q = dataStore.get(this);
      return q[0];
    }
    isEmpty() {
      let q = dataStore.get(this);
      return q.length == 0;
    }
    size() {
      let q = dataStore.get(this);
      return q.length;
    }
    print() {
      let q = dataStore.get(this);
      console.log(q.toString());
    }
  }
  return Queue;
})();
//优先队列--普通队列的修改版本
//元素的添加和移除是基于优先级的
//实际场景运用：1，机场登机顺序 2，医院急诊科优先处理病情严重的病人

//实现一个优先队列有两种思路：
//1，进队时处理：设置优先级，进队时处理---即在正确的位置添加元素
//2，出队时处理：用入列操作添加元素，然后按照优先级移除它们，优先出队---
//我这里priority越大优先级越高---最大优先队列；还有最小优先队列，与之相反
let PriorityQueue = (function() {
  let dataStore = new WeakMap();
  class PriorityQueue {
    constructor() {
      dataStore.set(this, []);
    }
    //内部对入队保存的元素做一些操作
    //期望保存 this [{el:el,prior:prior},{}]
    //入队
    enqueue(ele, priority = 0) {
      let q = dataStore.get(this);

      // console.log(111)
      if (q.length == 0) {
        //如果当前队列为空直接插入
        q.push({ ele, priority });
        return;
      } else {
        let flagFind = false;
        //如果不为空 遍历队列中的元素比较当前要插入的元素优先级和队列中的元素优先级
        //当找到一个比要添加的元素的priority值更小的项时，就把新元素插入到它之前
        //如果没有小于要插入元素的优先级的，则插入到队尾
        q.forEach((item, index) => {        
            while (priority > item.priority) {//结束条件是找到一个小于priority的项
              q.splice(index, 0, { ele, priority });
              flagFind = true;
              break;
            }           
        });
        if (!flagFind) {
              //没找到---没有小于要插入元素的优先级的
              q.push({ ele, priority })            
        }
      }
    }
    //出队
    dequeue() {
      let q = dataStore.get(this);
      return q.shift().ele;
    }
    //返回队头
    front() {
      let q = dataStore.get(this);
      return q[0].ele;
    }
    isEmpty() {
      let q = dataStore.get(this);
      return q.length == 0;
    }
    size() {
      let q = dataStore.get(this);
      return q.length;
    }
    print() {
      let q = dataStore.get(this);
      console.log(q);
    }
  }
  return PriorityQueue;
})();
let que = new PriorityQueue();
que.enqueue(2, 10);
que.enqueue(3,13)
que.enqueue(1); 
que.enqueue(2,7); 
que.print(); //预期[ { ele: 3, priority: 13 }, { ele: 2, priority: 10 } , { ele: 2, priority: 7 } ,{ele:1,priority:0}]
// console.log(que.isEmpty())
