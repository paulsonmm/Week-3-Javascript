var throwerr= require("readline-sync")
var nothing =throwerr.question("Enter your height")
var height = parseInt(nothing);

try {
    if( height >= 200 )
        throw "hugeHeightError";
   else if(( isNaN(height )))
        throw "not a number";
   else if( height <= 40 )
        throw "tinyHeightError";
   else
        throw "Valid";
}

catch(err){
    console.log(err)
}

console.log("height is "+height)    