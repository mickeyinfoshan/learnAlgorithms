function insertSort(arr) {
    var origin = arr.slice(0);
    var sorted = [];

    origin.forEach(function(item) {
        var index = 0;
        while (sorted[index] && item > sorted[index]) {
            index++;
        }
        sorted.splice(index, 0, item)
    });
    return sorted;
}

module.exports = insertSort;