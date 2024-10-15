function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function divide(x, y) {
    return x / y;
}

const multiply = function (...params) {
    let total = 1;
    for (let i = 0; i < params.length; i++) {
        total *= params[i];
    }
    return total;
};

module.exports = {
    add,
    subtract,
    divide,
    multiply,
};
