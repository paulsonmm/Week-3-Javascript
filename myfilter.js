const filter = require("readline-sync")

var myArray=[1,2,3,4,5]
var s = 0

function myFilter(a, b){

    console.log("sum is "+s)
    console.log(b)
}
function callback(a)
{

    for(let i=0;i<myArray.length;i++)
    {   
        s+=a[i]
    }
    if(s%2==0)
    {return true}
    else
    {return false}

}
myFilter(myArray,callback(myArray))