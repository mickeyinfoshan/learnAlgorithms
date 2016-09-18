const insertSort = require("../sorts/insertSort")
const swapArrayItem = require("../utils/swapArrayItem")
const partition = require("../utils/partition")

// 返回排序后指定下标（从0开始）的元素，最坏情况为线性时间
function select(input) {

    let {
        arr,
        sortedIndex
    } = input;
    arr = arr.slice(0);
    if(arr.length <= sortedIndex) {
        return undefined
    }

    if(arr.length == 0) {
        return undefined
    }

    if(arr.length == 1) {
        if(sortedIndex == 0) {
            return arr[0]
        } else {
            return undefined
        }
    }

    let arrs = divideIntoPer5(arr);
    let medians = arrs.map(getMedian);
    let medianOfMedians = getMedian(medians);
    let medianIndex = arr.indexOf(medianOfMedians);
    swapArrayItem(arr, medianIndex, arr.length - 1);
    let medianSortedIndex = partition(arr, 0, arr.length - 1);
    if(medianSortedIndex == sortedIndex) {
        return medianOfMedians
    }
    if(medianSortedIndex > sortedIndex) {
        return select({
            sortedIndex,
            arr : arr.slice(0, medianSortedIndex)
        })
    } else {
        return select({
            sortedIndex : sortedIndex - medianSortedIndex - 1,
            arr : arr.slice(medianSortedIndex + 1),
        })
    }

}

// 每5个元素一组
function divideIntoPer5(arr) {
    let arrs = [];
    arr.forEach((ele, index)=>{
        let arrsIndex = Math.floor(index / 5);
        if(index % 5 == 0) {
            arrs[arrsIndex] = []
        }
        arrs[arrsIndex].push(ele);
    })
    return arrs;
}

// 获取中位数
function getMedian(arr) {
    let sorted = insertSort(arr);
    let medianIndex = Math.floor((sorted.length - 1) / 2)
    return sorted[medianIndex];
}

module.exports = select;