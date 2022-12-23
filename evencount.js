var even=require('readline-sync')
var limit=even.question('Enter the limit')

var array=[]
var count=0

console.log('Enter values to Array')
for(i=0;i<limit;i++){
    array[i]=even.question()}

    for(i=0;i<limit;i++){
if(array[i]%2===0){
    count=count+1
}}
console.log('The occurance of even numbers in array '+ count)
