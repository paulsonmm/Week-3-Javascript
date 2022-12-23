class Area {
    circle(radius) {
        let area = 3.14 * radius * radius
        console.log("The area for the given circle with radius " + radius + " is: " + area)
    }

    square(side) {
        let area = side * side
        console.log("The area for the given square with side " + side + " is: " + area)
    }

    rectangle(length, breadth) {
        let area = length * breadth
        console.log("The area for the given rectangle with length " + length + " and breadth " + breadth + " is: " + area)
    }

    triangle(base, height) {
        let area = 0.5 * base * height
        console.log("The area for the given triangle with base " + base + " and height " + height + " is: " + area)

    }
}

class MyClass extends Area {

    circle() {
        let someText = require("readline-sync")
        let userIn = someText.question("Enter the radius for circle: ")
        let radius = parseInt(userIn)
        return radius
    }

    square() {
        let someText = require("readline-sync")
        let userIn = someText.question("Enter the side for the square: ")
        let side = parseInt(userIn)
        return side
    }

    rectangle() {
        let someText = require("readline-sync")
        let userInLength = someText.question("Enter the length of the rectangle: ")
        let userInBreadth = someText.question("Enter the breadth of the rectangle: ")
        let length = parseInt(userInLength)
        let breadth = parseInt(userInBreadth)
        return [length, breadth]
    }

    triangle() {
        let someText = require("readline-sync")
        let userInBase = someText.question("Enter the base of triangele: ")
        let userInHeight = someText.question("Enter the height of triangle: ")
        let base = parseInt(userInBase)
        let height = parseInt(userInHeight)
        return [base, height]
    }
    
   constructor (choice) {
        super()
        switch (choice) {
            case 1:
                console.log("You have chosen circle.")
                let radius = (this.circle())
                super.circle(radius)
                break
            case 2:
                console.log("You have chosen square.")
                let side = (this.square())
                super.square(side)
                break
            case 3:
                console.log("You have chosen rectangle.")
                const [length, breadth] = (this.rectangle())
                super.rectangle(length, breadth)
                break
            case 4:
                console.log("You have chosen triangle.")
                const [base, height] = (this.triangle())
                super.triangle(base, height)
                break
            default:
                console.log("Wrong choice.")
        }
    }
}

let someText = require("readline-sync")
console.log("Enter 1 for Circle")
console.log("Enter 2 for square")
console.log("Enter 3 for rectangle")
console.log("Enter 4 for triangle")
let userIn = someText.question("Enter your choice: ")
let choice = parseInt(userIn)

const object = new MyClass(choice)
