var descend=require('readline-sync')
var limit=descend.question('Enter the limit')

var array=[]

console.log('Enter values to an Array')
for(k=0;k<limit;k++){
    array[k]=descend.question()
}
var temp
for(i=0;i<limit-1;i++){
    for(j=i+1;j<limit;j++){
        if(array[i]<array[j]){
        temp=array[i]
        array[i]=array[j]
        array[j]=temp}
    }
}
console.log('After descending')
console.log(array)