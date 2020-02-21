// //Exercise 1 

// //Not sure if you wanted to define variables or not

// //So I made a simple function requiring no paramters
// function printNumbers() {
//     for (let index = -25; index <= 20; index++) {
//         console.log(index);
        
//     }
    
// }
// //function call
// printNumbers();


// //Exercise 2 

// //Define Variables
// let firstName;
// let lastName;
// let name;

// //Ask the user for first and last name
// firstName = prompt("What is your first name?");
// lastName = prompt ("What is your last name?");

// //create a function that returns last,first
// function firstLast(nameFirst,nameLast){
//     let newName;
//     newName = `${nameLast}, ${nameFirst}`
//     return newName
// }
// name =firstLast(firstName,lastName);

// //print return value to console
// console.log(name);

//Exercise 3 

// //Define variable 
// let number;

// //Ask the user to enter the number they would like to count to.
// number = parseInt(prompt("Enter a number:"));

// //Use a for loop inside of the function to iterate from zero to desired number
// function numberCount (numbers){
//     for (let index = 0; index <= numbers; index++) {
//         console.log(index);
        
//     }
// }

// //Pass the number through the function
// numberCount(number);

// //Exercise 4

// let text1;
// let text2;

// //Ask for two words 
// text1 = prompt("Type your first word:");
// text2 = prompt("Type your second word:");

// //Use a function to check if they match each other
// function checkPassword(word1,word2) {
//     if(word1 == word2){
//         return true
//     }
//     else{
//         return false 
//     }

    
// }
// //send those two words through the function
// value = checkPassword(text1,text2);

// //send the boolean value to the console
// console.log(value);

// //Exercise 5

//Define 3 number values using var
var number1 = 0;
var number2 = 0;
var number3 = 0;

//Ask for the three numbers to add
number1 = parseInt(prompt("Enter your first number:"));
number2 = parseInt(prompt("Enter your second number:"));
number3 = parseInt(prompt("Enter your third number:"));


//Does all of the adding in the function
function sumof3Numbers(num1,num2,num3){
    total = num1 + num2 + num3
    console.log (total);
}
sumof3Numbers(number1,number2,number3);