/*My goal with these basic alogs is to practice not only JS but also practice some minor ES6 syntax. Additionally, I will try using the high order functions map and filter where useful.*/

// something I will use to generate random arrays for the algo practice:
const randomArray = (arr) => {
    for (let i = 0; i < 7; i++) {
        let num = Math.floor(Math.random() * 101);
        console.log(num);
        arr.push(num);
    }
    return arr;
}
console.log(randomArray([]));

// START OF ALGOS!

// Print 1-255
// print1To255()
// Print all the integers from 1 to 255.
// with arrow function  Not much of a difference. But maybe it will change?
const print1To255 = () => {
    for (let i = 1; i < 256; i++) {
        console.log(i);
    }
}
console.log(print1To255())

// printIntsAndSum0To255()
// Print integers from 0 to 255, and with each integer print the sum so far.

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

const printArrayVals = arr => {
    const newArr = arr.map((val) => {
        console.log(val)
    })
    // for (let i = 0; i < arr.length; i++) {
    //     console.log(arr[i])
    // }
}
console.log(printArrayVals([
    57, 44, 6, 87, 79,
    35, 49, 84, 29, 47,
    64]));
// printMaxOfArray(arr)
// Given an array, find and print its largest element. 
const printMaxOfArray = arr => {
    const max = Math.max(...arr);
    return max;
}

console.log(printMaxOfArray([
    63, 20, 15, 64, 28,
    100, 5, 6, 77, 95,
    46]));


// printAverageOfArray(arr)
// Analyze an array’s values and print the average. 

const printAverageOfArray = (arr) => {
    let avg = 0;
    const newArr = arr.map((value) => {
        avg = value + avg
    })
    return Math.round(avg / arr.length);
}
console.log(printAverageOfArray([
    57, 44, 6, 87, 79,
    35, 49, 84, 29, 47,
    64]))

// returnOddsArray1To255()
// Create an array with all the odd integers between 1 and 255 (inclusive).

const returnOddsArray1To255 = () => {
    let arr = [];
    for (let i = 1; i < 256; i++) {
        i % 2 !== 0 ? arr.push(i) : null
    }
    return arr
}
console.log(returnOddsArray1To255());

// squareArrayVals(arr)
// Square each value in a given array, returning that same array with changed values. 
const squareArrayVals = (arr) => {
    const newArr = arr.map((val) => (val * val));
    return newArr;
};
console.log(squareArrayVals([
    1, 2, 3, 4
]))

// printArrayCountGreaterThanY(arr, y)
// Given an array and a value Y, count and print the number of array values greater than Y.
const printArrayCountGreaterThanY = (arr, Y) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] > Y ? count++ : null;
    }
    return count;
}

console.log(printArrayCountGreaterThanY([
    26, 35, 20, 20, 89,
    64, 58, 85, 24, 76,
    86], 55))

// zeroOutArrayNegativeVals(arr)
// Return the given array, after setting any negative values to zero.

const zeroOutArrayNegativeVals = (arr) => {
    const newArr = arr.map((val) => (val < 0 ? val = 0 : val))
    return newArr;
};

console.log(zeroOutArrayNegativeVals([
    44, -12, 7, -87, 19,
    32, 26, -74, 10, -56,
    45]))

// printMaxMinAverageArrayVals(arr)
// Given an array, print the max, min and average values for that array.
const printMaxMinAverageArrayVals = (arr) => {
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    let sum = 0;
    arr.forEach((item) => {
        sum = item + sum;
    })
    return `min ${min}, max: ${max}, avg: ${sum / arr.length}`
}
console.log(printMaxMinAverageArrayVals([
    57, 99, 3, 92,
    85, 87, 39]));

// shiftArrayValsLeft(arr)
// Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.
const shiftArrayValsLeft = (arr) => {
    arr.shift();
    arr.push(0);
    return arr;
}
console.log(shiftArrayValsLeft([
    77, 41, 70, 85,
    22, -45, 80]))

// swapStringForArrayNegativeVals(arr)
// Given an array of numbers, replace any negative values with the string 'Dojo'
const swapStringForArrayNegativeVals = (arr) => {
    newArr = arr.map((val) => (val < 0 ? val = 'Dojo' : val))
    return newArr;
}
console.log(swapStringForArrayNegativeVals([
    41, -70, 85, 22,
    -45, 80, -88]));

// //From the Algo book//

