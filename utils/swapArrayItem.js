function swapArrayItem(arr, index1, index2) {
    if(index1 === index2) {
        return
    }
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

module.exports = swapArrayItem
