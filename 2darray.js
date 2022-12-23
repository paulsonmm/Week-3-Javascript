var twod = require('readline-sync')

var limit = twod.question('Enter the size of Array')
var array1 = []
var array2 = []
var sumarray = []

console.log('Enter the values to Array 1')
for (var i = 0; i < limit; i++) {
    array1[i] = []
    for (var j = 0; j < limit; j++) {
        array1[i][j] = twod.question()
    }
}console.log(array1)
console.log('Enter the values of Array 2')
for (var i = 0; i < limit; i++) {
    array2[i] = []
    for (var j = 0; j < limit; j++) {
        array2[i][j] = twod.question()
    }
}console.log(array2)
console.log('Sum of 2 Arrays')
for (var i = 0; i < limit; i++) {
    sumarray[i] = []
    for (var j = 0; j < limit; j++) {
        sumarray[i][j] = parseInt(array1[i][j]) + parseInt(array2[i][j])
    }
}console.log(sumarray)




