function skipcounting (skipcount, times, startingNumber){
    let number = startingNumber - skipcount;
    for (let i=1; i<=times; i++){
    number -= skipcount;
    console.log(number);
  }


  let number = [1, 200]; //Boundary Numbers
let skipCount = 16; //Number of skipCounting between each element of the sequence, used in FOR Loop
let difference = number[1] - number[0]; //Difference, mandatory expectation
let startingNumber = number[1]; //Hint: used in the FOR Loop
for (let i=1; i<=difference; i++){
  even = (startingNumber += skipCount) % 2;
  console.log("This number is", even, "; This iteration is number", i+skipCount); //Example of Concatenating
}

function 
