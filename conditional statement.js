let age = 18;

if(age < 18){
    console.log ('Congrats, you are eligible to get driving licence');
}
else if (age == 18)
{
    console.log ('congrats! you just became eligible to get driving licence')
}
else{
    console.log ( 'sorry you r not eligible to get driving license')
}

/******************************Switch Case Statement***************/
let starrating = 4;

switch(starrating)
{
    case 1:
        console.log ('Very Bad');
        break;
    case 2:
        console.log ('Bad');
        break;
    case 3:
        console.log ('Average');
        break;
    case 4:
        console.log ('Excellent');
        break;
    default:
        console.log ('Enter a valid integer between 1 and 5');//it is also if we donot use break after every case                 
}