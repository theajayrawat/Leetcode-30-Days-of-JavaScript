// https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) =>{
        const result = [];
        let totalResolve=0;
        functions.forEach((promise, index) =>{
          promise()
            .then((val) => {
               totalResolve++;
              result[index] = val;
    
              if ( totalResolve === functions.length) {
                resolve(result);
              }
            })
            .catch((error) => {
               reject(error);
            })
      });
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */