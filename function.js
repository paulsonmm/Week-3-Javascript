let someText = require("readline-sync")
let userIn = someText.question("Enter array limit: ")
let limit = parseInt(userIn)

let array = new Array(limit)
getArray(array)
displayArray(array)

function getArray(array) {
    for (let i = 0; i < limit; i++) {
        array[i] = someText.question("Enter element " + (i + 1) + ": ")
    }
}

function displayArray(array) {
    process.stdout.write("The array is: ")
    for (let i = 0; i < limit; i++) {
        process.stdout.write(array[i] + "   ")
    }
    console.log()
}