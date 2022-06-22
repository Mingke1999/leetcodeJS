
 //Definition for singly-linked list.
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }
 
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
 * online source: https://www.bilibili.com/video/BV1xa411A76q?p=2&spm_id_from=333.880.my_history.page.click&vd_source=08e12d8953ad7877b228b7a898cc2c4d
 */
 var addTwoNumbersBilibili = function(l1, l2) {
    //12/10 -> 1
    //12%10 -> 2
    let total = 0; //final result
    let flag = 0; //check if go next
    let result = new ListNode(0);
    let current = result;

    total = l1.val + l2.val + flag;     // -> 9 + 5 + 0 >10 ? 1 : 0, 2 + 4 + 1> 10 ? 1 : 0
    current.val = total%10;  //14 keeps 4, 7 keeps 7
    flag = parseInt(total/10);  //14 keeps 1      //7 keeps 0
    l1 = l1.next;     //2               //3
    l2 = l2.next;     //4               //5

    //eg. [9,2,3] [5,4,5,5], l1 9,l2 5
    while(l1!=null&&l2!=null){      //make sure there are something
      total = l1.val + l2.val + flag;     // -> 9 + 5 + 0 >10 ? 1 : 0, 2 + 4 + 1> 10 ? 1 : 0
      current.next = new ListNode(total%10);  //14 keeps 4, 7 keeps 7
      flag = parseInt(total/10);  //14 keeps 1      //7 keeps 0
      l1 = l1.next;     //2               //3
      l2 = l2.next;     //4               //5
      current = current.next; //record next digit
    }

    while(l1!=null){
      total = l1.val + flag;
      current.next = new ListNode(total%10);
      flag = parseInt(total/10);
      l1 = l1.next;
      current = current.next;
    }
    while(l2!=null){
      total = l2.val + flag;
      current.next = new ListNode(total%10);
      flag = parseInt(total/10);
      l2 = l2.next;
      current = current.next;
    }
    if(flag!=0){
      current.next = new ListNode(flag);
    }

    return result;
 };
