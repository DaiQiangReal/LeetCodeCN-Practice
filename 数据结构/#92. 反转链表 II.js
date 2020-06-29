//https://leetcode-cn.com/problems/reverse-linked-list-ii/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    function reverse(node,n){
        if(node===null){
            return null;
        }
        let reversed=node;
        node=node.next;
        reversed.next=null;
        let end=reversed;
        let count=1;
        while(node!==null&&count<n){
            let temp=node.next;
            node.next=reversed;
            reversed=node;
            node=temp;
            count++;
        }
        end.next=node
        return reversed;
    }
    let start=head;
    let count=1;
    let temp=null;
    while(head.next!==null&&count<=m-1){
        if(count===m-1){
            temp=head;
        }
        head=head.next;
        count++;
    }
    let done=reverse(head,n-m+1);
    if(temp===null){
        return done;
    }
    temp.next=done;
    return start;
};

console.log(JSON.stringify(reverseBetween({val:1,next:{val:2,next:{val:3,next:{val:4,next:{val:5,next:null}}}}},2,4)));
 