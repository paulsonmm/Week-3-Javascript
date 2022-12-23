let someText = require("readline-sync")
let userIn = someText.question("Enter the array limit: ")
let limit = parseInt(userIn)

let arrayIn = new Array(limit)
let arrayOut = new Array(limit - 1)

console.log("Enter the elements to array: ")
for (let i = 0; i < limit; i++) {
    arrayIn[i] = someText.question("Enter element " + i + ": ")
}

for (let i = 0; i < limit - 1; i++) {
    arrayOut[i] = parseInt(arrayIn[i]) * parseInt(arrayIn[i + 1])
}

console.log("The output array is: ")
for (let i = 0; i < limit - 1; i++) {
    process.stdout.write(arrayOut[i] + "    ")
}