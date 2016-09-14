
// 非负整数only
function countingSort(input) {
    let arr = input.slice(0)
    let elementCountingArr = []
    arr.forEach(item => {
        if(elementCountingArr[item] != undefined) {
            elementCountingArr[item]++
        } else {
            elementCountingArr[item] = 1
        }
    })
    // console.log(elementCountingArr)
    let lessOrEqualElmentCountingArr = elementCountingArr.slice(0)
    for(let i = 0; i < lessOrEqualElmentCountingArr.length; i++) {
        lessOrEqualElmentCountingArr[i] = lessOrEqualElmentCountingArr[i] || 0;
    }
    for(let i = 1; i < lessOrEqualElmentCountingArr.length; i++) {
        lessOrEqualElmentCountingArr[i] += lessOrEqualElmentCountingArr[i - 1]
    }
    // console.log(lessOrEqualElmentCountingArr);
    let sorted = []
    for(let i = arr.length - 1; i >=0; i--) {
        let item = arr[i]
        sorted[lessOrEqualElmentCountingArr[item] - 1] = item
        lessOrEqualElmentCountingArr[item]--;
    }
    return sorted
}

module.exports = countingSort;
