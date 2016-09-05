var divideArr = require("../utils/divideArr");

// 二分查找
function divideFind(input) {
    var sorted = input.arr.slice(0);
    var value = input.value;
    if(sorted.length == 0) {
        return -1;
    }
    if(sorted.length == 1) {
        return sorted[0] === value ? 0 : -1;
    }
    var divided = divideArr(sorted);
    if(divided.right[0] <= value) {
        var rightIndex = divideFind({
            arr : divided.right,
            value : value,
        });
        return rightIndex >= 0 ? divided.left.length + rightIndex : -1
    } else {
        return divideFind({
            arr : divided.left,
            value : value,
        })
    }
}

module.exports = divideFind;