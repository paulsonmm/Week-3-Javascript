

class getClass {

    getArray(limit) {
        let someText = require("readline-sync")
        let array = []
        for (let i = 0; i < limit; i++) {
            array[i] = []
        }

        for (let i = 0; i < limit; i++) {
            for (let j = 0; j < limit; j++) {
                array[i][j] = someText.question("Enter element (" + i + ", " + j + "): ")
            }
        }
        return array
    }

    displayArray(limit, arrayStore) {
        for (let i = 0; i < limit; i++) {
            for(let j = 0; j < limit; j++) {
                process.stdout.write(arrayStore[i][j] + "    ")
            }
           console.log()
        }
    }
}

let someText = require("readline-sync")
let userIn = someText.question("Enter the size of array: ")
let limit = parseInt(userIn)

const o1 = new getClass()
let arrayStore = o1.getArray(limit)
o1.displayArray(limit, arrayStore)