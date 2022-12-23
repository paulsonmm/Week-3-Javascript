var multiply=require('readline-sync')

var num=multiply.question('Eneter the number you want  to get multiplication table')

for(var i=1;i<=10;i++){
    multi=i*num

    console.log(i+'x'+num+'='+multi)
}