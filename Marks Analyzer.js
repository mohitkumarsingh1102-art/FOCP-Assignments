// 1. Store a student's name, roll number, department, and marks in five subjects using appropriate variables and data types.

// let studentName = "Mohit Kumar" ;
// let rollNumber = 24 ;
// let department = "Computer Science" ;
// let marks_English = 84 ;
// let marks_Science = 95 ;
// let marks_Socialstudies = 96 ;
// let marks_Hindi = 83 ;
// let marks_Mathematics = 98 ;


// 2. Store the five subject marks in an array.

// let marks = [84,95,96,83,98] ;


// 3. Write a function calculateTotal(marks) to calculate the total marks.

// function calculate_total(marks){
//     let total = 0 ;
//     for (let i = 0; i < marks.length; i++) {
//     total += marks[i];
//   }
//   console.log("Total Marks =",total);
// }
// let marks = [84,95,96,83,98] ;
// calculate_total(marks);

// output:- Total Marks = 456


// 4. Write a function calculatePercentage(marks) to calculate the percentage.

// function calculate_Percentage(marks){
//      let total = 0 ;
//     for (let i = 0; i < marks.length; i++) {
//     total += marks[i];
//   }
//   let percentage = (total/500)*100 ;
//   console.log("Percentage =",percentage,"%");
// }
// let marks = [84,95,96,83,98] ;
// calculate_Percentage(marks);

// In this question I default assume that the total marks in each subject is 100.

// output:- Percentage = 91.2 %


// 5. Write a function findHighest(marks) to find the highest mark.

// function find_Highest(marks){
//     let sortedArray = marks.sort((a,b)=>a-b) ;
//     console.log("Highest Marks =",sortedArray[sortedArray.length-1]);
// }
// let marks = [84,95,96,83,98] ;
// find_Highest(marks);

// output:- Highest Marks = 98


// 6. Write a function findLowest(marks) to find the lowest mark.

// function find_Lowest(marks){
//     let sortedArray = marks.sort((a,b)=>a-b);
//     console.log("Lowest Marks =",sortedArray[0]);
// }
// let marks = [84,95,96,83,98] ;
// find_Lowest(marks);

// output:- Lowest Marks = 83


// 7. Count how many subjects have marks greater than or equal to 40.

// let marks = [84,95,96,83,98] ;
// let count = 0;
// for(i=0;i<marks.length;i++){
//     if(marks[i]>=40){
//         count++
//     }
// }
// console.log("Number of subjects which has marks greater than 40 =",count);

// output:- Number of subjects which has marks greater than 40 = 5



// 8. Convert the student's name to uppercase and display the number of characters in the name.

// let studentName = "pratibha singh" ;
// let uppercaseName = studentName.toUpperCase()
// let characterCount = studentName.length ;
// console.log("Name in uppercase:",uppercaseName);
// console.log("Number of characters:",characterCount);

// output:- Name in uppercase: PRATIBHA SINGH
   //       Number of characters: 14



// 9. Display the final report with the student's details, total, percentage, highest mark,lowest mark, and number of subjects passed.

// function display_Report(marks){
//     console.log("========== STUDENT REPORT ==========");
//     console.log("Name : MOHIT KUMAR");
//     console.log("Roll Number: 24")
//     console.log("Department : Computer Science")

//     let total = 0 ;
//     for (let i = 0; i < marks.length; i++) {
//     total += marks[i];
//    }
//     console.log("Total Marks =",total);

//     let percentage = (total/500)*100 ;
//     console.log("Percentage =",percentage,"%");

//     let sortedArray = marks.sort((a,b)=>a-b) ;
//     console.log("Highest Marks =",sortedArray[sortedArray.length-1]);

//     console.log("Lowest Marks =",sortedArray[0]);

//     let passingMarks = 33;
//     let passed = 0;
//     for(i=0;i<marks.length;i++){
//     if(marks[i]>=passingMarks){
//         passed++
//         }
//     }
//     console.log("Number of subject passed =",passed);
// }
// let marks = [84,95,96,83,98] ;
// display_Report(marks);

// output:-   ========== STUDENT REPORT ==========
//              Name : MOHIT KUMAR
//              Roll Number: 24
//              Department : Computer Science
//              Total Marks = 456
//              Percentage = 91.2 %
//              Highest Marks = 98
//              Lowest Marks = 83
//              Number of subject passed = 5



// Bonus challenge: Create a function that accepts the marks array and returns "Excellent", "Good", "Average", or "Needs Improvement" based on the percentage.

// function Performance_Remark(marks){
//     let total = 0 ;
//     for (let i = 0; i < marks.length; i++) {
//     total += marks[i];
//    }
//    let percentage = (total/500)*100 ;
//    if(percentage >=80){
//     console.log("Excellent");
//    } else if(percentage>=60 && percentage<=80){
//     console.log("Good");
//    } else if(percentage>=40 && percentage<=60){
//     console.log("Average");
//    } else {
//     console.log("Needs Improvement");
//    }
// }
// let marks = [84,95,96,83,98] ;
// Performance_Remark(marks);

// output :- Excellent