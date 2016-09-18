const swapArrayItem = require('../utils/swapArrayItem');
const randomBetween = require("../utils/randomBetween");
const partition = require("../utils/partition");

function randomizeSelect(input) {
    let {
        arr,
        sortedIndex
    } = input;
    arr = arr.slice(0);
    return randomizeSelectIterate(arr, 0, arr.length -1, sortedIndex);
}

function randomizeSelectIterate(arr, leftIndex, rightIndex, sortedIndex) {
    if(leftIndex == rightIndex) {
        return arr[leftIndex];
    }
    if(leftIndex > rightIndex) {
        return null
    }
    let privotIndex = randomizePartition(arr, leftIndex, rightIndex);
    if(sortedIndex == privotIndex) {
        return arr[privotIndex];
    }
    if(sortedIndex < privotIndex) {
        return randomizeSelectIterate(arr, leftIndex, privotIndex - 1, sortedIndex)
    } else {
        return randomizeSelectIterate(arr, privotIndex + 1, rightIndex, sortedIndex);
    }

}

// 随机划分
function randomizePartition(arr, leftIndex, rightIndex) {
    let randomIndex = Math.floor(randomBetween(leftIndex, rightIndex));
    swapArrayItem(arr, randomIndex, rightIndex);
    return partition(arr, leftIndex, rightIndex)    
}

module.exports = randomizeSelect;