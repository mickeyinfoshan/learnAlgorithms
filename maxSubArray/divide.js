var divideArr = require("../utils/divideArr")

function findMaxSubArray(originArr) {
    var arr = originArr.slice(0);
    if(arr.length == 0) {
        return {
            arr : arr,
            sum : 0
        }
    }
    if(arr.length == 1) {
        if(arr[0] > 0) {
            return {
                arr : arr,
                sum : arr[0]
            }
        }
        return {
            arr : [],
            sum : 0,
        }
    }
    var divided = divideArr(arr);
    var crossMiddleMaxLeft = findMaxSubArrayFromEnd(divided.left);
    var crossMiddleMaxRight = findMaxSubArrayFromBegin(divided.right);
    var maxSubArrCrossMiddle = {
        arr : crossMiddleMaxLeft.arr.concat(crossMiddleMaxRight.arr),
        sum : crossMiddleMaxLeft.sum + crossMiddleMaxRight.sum
    };
    var maxSubArrOnLeftSide = findMaxSubArray(divided.left);
    var maxSubArrOnRightSide = findMaxSubArray(divided.right);
    var maxSubArr = [maxSubArrCrossMiddle, maxSubArrOnLeftSide, maxSubArrOnRightSide].sort(function(r1, r2){
        return r2.sum - r1.sum
    })[0];
    return maxSubArr;
}

function findMaxSubArrayFromBegin(originArr) {
    var arr = originArr.slice(0)
    var maxSum = 0;
    var sum = 0;
    var maxSumIndex = -1;
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i];
        if(sum > maxSum) {
            maxSum = sum;
            maxSumIndex = i;
        }
    }
    return {
        arr : arr.slice(0, maxSumIndex + 1),
        sum : maxSum,
    }
}

function findMaxSubArrayFromEnd(originArr) {
    var arr = originArr.slice(0);
    var maxSum = 0;
    var sum = 0;
    var maxSumIndex = arr.length;
    for(var i = arr.length - 1; i >= 0; i--) {
        sum += arr[i];
        if(sum > maxSum) {
            maxSumIndex = i;
            maxSum = sum;
        }
    }
    return {
        arr : arr.slice(maxSumIndex),
        sum : maxSum,
    }
}

module.exports = findMaxSubArray;