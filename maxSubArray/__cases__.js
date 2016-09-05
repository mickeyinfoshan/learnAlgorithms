var cases = [{
    input : [-1, 1, 3, 4, -4],
    expected : {
        arr : [1, 3, 4],
        sum : 8,
    }
}, {
    input : [3, -4, 7, 8, 12,-3, 9,-10],
    expected : {
        arr : [7, 8, 12, -3, 9],
        sum : 33,
    }
}, {
    input : [1, 2, 3, -5, -6, -7],
    expected : {
        arr : [1, 2, 3],
        sum : 6,
    }
}];
module.exports = cases;