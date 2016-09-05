var divideArr = require("../utils/divideArr")
var divideFind = require("../find/divide");

// 算法导论 2.3-7
function hasSum(input) {
    var arr = input.set.slice(0);
    var sum = input.sum;
    arr.sort(function(a, b) {
        return a - b;
    });
    
    return sortedHasSum(arr, sum);
}

function sortedHasSum(sorted, sum) {
    
    if(sorted[0] > sum) {
        return false
    }
    if(sorted.length < 2) {
        return false
    }
    if(sorted.length == 2) {
        return sorted[0] + sorted[1] == sum;
    }

    var deltas = [];
    for(var i = 0; i < sorted.length; i++) {
        deltas.push({
            index : i,
            value : sum - sorted[i]
        })
    }
    for(i = 0; i < deltas.length; i++) {
        var delta = deltas[i];
        var findedIndex = divideFind({
            arr : sorted,
            value : delta.value,
        })
        if(findedIndex > 0 && findedIndex !== delta.index) {
            return true
        } 
    }
    return false;
    
}

module.exports = hasSum;