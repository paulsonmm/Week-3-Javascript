const reverse = require("readline-sync");
var myString

function str(){
    myString = reverse.question("enter the string");
    var string = myString.split('');
    console.log(string.reverse().join(''));
}

try{
   str();
}
catch{
console.log("error"+myString+" is invalid")
}
finally{
  if(isNaN(myString)){
    console.log(typeof(myString))
    }
else{
  console.log("number")
  } 
}