var mark=require('readline-sync')

var m=mark.question('Enter the mark in 100')

if(m>=50){
    console.log('You have passed')
}else{
    console.log('You have failed')
}

