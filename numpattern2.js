let someText = require("readline-sync")
let rowsIn = someText.question("Enter how many rows: ")
let rows = parseInt(rowsIn)
let k = 0;

for (let i = 0; i < rows; i++) {
    for (let j = 0; j <= i; j++) {
        k++
        process.stdout.write(k + " ")
    }
    console.log()
}