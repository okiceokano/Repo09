//
function inverseWhile() {
    var fiveNumbers = "", str = 5;
    while (str >= 0) {
        fiveNumbers += str;
        if (str > 0) {
            fiveNumbers += ",";
        }
        str--;
    }
    return fiveNumbers;
}

console.log(inverseWhile());
//
module.exports = inverseWhile;