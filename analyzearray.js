function analyzeArray(arr) {
    const sum = arr.reduce((curr, prev) => {
        return curr + prev;
    });

    const min = arr.reduce((curr, prev) => {
        return Math.min(curr, prev);
    });

    const max = arr.reduce((curr, prev) => {
        return Math.max(curr, prev);
    });

    const length = arr.length;
    const average = sum / length;

    return {
        sum,
        min,
        max,
        length,
        average
    }
}

module.exports = analyzeArray;