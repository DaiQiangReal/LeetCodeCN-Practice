//https://leetcode-cn.com/problems/flood-fill/
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, y, x, newColor) {
    if(y>=image.length||x>image[0].length)
        return;
    if(newColor===image[y][x])
        return image;
    let originColor=image[y][x];
    image[y][x]=newColor;
    if(image[y+1]&&image[y+1][x]===originColor){
        floodFill(image,y+1,x,newColor);
    }
    if(image[y-1]&&image[y-1][x]===originColor){
        floodFill(image,y-1,x,newColor);
    }
    if(image[y][x+1]===originColor){
        floodFill(image,y,x+1,newColor);
    }
    if(image[y][x-1]===originColor){
        floodFill(image,y,x-1,newColor);
    }
    return image;
};
console.log(floodFill([[0,0,0],[0,1,1]],1,1,1));
