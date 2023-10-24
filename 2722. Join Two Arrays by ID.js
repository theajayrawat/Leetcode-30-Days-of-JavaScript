// https://leetcode.com/problems/join-two-arrays-by-id/

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const newArr=arr1.concat(arr2);
    const result={};

    newArr.forEach((obj)=>{
        const id=obj.id;
        if(!result[id]){
            result[id]={...obj}
        }
        else{
            result[id]={...result[id],...obj}
        }
    })

    const joinedArray = Object.values(result);
  joinedArray.sort((a, b) => a.id - b.id);

  return joinedArray;

};