//Variable is an array for security
const marks = [70, 49, 100, 99]; //add grades as an array

//Use the calculatedGrade function as an output to the console
//Note: example of using functions more than once (calculateAverage is used in console.log and calculatedGrade)
console.log (calculatedGrade (0), calculateAverage (marks));

//This function uses another function, call Single Concern Function (able to use either function for various purposes)
function calculatedGrade (marks) {
  const average = calculateAverage (marks);
  if (average >= 90) return 'A'; //Add approriate conditional
  if (average <90) return 'B';
  if (average <80) return 'C';
  if (average <60) return 'D';
  if (average <50) return 'E';
  return F; //This is the last grade left, using the funnel image (metaphor)
}
function calculteAverage (array) {
  let sum = 0;
  for (let mark of marks) sum += mark; //Example of reading an array and one line to add up the sum of all the grades
  return sum / marks.length; //"Divide the total marks by the number of grades"
}
