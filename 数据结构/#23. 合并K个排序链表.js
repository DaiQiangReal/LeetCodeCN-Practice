//https://leetcode-cn.com/problems/merge-k-sorted-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    
    function merge(list1,list2){
        if(list1===null)
            return list2;
        if(list2===null)
            return list1;
        let big=list1.val>=list2.val?list1:list2;
        let small=list1.val<list2.val?list1:list2;
        small.next=merge(small.next,big);
        return small;
    }
    return lists.reduce((list1,list2)=>merge(list1,list2),null);
};

// [[1,4,5],[1,3,4],[2,6]]
let test=[{val:1,next:{val:4,next:{val:5,next:null}}},{val:1,next:{val:3,next:{val:4,next:null}}},{val:2,next:{val:6,next:null}}]
console.log(JSON.stringify(mergeKLists(test)));
