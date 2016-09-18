const swapArrayItem = require("./swapArrayItem")

// 将rightIndex的元素作为主元，将比主元小的放到主元左边，比主元大的放到右边，返回主元的下标
function partition(arr, leftIndex, rightIndex) {
        let privot = arr[rightIndex];
        let leftPartLength = 0;
        for(let index = leftIndex; index < rightIndex; index++) {
            let ele = arr[index];
            if(ele < privot) {
                let newIndex = leftIndex + leftPartLength
                swapArrayItem(arr, index, newIndex)
                leftPartLength++
            }
        }
        let privotIndex = leftIndex + leftPartLength
        swapArrayItem(arr, privotIndex, rightIndex) // 这时从privotIndex到rightIndex - 1都比privot大，交换后privot的右边也比privot大
        return privotIndex
}

module.exports = partition;