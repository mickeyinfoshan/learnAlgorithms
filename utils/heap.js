var swapArrayItem = require("./swapArrayItem");

// 左子节点下标
function getLeftChildIndex(index) {
    return index * 2 + 1
}

// 右子节点下标
function getRightChildIndex(index) {
    return index * 2 + 2;
}

// 父节点下标
function getParentIndex(index) {
    return Math.ceil(index / 2) - 1
}

// 沉降元素到正确的位置：与较大的子节点交换位置，对新位置上递归，直到该元素比所有子节点大
function maxHeapify(arr, index) {

    var leftChildIndex = getLeftChildIndex(index);
    var rightChildIndex = getRightChildIndex(index);

    var node = arr[index];
    var leftChild = arr[leftChildIndex];
    var rightChild = arr[rightChildIndex];

    var largestNode = node;
    var largestNodeIndex = index;

    if(leftChild && leftChild > largestNode) {
        largestNode = leftChild;
        largestNodeIndex = leftChildIndex;
    }

    if(rightChild && rightChild > largestNode) {
        largestNode = rightChild;
        largestNodeIndex = rightChildIndex;
    }

    if(largestNodeIndex == index) {
        return;
    }

    swapArrayItem(arr, index, largestNodeIndex);
    maxHeapify(arr, largestNodeIndex)
}

// buildMaxHeap 构建最大堆
function buildMaxHeap(arr) {
    var heap = arr.slice(0);
    var beginIndex = Math.floor(arr.length / 2) - 1; // 从非叶节点开始，自底向上
    for(var i  = beginIndex; i >=0; i--) {
        maxHeapify(heap, i);
    }
    return heap;
}

module.exports = {
    buildMaxHeap,
    maxHeapify,
    getParentIndex,
}
