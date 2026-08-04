/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let idx = -1
    return arr.flatMap(el => {
        idx += 1
        if (Boolean(fn(el, idx))) {
            return el
        } else {
            return []
        }
    
    })
};