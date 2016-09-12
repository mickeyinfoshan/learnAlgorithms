import _ from 'lodash';

class MaxProrityQueue {
    
    constructor(arr) {
        var elements = arr.slice(0)
        this.queue = []
        elements.forEach(ele => {
            this.insert(ele)
        });
    }

    has(ele) {
        return this.queue.indexOf(ele) >= 0
    }

    insert(ele) {

    }

    maximum() {

    }

    extraMaximum() {

    }

        
}