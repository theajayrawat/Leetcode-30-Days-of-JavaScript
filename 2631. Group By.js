// https://leetcode.com/problems/group-by/

/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const obj={}
    this.map((ele)=>{
        const key=fn(ele)
        if(key in obj){
            obj[key].push(ele);
        }
        else{
            obj[key]=[ele];
        }
    })

    return obj
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */