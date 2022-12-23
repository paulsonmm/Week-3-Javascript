let someText = require("readline-sync")
console.log("Enter the marks scored by the student: ")
let writtenIn = someText.question("Written test: ")
let writtenMark = parseInt(writtenIn)
let labIn = someText.question("Lab exams: ")
let labMark = parseInt(labIn)
let assignmentsIn = someText.question("Assignment marks: ")
let assignmentMark = parseInt(assignmentsIn)

let grade = ((writtenMark * 70) / 100) + ((labMark * 20) / 100) + ((assignmentMark * 10) / 100)

console.log("Grade of the student is: " + grade + ".")