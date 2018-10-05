function simpleOperators (numberA, numberB){
let adding = numberA + numberB;
let substract = numberA - numberB;
let multiply = numberA * numberB;
let divide = numberA / numberB;
console.log(adding);
console.log(substract);
console.log(multiply);
console.log(divide);
}
//"skipcount by _ for _ times starting at _"
function skipcounting (skipcount, times, startingNumber){
    let number = startingNumber - skipcount;
    for (let i=1; i<=times; i++){
    number -= skipcount;
    console.log(number);
  }
}

//simpleComparison using WHILE and Skip Counting Algorithm
function howManyTimes (numberStart, numberEnd, skipCount) {
  while (numberStart < numberEnd) {
    console.log(numberStart += skipCount); // Used to be 2 lines ... console.log(numberStart); numberStart += skipCount;
    // What is happening with the single line compared to the double line of code?
  }
}

function LooseEquality (firstOperand, secondOperant) { //Changes the second operand to the typeof the first operand
  console.log(firstOperand == secondOperant);
}

function StrictEquality (firstOperand, secondOperant) {
  console.log(firstOperand === secondOperant);
}

//function notequal(valueArray, ) {//when to stop in array, we want to start string}
//  if (number[i] !=5) { //This is when we do stop, so we accept every other value (common logic for "not")
//   console.log(number[i], "Is index number: ", i, "with a total array index of ", number.length);
//   return i;
// } else {console.log("5 is at the index", i); i=number.length} //once we stop, we want to jump out of the loop

//}

//Not Equality Starter Code
//Outing individual vaules of an array, we want to start string
//for (let i=0; i<number.length; i++){ //we do not know when to }

//}

//let number = [4, 7, 69, 66, , 0, 100, 5, 1, '1']; //able to add any typeof to an array, index is automatic
//for (let i=0; i==done; i++){
// notequal (number[i] );
//simpleOperators (number[0], number[1]);
//simpleOperators (number[2], number[3]);
//skipcounting (8, 11, -351,);
//skipcounting (2, 5, 0,);
//howManyTimes (number[4], number[5], number[1]);

//Loose vs. Strict Example, == symbol or === symbol returns Booleans
//LooseEquality (number[7], number[7]); // Returns True, compares number 1 with number 1
//LooseEquality (number[8], number[7]); // Returns True, changes the second operand to a string, then compares values
                                        // For example: console.log('1' == '1');
//StrictEquality (number[8], number[7]); // Returns False, compares typeof variable and value

//Not Equality Starter Code
//Outputing individual values of an array, we want to start stop at the value 5, where ever it is in the array

//Introduces Break and Continue Code
//See: https://github.com/QEHS-Websites/JavaScript-Sandbox/tree/master/Control%20Flow#break-and-continue-key-words-and-loop-concepts



//Using false : prefenrences
//let userColor = 'red'; //User not defined yet
//let defaultColor = 'blue' //Default colour chosen by developer
//let currentColor = userColor || defaultColour;
//console.log(currentColor); //returns "blue

//If a customer has more than 100 points, they are gold, otherwise
let points = 110;
let type = points > 100 ? 'gold': 'silver'  //points > 100 return
console.log(type); //Return "silver" in consule since false
