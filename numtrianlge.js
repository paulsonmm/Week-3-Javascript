var pattern=require('readline-sync')

var  limit=pattern.question('Enter a limit')
var k=''
for(var i=1;i<limit;i++){
    for(var j=1;j<=i;j++){
    
    k=k+j;
    }console.log(k)
k=''
}
