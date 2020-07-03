//https://leetcode-cn.com/problems/merge-intervals/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((list1,list2)=>list1[0]-list2[0]);
    for(let i=0;i<intervals.length-1;i++){
        if(intervals[i][1]>=intervals[i+1][0]){
            if(intervals[i][1]>intervals[i+1][1]){
                let list=[intervals[i][0],intervals[i][1]];
                intervals[i]=list;
                intervals.splice(i+1,1);
                i--;
                continue;
            }else{
                let list=[intervals[i][0],intervals[i+1][1]];
                intervals[i]=list;
                intervals.splice(i+1,1);
                i--;
                continue;
            }
        }
    }
    return intervals;
};
console.log(merge([[1,4],[4,5]]));
