// Define prompt function
const prompt = require("prompt-sync")();
let grade = prompt('Enter Marks;');

//Conditions for grading with the score been between 0-100
function gradeCalculator(score, total) {
    let average = (score / total) * 100
    let grade = ''

    if (average > 79) {
        grade = ('A')
    } else if (average >= 60 && average <= 79) {
        grade = ('B')
    } else if (average >= 50 && average <= 59) {
        grade = ('C')
    } else if (average >= 40 && average <= 49) {
        grade = ('D')
    } else { grade = 'E'} 

    return `you got a ${grade} of (${average})%`
}
// Program execution below
let result = gradeCalculator( 35 , 100 )
console.log( result )