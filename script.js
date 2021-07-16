//-------------- Template Literals and Default Parameters Value

// function favMovie(movie='The Room', name = 'Tommy Wiseau') {
//     console.log(`my name is ${name} and my favorite movie is ${movie}`);
// }

//favMovie('The Matrix', 'Simon');
//favMovie();

//-------------- Arrow Functions

// let favMov = (movie, name) => {

//     console.log(`my name is ${name} and my favorite movie is ${movie}`);
// }

//favMov('The Matrix', 'Simon');

//Use the shorthand "concise body" syntax for this arrow function so that the console.log statement is on the same line as the arrow.

let favMov = (movie, name) => console.log(`my name is ${name} and my favorite movie is ${movie}`);

//favMov('The Matrix', 'Simon');




//Create a new arrow function called getFirstName ----------------------------------

const fullName = 'Simon Cheam';

let getFirstName = () => {
const splitName = fullName.split(' ', 1)
console.log(`1. Arrow function first name: ${splitName}`);
};
getFirstName(fullName); //call firstname function



//Create a second arrow function called getFirstNameConcise 
//(concise body syntax) 

// concise body ----------------------------------

let getFirstNameConcise = fullName => fullName.split(' ', 1);
let result = getFirstNameConcise(fullName);  // call concise
console.log(`2. Concise body first name: ${result}`) ;




//Console log the returned output of these functions to confirm you see a first name only.

//Create a new function named doMath that will take in two parameters and return an object literal. It should have two properties, the exponent result (x^y) and the product of the two numbers.


//----- MATH STUFF


let add = (a,b) => {
    return  a + b;
}

const resultAdd = add(3,2);
console.log(`Add: a+b = ${resultAdd}`);


let doMath = (x, y) => {
    return x**y; // will rise x to the power y
}

const resultdoMath = doMath(2,2);

console.log(`DoMath: x^y = ${resultdoMath}`);

//Log each property using a template literal.



///----------------- Spread Syntax


// Write a function that takes 3 parameters: name, location, favFood and logs them to the console (either separately or all at once using a template literal).


function logStuff( a, b, c) {
    
    console.log(`${a} ${b} ${c}`);
    
}
let enteredValues = ["Simon", "St. Pete", "Pizza"]

logStuff(...enteredValues);



//Create an array with 3 values, have the values match the order of the 3 parameters. Ex. let arr = ["Paul", "Birmingham", "Kimchi"];



let arr = ["Paul", "Birmingham", "Kimchi"];

//Spread operators allow us to take multiple values, like an array, and insert them as 3 separate values. /

//Using a spread operator, insert the values of the array into the function, check the console and see what appears.

//logStuff.apply( 'test', enteredValues);

let n = [...arr,...enteredValues];

console.log(`${n}`);




//4 Create a variable and set the value to your name.

let myName = 'Simon2';  // this is the string



// 5 Write a function that takes a parameter, name the parameter whatever you’d like.

function nameTime(){

    let name1 =[myName]; // string > array

    let arr = ["Paul", "Birmingham", "Kimchi"];
    let poop = [...arr,...name1];  //use spread syntax to combine arrays
    //return poop; 


//Using spread syntax, create a variable in the function that takes the string you pass into the function and spreads it into an array.

    console.log(`${poop}`);
    return poop; 
}



//7. Using a for loop, loop through the spread string and console log each value of the string.
let arr2 = ["ice cream", "sushi", "Indian food"];
let name1 =['burgers']
let poop = [...arr2,...name1]; 

for (let i=0; i < poop.length; i++){
    
console.log(`${poop[i]}`);

}


// 8. Call the function created in step 5 by passing in the variable created in step 4.
nameTime(myName);