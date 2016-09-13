
function quickSort(originArr) {
    // 非原址，最直观
    function partition(arr) {
        var flag = arr[0];
        var bigger = [];
        var smaller = [];
        for(var i = 1; i < arr.length; i++) {
            if(arr[i] <= flag) {
                smaller.push(arr[i])
            } else {
                bigger.push(arr[i]);
            }
        }
        return {
            bigger,
            smaller,
            flag,
        }
    }

    var arr = originArr.slice(0);
    if(arr.length < 2) {
        return arr
    }
    let {
        bigger,
        smaller,
        flag,
    } = partition(arr);
    return quickSort(smaller).concat([flag]).concat(quickSort(bigger));
}

module.exports = quickSort;
