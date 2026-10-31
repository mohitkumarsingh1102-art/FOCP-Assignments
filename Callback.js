// 1. Create a function processArray(arr, callback) that passes each array
// element to a callback and collects the returned values in a new array.

// Function definition
function processArray(arr, callback){
    let res = [];
    for(let i=0;i<arr.length;i++){
        let value = callback(arr[i]);
        if (value !== undefined){
            res.push(value);
        }
    }
    return res;
}

// 2. Use processArray() to square every number in an array.

// Callback function

function square(num){
    return num*num ;
}

let num = [1,2,3,4,5];
let newArr = processArray(num,square);
console.log("Original array :",num);
console.log("New array:",newArr);


// 3. Use processArray() to return only even numbers. Define a suitable callback
// and modify the main function if necessary to support filtering

function only_even(num){
        if(num % 2 === 0 ) {
        return num ;
        }
    }
let allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = processArray(allNumbers,only_even);
console.log("only even number :",even);

//                   <<<----------------------------->>>

// 4. Create a function processString(str, callback) that passes a string to a
// callback

function processString(str,callback) {
    return callback(str);
}


// 5. Use a callback to convert a string to uppercase.

function uppercase(str){
    return str.toUpperCase();
}

let str = "mohit kumar";
let upper = processString(str,uppercase);
console.log(upper);


// 6. Use a callback to count the number of words in a sentence

function count(str1){
    return str1.length ;
}

let nam = "mohit kumar";
let countNo = processString(nam,count);
console.log(countNo);

//                      <<<----------------------------->>>

// 7. Create a function calculate(a, b, callback) that performs an operation
// based on the callback provided

function calculate(a, b, callback){
    return callback(a,b);
}


// 8. Use calculate() with callbacks for addition, subtraction, multiplication, and division.

// Addition
function add(a,b){
    return a + b ;
}
// Subtraction
function sub(a,b){
    return a - b ;
}
// Multiplication
function multiply(a,b){
    return a * b ;
}
// Division
function divide(a,b){
    if (b===0){
        return "Error: division by zero";
    } else {
        return a / b ;
    }
}

console.log(calculate(5,3,add));
console.log(calculate(5,3,sub));
console.log(calculate(5,3,multiply));
console.log(calculate(5,3,divide));


// 9. Create a function findElement(arr, callback) that returns the first element
// satisfying a condition, or undefined if no element matches.

function findElement(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}


// Bonus challenge: Build a menu-driven calculator using functions and callbacks, with
// separate operations for arithmetic calculations and array analysis.

// ---------- Arithmetic ----------

function calculate(a, b, callback){
    return callback(a,b);
}

// Addition
function add(a,b){
    return a + b ;
}
// Subtraction
function sub(a,b){
    return a - b ;
}
// Multiplication
function multiply(a,b){
    return a * b ;
}
// Division
function divide(a,b){
    if (b===0){
        return "Error: division by zero";
    } else {
        return a / b ;
    }
}

// ---------- Array analysis ----------

function analyzeArray(arr, callback) {
  return callback(arr);
}

function sum(arr){
    let total = 0;
    for(let i=0;i<arr.length;i++){
        total+=arr[i] ;
    }
    return total;
}

function average(arr){
    return sum(arr) / arr.length ;
}

function maximum(arr){
    let max = arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}

function minimum(arr){
    let min = arr[0];
    for (let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
    return min;
}

