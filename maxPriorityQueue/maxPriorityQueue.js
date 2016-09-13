const heapUtils = require('../utils/heap');
const swapArrayItem = require("../utils/swapArrayItem");

class MaxProrityQueue {

    constructor(arr) {
        var elements = arr.slice(0)
        this.heap = heapUtils.buildMaxHeap(arr)

    }

    has(ele) {
        return this.queue.indexOf(ele) >= 0
    }

    increaseIndex(ele, index) {
        if(this.heap[index] > ele) {
            throw "new element is smaller than current one"
        }
        this.heap[index] = ele
        while(index >=0 && this.heap[index] > this.heap[getParentIndex(index)]) {
            swapArrayItem(this.heap, index, getParentIndex(index))
            index = getParentIndex(index)
        }
    }

    maximum() {
        return this.heap[0]
    }

    extraMaximum() {
        let ret = this.heap.shift()
        this.heap.unshift(this.heap.pop())
        heapUtils.maxHeapify(this.heap, 0)
        return ret
    }

    insert(ele) {
        this.heap.push(Number.NEGATIVE_INFINITY);
        this.increaseIndex(ele, this.heap.length - 1)
    }

    delete(index) {
        if(index >= this.heap.length) {
            return
        }
        if(index == this.heap.length - 1) {
            this.heap.pop()
        }
        this.heap[index] = this.heap.pop()

        // 维持最大堆的性质
        var indexToHeapify = this.heap[index] > this.heap[heapUtils.getParentIndex(index)] ? getParentIndex(index) : index
        heapUtils.maxHeapify(this.heap, indexToHeapify)
    }

}
