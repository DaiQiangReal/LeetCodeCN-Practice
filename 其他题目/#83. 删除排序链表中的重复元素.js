//https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(head===null||head.next===null){
        return  head;
    }
    let slow=head;
    let fast=head.next;
    while(fast!==null){
        if(fast.val!==slow.val){
            slow.next=fast;
            slow=slow.next;
        }
        fast=fast.next;
    }
    slow.next=null;
    return head;
};