/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbersSelf = function(l1, l2) {
    let current = l1.head;
    let a = 0;
    while(current!=NULL){
          a = a*10 + current.val
    }
    current = l2.head;
    let b = 0;
    while(current!=NULL){
          b = b*10 + current.val
    }
     let sum  = a + b;
     let digits = 1;
     let temp =sum;
     let x = 10;
     while(temp/10>10){
          temp = current/10;
          digits++;
           }
    const currNode = new ListNode(sum - sum/x);
    for(let i=0;i<digits;i++){
         x =x*10;
         currNode.next(sum - sum/x)
           }
     return currNode;
 };


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    //12/10 -> 1
    //12%10 -> 2
 };