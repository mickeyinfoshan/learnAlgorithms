let insertSort = require("../sorts/insertSort");

function bucketSort(input) {
    let arr = input.slice(0);
    let len = arr.length;
    let tmp = [];
    for(let i = 0; i < len; i++) {
        let ele = arr[i];
        let tmpIndex = Math.floor(len * ele);
        if(!tmp[tmpIndex]) {
            tmp[tmpIndex] = []
        }
        tmp[tmpIndex].push(ele)
    }
    let sorted = [];
    tmp.forEach(bucket=>{
        if(bucket) {
            sorted = sorted.concat(insertSort(bucket))
        }
    })
    return sorted
}

module.exports = bucketSort;