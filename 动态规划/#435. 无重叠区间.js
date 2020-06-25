//https://leetcode-cn.com/problems/non-overlapping-intervals/
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    let originLen=intervals.length;
    intervals.sort((list1,list2)=>list1[list1.length-1]-list2[list2.length-1])
    for(let i=1;i<intervals.length;i++){
        if(intervals[i][0]>=intervals[i-1][intervals[i-1].length-1]){
            continue;
        }
        intervals.splice(i,1);
        i-=1;
    }
    return originLen-intervals.length;
    
};
console.log(eraseOverlapIntervals([  ]));
