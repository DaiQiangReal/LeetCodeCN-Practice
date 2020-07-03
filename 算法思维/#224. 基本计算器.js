//https://leetcode-cn.com/problems/basic-calculator/
/**
 * @param {string} s
 * @return {number}
 */
//time out
// var calculate = function(s) {
//     if(s[0]!=='-'){
//         s="+".concat(s);
//     }
//     s=s.split("").filter((char)=>char!==' ');
//     function helper(s){
//         let stack=[];
//         let temp=[]
//         while(s.length>0){

//             let char=s.shift();
//             if(char==='('){
//                 let numInBracket=helper(s);
//                 if(temp[0]==='-')
//                     numInBracket=-numInBracket;
//                 stack.push(numInBracket);
//                 temp=[];
//                 continue;
//             }
//             if(char===')')
//                 break;
//             if((char==='+'||char==='-')&&temp.length!==0){
//                 stack.push(Number.parseInt(temp.join("")));
//                 temp=[];
//             }
//             temp.push(char);
//         }
//         if(temp.length!==0)
//             stack.push(Number.parseInt(temp.join("")));
//         let sum=0;
//         stack.forEach((num)=>sum+=num); 
//         return sum;
//     }
//     return helper(s)
// };
var calculate = function (s) {
    let sum = 0,
        stack = [],
        sign = 1,
        i = 0,
        n = s.length;

    while (i < n) {
        let c = s.charAt(i);
        if (c === ' ') {
            i++;
        }
        else if (c === '-') {
            sign = -1;
            i++;
        }
        else if (c === '+') {
            sign = 1;
            i++;
        }
        else if (c === '(') {
            stack.push(sum, sign);
            sum = 0;
            sign = 1;
            i++;
        }
        else if (c === ')') {
            sum = sum * stack.pop() + stack.pop();
            i++;
        }
        else {
            let temp = c;
            i++;
            while (i < n && isNumber(s.charAt(i))) {
                temp += s.charAt(i);
                i++;
            }
            sum += Number(temp) * sign;
        }
    }
    console.log(stack);
    return sum;
};
function isNumber(n) {
    n = Number(n);
    return typeof n === 'number' && !isNaN(n);
}
console.log(calculate("(-1+(4+5-2)-3)-(6-4)"));
