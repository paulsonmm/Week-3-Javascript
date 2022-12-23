var swap=require('readline-sync')
var limit=swap.question('Enter a limit')

var array1=[]
var array2=[]
var temp=0

console.log('Enter values to array 1')
for(var i=0;i<limit;i++){
    array1[i]=swap.question()
}
console.log('Enter values to array 2')
for(var j=0;j<limit;j++){
    array2[j]=swap.question()
}
for(k=0;k<limit;k++){
temp=array1[i]
array1[i]=array2[j]
array2[j]=temp}

console.log('After swapping')
console.log(array1)
console.log(array2)