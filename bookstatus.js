var library = [
    {
     title: 'Bill Gates',
     author: 'The Road Ahead',
     readingStatus: true  
    },

    {
      title: 'Steve Jobs',
      author: 'Walter Isaacson',
      readingStatus: true  
     },

     {
      title: 'Mockingjay: The Final Book of The Hunger Games',
      author: 'Suzanne Collins',
      readingStatus: false  
     }
]

const book = require("readline-sync")
var option = book.question("Enter a option 1, 2, 3:  ")

if(option == 1){
  if(library[0].readingStatus){
      console.log(`Alredy read '${library[0].title}' by '${library[0].author}'`);
  }else{
    console.log(`You still need to read '${library[0].title}' by '${library[0].author}'`);
  }
}

if(option == 2){
if(library[1].readingStatus){
  console.log(`Alredy read '${library[1].title}' by '${library[1].author}'`);
}else{
console.log(`You still need to read '${library[1].title}' by '${library[1].author}'`);
}
}

if(option == 3){
if(library[2].readingStatus){
  console.log(`Alredy read '${library[2].title}' by '${library[2].author}'`);
}else{
console.log(`You still need to read '${library[2].title}' by '${library[2].author}'`);
}
}
