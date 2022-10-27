/*My goal with these basic alogs is to practice not only JS but also practice function arrows and ES6. So, I will write function both ways as a way to practice*/
// Print 1-255
// print1To255()
// Print all the integers from 1 to 255. 

function print1To255() {
    for (var i = 1; i < 256; i++) {
        console.log(i);
    }
}
console.log(print1To255());
// with arrow function  Not much of a difference. But maybe it will change?
const print1To255 = () => {
    for (let i = 1; i < 256; i++) {
        console.log(i);
    }
}
console.log(print1To255())

// printIntsAndSum0To255()
// Print integers from 0 to 255, and with each integer print the sum so far.
function printIntsAndSum0To255() {
    var sumSoFar = 0;
    for (var i = 0; i < 256; i++) {
        console.log(i);
        sumSoFar = i + sumSoFar;
        console.log(sumSoFar);
    }
}
console.log(printIntsAndSum0To255());

const printIntsAndSum0To255 = () => {
    let sumSoFar = 0;
    for (let i = 0; i < 256; i++) {
        console.log(i);
        sumSoFar = i + sumSoFar;
        console.log(sumSoFar);
    }
}
console.log(printIntsAndSum0To255());

// printArrayVals(arr)
// Iterate through a given array, printing each value. 

function printArrayVals(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
console.log(printArrayVals([1, -2, 4, -9]))

const printArrayVals = arr => {
        for (let i = 0; i < arr.length; i++){
            console.log(arr[i])
        }
}
console.log(printArrayVals([1, -2, 4, -9]))
// printMaxOfArray(arr)
// Given an array, find and print its largest element. 


// printAverageOfArray(arr)
// Analyze an array’s values and print the average. 

// returnOddsArray1To255()
// Create an array with all the odd integers between 1 and 255 (inclusive).

// squareArrayVals(arr)
// Square each value in a given array, returning that same array with changed values. 

// printArrayCountGreaterThanY(arr, y)
// Given an array and a value Y, count and print the number of array values greater than Y. 

// zeroOutArrayNegativeVals(arr)
// Return the given array, after setting any negative values to zero.


// printMaxMinAverageArrayVals(arr)
// Given an array, print the max, min and average values for that array.

// shiftArrayValsLeft(arr)
// Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.

// swapStringForArrayNegativeVals(arr)
// Given an array of numbers, replace any negative values with the string 'Dojo'

// //once finished start in the algo book//