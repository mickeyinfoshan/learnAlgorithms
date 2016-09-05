function divideArr(arr) {
    var arrLen = arr.length;
    if(arrLen < 2) {
        return {
            left : arr,
            right : []
        }
    }
    var middleIndex = Math.round(arrLen / 2);
    return {
        left : arr.slice(0, middleIndex),
        right : arr.slice(middleIndex)
    }
}

module.exports = divideArr;