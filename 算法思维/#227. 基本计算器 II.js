//https://leetcode-cn.com/problems/basic-calculator-ii/
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let sum = 0,
        sign = 1,
        i = 0,
        n = s.length;
        let md=0;
    let numStack=[];
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
            
        }else if (c==='*'){
            md=1;
            sign=1;
            i++;
        }else if (c==='/'){
            md=2;
            sign=1;
            i++;
        }
        // else if (c === '(') {
        //     stack.push(sum, sign);
        //     sum = 0;
        //     sign = 1;
        //     i++;
        // }
        // else if (c === ')') {
        //     sum = sum * stack.pop() + stack.pop();
        //     i++;
        // }
        else {
            let temp = c;
            i++;
            while (i < n && isNumber(s.charAt(i))) {
                temp += s.charAt(i);
                i++;
            }
            
            let num=Number(temp)*sign;
            if(md===1){
                numStack[numStack.length-1]=numStack[numStack.length-1]*num;
                md=0;
            }else if(md===2){
                numStack[numStack.length-1]=sign*(numStack[numStack.length-1]>0?(Math.floor(numStack[numStack.length-1]/num)):(-Math.floor(-numStack[numStack.length-1]/num)));
                md=0;
            }else{
                numStack.push(num)
            }
            
        }
    }
    numStack.map((num)=>sum+=num)
    return sum;
};
function isNumber(n) {
    n = Number(n);
    return typeof n === 'number' && !isNaN(n);
}
console.log(calculate('140-3/2'));

