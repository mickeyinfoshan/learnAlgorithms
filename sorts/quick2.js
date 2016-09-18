const swapArrayItem = require('../utils/swapArrayItem');
const partition = require("../utils/partition");

function quickSort(input) {
    let arr = input.slice(0)
    if(arr.length < 2) {
        return arr
    }
    quickSortIterate(arr, 0, arr.length - 1)
    return arr
}

// 快速排序跌代体
function quickSortIterate(arr, leftIndex, rightIndex) {
    let leftPartLength = 0;
    if(leftIndex >= rightIndex) {
        return arr;
    }
    let flagIndex = partition(arr, leftIndex, rightIndex)
    quickSortIterate(arr, 0, flagIndex - 1)
    quickSortIterate(arr, flagIndex + 1, rightIndex)
}

module.exports = quickSort;
