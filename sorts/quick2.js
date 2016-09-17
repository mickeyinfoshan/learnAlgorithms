const swapArrayItem = require('../utils/swapArrayItem');

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
    function partition(arr, leftIndex, rightIndex) {
        let flag = arr[rightIndex];
        let leftPartLength = 0;
        for(let index = leftIndex; index < rightIndex; index++) {
            let ele = arr[index];
            if(ele < flag) {
                let newIndex = leftIndex + leftPartLength
                swapArrayItem(arr, index, newIndex)
                leftPartLength++
            }
        }
        let flagIndex = leftIndex + leftPartLength
        swapArrayItem(arr, flagIndex, rightIndex) // 这时从flagIndex到rightIndex - 1都比flag大，交换后flag的右边也比flag大
        return flagIndex
    }
    let flagIndex = partition(arr, leftIndex, rightIndex)
    quickSortIterate(arr, 0, flagIndex - 1)
    quickSortIterate(arr, flagIndex + 1, rightIndex)
}

module.exports = quickSort;
