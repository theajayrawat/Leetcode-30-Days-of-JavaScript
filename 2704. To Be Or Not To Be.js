// https://leetcode.com/problems/to-be-or-not-to-be/

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe : (data)=>{
        if(val===data)
             return true;
 
         throw "Not Equal";
    },
 
    notToBe: (data)=>{
        if(val!==data)
             return true;
          throw "Equal";
    }
 
    }
   
 };
 
 /**
  * expect(5).toBe(5); // true
  * expect(5).notToBe(5); // throws "Equal"
  */