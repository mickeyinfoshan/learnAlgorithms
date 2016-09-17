const swapArrayItem = require('../utils/swapArrayItem');
const randomBetween = require("../utils/randomBetween");

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

// 与快速排序的划分类似
function randomizePartition(arr, leftIndex, rightIndex) {
    let randomIndex = Math.floor(randomBetween(leftIndex, rightIndex));
    swapArrayItem(arr, randomIndex, rightIndex);
    let privot = arr[rightIndex];
    let smallerPartLength = 0;
    for(let index = leftIndex; index < rightIndex; index++) {
        let ele = arr[index];
        if(ele < privot) {
            let newIndex = leftIndex + smallerPartLength;
            swapArrayItem(arr, index, newIndex);
            smallerPartLength++;
        }
    }
    let privotIndex = leftIndex + smallerPartLength;
    swapArrayItem(arr, privotIndex, rightIndex);
    return privotIndex;    
}

module.exports = randomizeSelect;