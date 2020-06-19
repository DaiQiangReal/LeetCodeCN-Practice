//https://leetcode-cn.com/problems/can-i-win/

/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function (maxChoosableInteger, desiredTotal) {
    if (maxChoosableInteger >= desiredTotal)
        return true;
    if (desiredTotal <= 0)
        return true;
    let sum = (1 + maxChoosableInteger) * maxChoosableInteger / 2;
    if (sum < desiredTotal)
        return false;
    if (sum === desiredTotal) {
        if (maxChoosableInteger % 2 === 0)
            return false;
        return true;
    }
    let chose = [false];
    for (let i = 1; i <= maxChoosableInteger; i++)
        chose[i] = false;
    let calculated = new Map();

    function helper(chose, sum) {
        
        if (sum >= desiredTotal) {
            //前面已经选够了，所以这次选的人已经输了
            return false;
        }
        chose = JSON.parse(JSON.stringify(chose));
        for (let i = 1; i <= maxChoosableInteger; i++) {
            if (chose[i])
                continue;
            chose[i] = true;

            
            let canIwin;
            if (calculated.has(chose.toString() + "," + (sum + i))) {
                canIwin = !calculated.get(chose.toString() + "," + (sum + i));
            } else {
                //helper(chose,sum+i)==true 表示 后手 无论怎么都赢,那么先手为输
                canIwin = !helper(chose, sum + i);
                calculated.set(chose.toString() + "," + (sum + i), !canIwin);
            }
            chose[i] = false;
            if (canIwin) {
               
                return true;
            }
        }
        return false;
    }

    return helper(chose, 0)

};

console.log(canIWin(19, 190));

