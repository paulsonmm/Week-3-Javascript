var grade=require('readline-sync')

var mark=grade.question('Enter the total mark')

if(mark>=90){
    console.log('Grade A')
}else if(mark>=80 && mark<=89){
    console.log('Grade B')
}else if( mark>=70 && mark<=79){
    console.log('Grade C')
}else if(mark>=60 && mark<=69){
    console.log('Grade D')
}else if(mark>=50 && mark<=59){
    console.log('Grade E')
}else{
    console.log('Failed')
}

