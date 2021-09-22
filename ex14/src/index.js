//
function myForLoop1() {
    var evenNumbers = ""; str1 = 0;
    for (str1 = 0; str1 <= 8; str1 += 2) {
        evenNumbers += str1;
        if (str1 < 8) {
            evenNumbers += ", ";
        }
    }
    return evenNumbers;
}

function myForLoop2() {
    var evenInverseNumbers = ""; str2 = 8;
    for (var str2 = 8; str2 >= 0; str2 -= 2) {
        evenInverseNumbers += str2;
        if (str2 > 0) {
            evenInverseNumbers += ", ";
        }
    }
    return evenInverseNumbers;
}

console.log(myForLoop1());
console.log(myForLoop2());
//
module.exports = {
    myForLoop1,
    myForLoop2
};