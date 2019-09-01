/**
 * Definition for singly-linked list.单链表
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 题目意思是，我们可以直接调用addTwoNumbers(432,456) 直接有结果出来，相当于手动实现加法，。
 * 只是这里的数据的存储结构为链表432为2->3->4;456为6->5->4，且每个数字占一个节点
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    //定义一个新链表res，一个temp的链表cur，用来当作res的指针，一个进位标志carry
    let res = new ListNode(-1),
        cur = res,
        carry = 0;
    
};