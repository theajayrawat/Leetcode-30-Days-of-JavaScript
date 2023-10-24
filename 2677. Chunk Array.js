// https://leetcode.com/problems/chunk-array/

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const newArr=[];
    let temp=[];
    let cnt=0;
    for(let i=0;i<arr.length;i++){
        cnt++;
        temp.push(arr[i]);
        if(cnt==size){
            newArr.push(temp);
            temp=[];
            cnt=0;
        }
    }
    if(temp.length){
        newArr.push(temp);
    }

    return newArr;
};
