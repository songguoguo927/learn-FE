/**
 * 本章内容包括：
 链表数据结构
 向链表添加元素
 从链表移除元素
 使用LinkedList类 
 双向链表
 循环链表
 */

//为什么数组那么好用还要链表呢？--因为数组的缺点：
//1，数组的大小是固定的，从数组的起点或中间插入或移除项的成本很高（背后的原理）
//链表的优点：
//1，在内存中非连续放置，每个元素有一个存储元素本身的节点和一个指向下一个元素的引用（也称指针或链接）组成
//2，添加或移除元素的时候不需要移动其他元素。（然而，链表需要使用指针，因此实现链表的时候需要额外注意）

//数组也有优点
//1，可以直接访问任何位置的元素
//链表也有缺点
//要想访问链表中间的一个元素，需要从起点开始迭代列表 直到找到所需的元素

//现实链表场景：康佳舞队  寻宝游戏  火车

//创建链表
function LinkedList() {
  //LinkedList数据结构还需要一个Node辅助类
  //Node类表示要加入列表的项
  let Node = function(ele) {
    this.ele = ele;
    this.next = null;
  };
  let length = 0;
  let head = null; //列表中的第一个节点
  //尾部添加新项
  this.append = function(ele) {
    let node = new Node(ele);
    let current;
    if (head === null) {
      head = node;
    } else {
      current = head;
      //循环列表 直到找到最后一项
      while (current.next) {
        current = current.next;
      }
      //找到最后一项，将next赋为node 建立链接
      current.next = node;
    }
    //更新列表长度
    length++;
  };
  //特定位置插入新项
  this.insert = function(position, ele) {
      if(position>=0&&position<=length){
          let node = new Node(ele),
          current=head,
          previous,
          index=0;
          if(position==0){
              node.next = current;
              head = node;
          }else{
              while(index++<position){
                  previous = current;
                  current = current.next;
              }         
              node.next = current;
              previous.next = node;
          }
          length++;
          return true
      }else{
          return false
      }
  };
  //从特定位置移除一项
  this.removeAt = function(position) {
    if (position < length && position > -1) {
        let current = head;
        let previous,index=0;
      if (position == 0) {//移除第一项
        //如果想移除第一个元素，要做的就是让head指向列表的第二个元素
        head = current.next;
      }else{
        while(index++<position){//迭代列表 直到到position位置处
            previous = current;
            current = current.next;
        }
        previous.next = current.next;
      }
      length--;
      return current.ele
    }else{//越界返空
        return null;
    }
  };
  //根据元素的值移除一项
  this.remove = function(ele) {
      let index = this.indexOf(ele)
      return this.removeAt(index)
  };
  //返回元素在列表中的索引 找不到返回-1
  this.indexOf = function(ele) {
      let current = head;//需要一个变量来帮助我们循环访问列表，这个变量是current，它的初始值是head
      let index = 0;//辅助计算位置数
      while(current){
          if(ele===current.ele){
              return index;     
          }
          index++;
          current = current.next
      }
      return -1
  };
  this.isEmpty = function() {
      return length===0
  };
  this.size = function() {
      return length
  };
  this.getHead = function() {
      return head
  };
  this.print = function() {};
  //
  this.toString = function() {
      let current =head;
      let str=""
      while(current){
          str += current.ele + (current.next ? 'n' :'')
          current = current.next
      }
      return str
  };
}
let list = new LinkedList();
list.append(1);
list.append(10);
