let someText = require("readline-sync")
let incomeIn = someText.question("Enter the annual income: ")
let income = parseInt(incomeIn)

if (income < 250000 ) {
    console.log("No tax to be paid.")
} else if (250000 <= income < 500000) {
    let tax = (5 * income) / 100
    console.log("Income tax amount: " + tax + ".")
} else if (500000 <= income < 1000000) {
    let tax = (20 * income) / 100
    console.log("Income tax amount: " + tax + ".")
} else if (1000000 <= income < 5000000) {
    let tax = (30 * income) / 100
    console.log("Income tax amount: " + tax + ".")
}