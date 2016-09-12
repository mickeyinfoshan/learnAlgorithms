var heapUtils = require("../utils/heap");

function heapSort(input) {
    var heap = heapUtils.buildMaxHeap(input)
    var sorted = [];
    while(sorted.length != input.length) {
        sorted.unshift(heap.shift());
        heap.unshift(heap.pop());
        heapUtils.maxHeapify(heap, 0);
    }
    return sorted;
}

module.exports = heapSort; 