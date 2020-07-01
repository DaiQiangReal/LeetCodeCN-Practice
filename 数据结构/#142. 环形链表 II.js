//https://leetcode-cn.com/problems/linked-list-cycle-ii/
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
var detectCycle = function(head) {
    if(head===null)
        return null;
    let fast=head;
    let slow=head;
    while(true){
        try{
            fast=fast.next.next;
            slow=slow.next;
            if(fast===slow){
                break;
            }
        }catch(e){
            return null;
        }
    }
    fast=head;
    while(true){
        if(fast===slow){
            return fast;
        }
        fast=fast.next;
        slow=slow.next;
    }
};