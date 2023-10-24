// https://leetcode.com/problems/cache-with-time-limit/


var TimeLimitedCache = function () {
    cache = {};
    time={};
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    if (cache[key]) {
        cache[key] = value;
        clearTimeout(time[key])
        time[key] = setTimeout(() => {
            delete cache[key]
        }, duration);
        return true;
    }
    else {
        cache[key] = value;
        time[key]= setTimeout(() => {
            delete cache[key]
        }, duration);
        return false;
    }

};