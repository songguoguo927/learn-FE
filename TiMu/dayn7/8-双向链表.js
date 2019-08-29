// 双向链表和普通链表的区别在于，在链表中，
// 一个节点只有链向下一个节点的链接，
// 而在双向链表中，链接是双向的：一个链向下一个元素，
// 另一个链向前一个元素，
//双向链表提供了两种迭代列表的方法：从头到尾，或者反过来。
//我们可以同问一个特定节点的下一个或前一个元素

// 单链表的缺点：如果迭代列表错过了元素需要回到列表起点重新开始迭代，同时这也是双向链表的优点
function DoublyLinkList() {
  let Node = function(ele) {
    this.ele = ele;
    this.next = null;
    this.prev = null;
  };
  let length = 0;
  let head = null;
  let tail = null;
  //任意位置插入新元素
  this.insert = function(position, ele) {
    if (position < length && position > -1) {
      let node = new Node(ele),
        current = head,
        previous,
        index = 0;
      if (position === 0) {
        //加到首位
        if (!head) {
          //作为历史第一个新增
          head = node;
          tail = node;
        } else {
          //列表中已有项
          node.next = current;
          current.prev = node;
          head = node;
        }
      } else if (position === length) {
        //加到最后一位
        current = tail;
        current.next = node;
        node.prev = current;
        tail = node;
      } else {
        //添加至中间
        while (index++ < position) {
            previous = current
            current = current.next
        }
        //改变指针指向的节点
        node.next = current;
        previous.next = node;
        current.prev = node;
        node.prev = previous;
      }
      length++
      return true
    }else{return false}
  };
  //任意位置删除元素
  this.removeAt = function(position){
      if(position>-1&&position<length){
        let current=head,
        previous,index=0;
        if(position===0){//移除第一项
            head = current.next
            if(length===1){//移除仅有的一项
                tail = null;
            }else{
                head.prev = null;
            }

        }else if(position===length-1){//移除最后一项
            current = tail;
            tail = current.prev;
            tail.next = null;
        }else{//移除中间的某一项
            while(index++<position){
                previous = current;
                current = current.next;
            }
            previous.next = current.next
            current.next.prev = previous
        }
        length--;
        return current.ele;
      }else{
          return null
      }
  }
}
