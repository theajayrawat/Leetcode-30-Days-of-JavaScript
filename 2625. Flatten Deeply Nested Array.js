// https://leetcode.com/problems/flatten-deeply-nested-array/

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if(n==0)
        return arr;
    // const ans=[];
    // arr.map((ele)=>{
    //     if(Array.isArray(ele) && n>0){
    //         ans.push(...flat(ele,n-1))
    //     }
    //     else{
    //         ans.push(ele)
    //     }
    // })

    // return ans;

    return arr.reduce((prevVal, currentVal) => {
        if (Array.isArray(currentVal)) {
            prevVal.push(...flat(currentVal,n-1))
        } else {
            prevVal.push(currentVal)
        }
        return prevVal
    }, [])


};