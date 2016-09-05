var divideArr = require("../utils/divideArr");

function mergeSort(arr) {
    
    function merge(originArr1, originArr2) {
        var arr1 = originArr1.slice(0);
        var arr2 = originArr2.slice(0);
        var merged = [];
        var arr1Item = arr1[0];
        var arr2Item = arr2[0];
        while (arr1Item  != undefined && arr2Item != undefined) {
            if(arr1Item < arr2Item) {
                merged.push(arr1.shift());
            } else {
                merged.push(arr2.shift());
            }
            arr1Item = arr1[0]
            arr2Item = arr2[0];
        }
        merged = merged.concat(arr1).concat(arr2);
        return merged;
    }

    var origin = arr.slice(0);

    var arrLen = origin.length;

    if(arrLen < 2) {
        return origin;
    }

    var divided = divideArr(arr);

    var sortedLeft = mergeSort(divided.left);
    var sortedRight = mergeSort(divided.right);

    var sorted = merge(sortedLeft, sortedRight);

    return sorted;
}

module.exports = mergeSort;