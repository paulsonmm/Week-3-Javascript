var read=require('readline-sync')

var P=parseInt(read.question('Enter Prime amount'))
var  R=parseFloat (read.question('Enter Interest Rate'))
var n=parseFloat(read.question('Enter the number of Years'))
var     SI=(P*R*n)/100

console.log(SI) 