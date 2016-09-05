var cases = [{
    input : {
        set : [-1, 1, 3, 4, -4],
        sum : 5,
    },
    expected : true
}, {
    input : {
        set : [-1, 1, 3, 4, -4],
        sum : 99
    },
    expected : false
}];
module.exports = cases;