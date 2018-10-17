const testNumber = (36, 15, 9, 21);
console.log(fizzBuzz(testNumber)); //Calling Function

function fizzBuzz (input) { //These match order of logic
  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) return 'Buzz';
  if ((input % 3 === 0 ) && (input % 5 === 0)) return 'FizzBuss';
  if (typeof input !=='number') return 'This is not a number.'; //Change to NaN
  return "This test number does nothing important. The input was " + input + ".";
}
