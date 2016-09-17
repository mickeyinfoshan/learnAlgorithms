function randomBetween(smaller, bigger) {
    var size = bigger - smaller + 1;
    var randomed = smaller + Math.random() * size;
    return randomed;
}

module.exports = randomBetween;