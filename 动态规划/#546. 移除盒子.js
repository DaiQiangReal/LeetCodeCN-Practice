//https://leetcode-cn.com/problems/remove-boxes/
/**
 * @param {number[]} boxes
 * @return {number}
 */
//[1, 3, 2, 2, 2, 3, 4, 3, 1]
//2020-06-21 超时
let data=new Map();
var removeBoxes = function(boxes) {
    
    if(boxes.length===1)
        return 1;
    let str=boxes.toString();
    let reverseStr=boxes.reverse().toString();
    if(data.has(str)||data.has(reverseStr)){
        return data.get(str);
    }
    let pointMax=0;
    for(let i=0;i<boxes.length;i++){
        for(let j=i+1;j<boxes.length;j++){
            if(boxes[j]!==boxes[i]){
                let point=(j-i)*(j-i);
                let temp=JSON.parse(JSON.stringify(boxes));
                temp.splice(i,(j-i));
                point+=removeBoxes(temp);
                if(point>pointMax)
                    pointMax=point;
                i=j-1;
                break;
            }
            if(j===boxes.length-1){
                j++;
                let point=(j-i)*(j-i);
                let temp=JSON.parse(JSON.stringify(boxes));
                temp.splice(i,(j-i));
                point+=removeBoxes(temp);
                if(point>pointMax)
                    pointMax=point;
                i=j-1;
                break;
            }
        }
    }
    data.set(str,pointMax);
    return pointMax;
};

console.log(removeBoxes([3,8,8,5,5,3,9,2,4,4,6,5,8,4,8,6,9,6,2,8,6,4,1,9,5,3,10,5,3,3,9,8,8,6,5,3,7,4,9,6,3,9,4,3,5,10,7,6,10,7]));


