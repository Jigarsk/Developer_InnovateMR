// TASK:
// 1. Student Marks Analyzer (with switch statement)
// Description: Write a program to analyze students' marks. It should:
// Use an array to store marks of students (e.g., [85, 70, 90, 60]).
// Use variables and constants to calculate:
// The highest mark.
// The lowest mark.
// The average mark.
// Use a switch statement to classify the average mark into categories:
// "Excellent" if average > 75.
// "Good" if average > 50.
// "Needs Improvement" if average <= 50.
// Use a loop to iterate through the marks and display them.
// 2. Use a switch statement to print the day of the week based on a given number
// (1-7).
// 3. Write a program to print numbers from 1 to 10 using a for loop.
// 4. Create a program to calculate the sum of numbers from 1 to n using a while loop.

// 1. Student Marks Analyzer (with switch statement)
//1.1 highest mark
let marks = [85, 70, 90, 60];


let highestMark = marks[0];
for(i = 0; i < marks.length; i++){
  if (marks[i] > highestMark){
    highestMark = marks[i];
  }

  
}
console.log(highestMark);

// 1.2 lowest mark

let lowestMark = marks[0];
for(i = 0; i < marks.length; i++){
  if (marks[i] < lowestMark){
    lowestMark = marks[i];
  }

  
}
console.log(lowestMark);

// 1.3 average mark
let sum = 0;
for(i = 0; i<marks.length;i++)
{
    sum = sum+marks[i];
}
let average = sum/marks.length;
console.log(average);

// 1.4 switch statement
switch(true){
    case average>75:
        console.log("Excellent");
        break;
    case average>50:
        console.log("Good");
        break;
    case average<=50:
        console.log("Needs Improvement");
        break;

}
//2. Use a switch statement to print the day of the week based on a given number (1-7).

let day = 3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
}

// 4. Create a program to calculate the sum of numbers from 1 to n using a while loop.
let n=10;
let i =0;
let sum2 = 0;
while(i<n){
    sum2 = sum2+i;
    i++;
}
console.log(sum2);