function findMaxSubArr(originArr) {
    var arr = originArr.slice(0)
    var sum = 0;
    var maxSum = 0;
    var tmpBeginIndex = 0;
    var beginIndex = 0;
    var endIndex = 0;
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i];
        if(sum > maxSum) {
            maxSum = sum;
            beginIndex = tmpBeginIndex;
            endIndex = i;
        }
        if(sum < 0) {
            tmpBeginIndex = i + 1;
            sum = 0;
        }
    }
    return {
        arr : arr.slice(beginIndex, endIndex + 1),
        sum : maxSum
    }
}

module.exports = findMaxSubArr;