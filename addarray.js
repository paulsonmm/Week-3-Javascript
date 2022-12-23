let someText = require("readline-sync")
let userIn = someText.question("Enter the size of array: ")
let size = parseInt(userIn)
let array1 = [], array2 = [], sumArray= [];

for (let i = 0; i < size; i++) {
    array1[i] = []
    array2[i] = []
    sumArray[i] = []
}

getArray(array1, array2, size)
addArray(array1, array2, size, sumArray)
displayArray(sumArray,size)

function getArray(array1, array2, size) {
    console.log("Enter elements to array 1: ")
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            array1[i][j] = someText.question("Enter element (" + i + ", " + j + "): ")
        }
    }
    console.log("Enter elements to array 2: ")
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            array2[i][j] = someText.question("Enter element (" + i + ", " + j + "): ")
        }
    }
}


function addArray(array1, array2, size, sumArray) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            sumArray[i][j] = parseInt(array1[i][j]) + parseInt(array2[i][j])
        }
    }
}

function displayArray(sumArray, size) {
    console.log("Sum of array 1 and array 2 is : ")
    for (let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++) {
            process.stdout.write(sumArray[i][j] + "     ")
        }
    }
}
console.log()