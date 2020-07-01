//https://leetcode-cn.com/problems/linked-list-cycle/
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
var hasCycle = function(head) {
    if(head===null)
        return false;
    let fast=head.next,slow=head;
    while(true){
        try{
            if(fast===slow){
                return true;
            }
            fast=fast.next.next;
            slow=slow.next;
        }catch(e){
            return false;
        }
    }
};