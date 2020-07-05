/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(head===null)
        return true;
    // function reverse(head){
    //     if(head===null)
    //         return null;
    //     if(head.next===null)
    //         return head;
    //     let list=reverse(head.next);
    //     head.next.next=head;
    //     head.next=null;
    //     return list;
    // }
    function reverse(head){
        if(head===null)
            return null;
        let pre=null;
        let cur=head;
        let next=head;
        while(cur!==null){
            next=cur.next;
            cur.next=pre;
            pre=cur;
            cur=next;
        }
        return pre;
    }
    let slow=head;
    let fast=head;
    while(fast!==null&&fast.next!==null){
        slow=slow.next;
        fast=fast.next.next;
    }
    if(fast!==null){
        slow=slow.next;
    }
    let reversed=reverse(slow)
    while(reversed!==null){
        if(head.val!==reversed.val)
            return false;
        head=head.next;
        reversed=reversed.next;
    }
    return true;
};
console.log(JSON.stringify(isPalindrome({ val: 1, next: { val: 2, next: { val: 3, next: { val: 1,next: null } } }  })));
