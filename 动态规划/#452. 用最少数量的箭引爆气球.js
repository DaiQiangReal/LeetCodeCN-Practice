//https://leetcode-cn.com/problems/minimum-number-of-arrows-to-burst-balloons/
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    if(points.length===0)
        return 0;
    points.sort((list1,list2)=>list1[list1.length-1]-list2[list2.length-1]);
    let arrow=1;
    let lastShot=0
    for(let i=1;i<points.length;i++){
        if(points[i][0]>points[lastShot][points[lastShot].length-1]){
            arrow+=1;
            lastShot=i;
            continue;
        }
       
    }
    return arrow;
};
console.log(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]));
