var date=require('readline-sync')

var choice=date.question('Select : 1 For Sunday\n 2 for Monday\n 3 for Tuesday\n 4 for Wednesday\n 5 for Thursday\n 6 for Friday\n 7 for Saturday')
switch(choice){
    case "1":
        console.log('You have selected Sunday')
        break;
    case "2":
        console.log('You have selected Monday')
        break;
    case "3":
        console.log('You have selected Tuesday')
        break;
    case "4":
        console.log('You have selected Wednesday')
        break;
    case "5":
        console.log('You have selected Thursday')
        break;
    case "6":
        console.log('You have selected Friday')
        break;
    case "7":
        console.log('You have selected Saturday')
        break;
    default:
        console.log('Invalid Entry')
}