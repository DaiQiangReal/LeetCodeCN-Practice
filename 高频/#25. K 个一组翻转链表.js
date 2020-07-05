//https://leetcode-cn.com/problems/reverse-nodes-in-k-group/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {

    let newHead=head;
    for(let i=1;i<k;i++){
        if(newHead===null){
            return head;
        }
        newHead=newHead.next;
    }
    let start=head;
    let kNode=null;;
    while(true){
        start=reverseFirstKnodes(start,k);
        if(kNode!==null)
            kNode.next=start;
        for(let i=1;i<=k;i++){
            kNode=start;
            start=start.next;
            if(start===null){
                return newHead;
            }
        }
    }
    function reverseFirstKnodes(head){
        let temp=head;
        let count=1;
        while(temp!==null){
            temp=temp.next;
            count++;
            if(count===k){
                break;
            }
        }
        if(temp===null)
            return head;
        let lastNodes=temp.next;
        //reverse 前面的node
        let reversed=head;
        let node=head.next;
        while(node!==lastNodes){
            let temp=node.next;
            node.next=reversed;
            reversed=node;
            node=temp;
        }
        head.next=lastNodes;
        return reversed;
    }
};
console.log(JSON.stringify(reverseKGroup({val:1,next:{val:2,next:{val:3,next:{val:4,next:{val:5,next:null}}}}},2)));