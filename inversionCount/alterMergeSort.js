var divideArr = require("../utils/divideArr");

// 逆序对数量，修改了归并排序的算法
function countInversion(input) {
    function merge(origin1, origin2) {
        var arr1 = origin1.arr.slice(0);
        var arr2 = origin2.arr.slice(0);
        var merged = [];
        var arr1Item = arr1[0];
        var arr2Item = arr2[0];
        var inversionCount = origin1.count + origin2.count;
        var arr2ShiftedCount = 0; //后边的数组已经shift掉的个数
        while (arr1Item  != undefined && arr2Item != undefined) {
            if(arr1Item < arr2Item) {
                inversionCount += arr2ShiftedCount; // arr1下一个元素比arr2已经shift掉的元素都大，形成逆序
                merged.push(arr1.shift());
            } else {
                arr2ShiftedCount++
                inversionCount++;
                merged.push(arr2.shift());
            }
            arr1Item = arr1[0]
            arr2Item = arr2[0];
        }
        merged = merged.concat(arr1).concat(arr2);
        inversionCount += arr1.length > 0 ? (arr1.length - 1) * arr2ShiftedCount : 0;
        return {
            arr : merged,
            count : inversionCount
        }
    }

    function getSortedArrAndInversionCount(input) {
        var arr = input.slice(0);
        if(arr.length < 2) {
            return {
                arr : arr,
                count : 0,
            }
        }
        var divided = divideArr(arr);
        var leftPart = getSortedArrAndInversionCount(divided.left);
        var rightPart = getSortedArrAndInversionCount(divided.right);
        return merge(leftPart, rightPart);
    }

    var arr = input.slice(0);
    var sortedArrAndInversionCount = getSortedArrAndInversionCount(arr);
    return sortedArrAndInversionCount.count;
}

module.exports = countInversion;