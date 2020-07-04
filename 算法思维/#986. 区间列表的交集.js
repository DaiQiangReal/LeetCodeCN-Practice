//https://leetcode-cn.com/problems/interval-list-intersections/
/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
    let array=A.concat(B).sort((list1,list2)=>list1[0]-list2[0]);
    let ans=[]
    for(let i=0;i<array.length-1;i++){
        if(array[i][1]>=array[i+1][0]){
            if(array[i][1]>=array[i+1][1]){
                ans.push([array[i+1][0],array[i+1][1]]);
                array.splice(i+1,1);
                i--;
                continue;
            }else{
                ans.push([array[i+1][0],array[i][1]]);
                continue;
            }
        }
    }
    return ans;
};
console.log(intervalIntersection([[0,2],[5,10],[13,23],[24,25]],[[1,5],[8,12],[15,24],[25,26]]));
