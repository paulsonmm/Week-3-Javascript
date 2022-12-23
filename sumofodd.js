var oddsum=require('readline-sync')

var limit=oddsum.question('Enter a limit')
var sum=0;
for(i=1;i<=limit;i++){
    if(i%2!=0){
        sum=sum+i
    }}
console.log('Sum of all odd numbers in limit is'+sum)