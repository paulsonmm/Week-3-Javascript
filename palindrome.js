var palindrome=require('readline-sync')

console.log('Enter a word')
var word=palindrome.question()

var flag=0
var len=word.length
for(i=0;i<len;i++){
    if(word[i]!==word[len-1-i])
    {
        flag=1
        break
    }

}
if(flag==1){
        console.log('Word is not a Palindrome')
    }

else{
    console.log('Word is a Palindrome')

}
