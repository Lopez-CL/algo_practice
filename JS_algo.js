// Print 1-255
// print1To255()
// Print all the integers from 1 to 255. 

/*
function print1To255(){
    for(var i = 1; i < 256; i++){
        console.log(i);
    }
}
console.log(print1To255());*/

// printIntsAndSum0To255()
// Print integers from 0 to 255, and with each integer print the sum so far. 

function printIntsAndSum0To255(){
    var sum = 0;
    for (var i = 0; i < 256; i++){
        sum = sum + i;
        console.log(sum);
    }
    return sum;
}
console.log(printIntsAndSum0To255());

// printArrayVals(arr)
// Iterate through a given array, printing each value. 

function printArrayVals(arr){
    for (var i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

console.log(printArrayVals([33,-4,88,0,89]));

// printMaxOfArray(arr)
// Given an array, find and print its largest element. 

function printMaxOfArray(arr){
    var max = 0;
    for (var i =0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i]
        }
    }
    return max;
}

console.log(printMaxOfArray([33,-4,88,0,89]))

// printAverageOfArray(arr)
// Analyze an array’s values and print the average. 

function printAverageOfArray(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum = arr[i]+sum;
    }
    var avg = sum / arr.length;
    return avg
}

console.log(printAverageOfArray([1,2,3,4,5,6,7,8]))

// returnOddsArray1To255()
// Create an array with all the odd integers between 1 and 255 (inclusive).

function returnOddsArray1To255(){
    var odd_arr = []
    for (var i = 1; i < 256; i++){
        if(i % 2 != 0){
            odd_arr.push(i);
        }
    }
    return odd_arr;
}
console.log(returnOddsArray1To255());

// squareArrayVals(arr)
// Square each value in a given array, returning that same array with changed values. 

function squareArrayVals(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.push(arr[i]**2);
    }
    return newArr;
}
console.log(squareArrayVals([1,2,3,4]));

// printArrayCountGreaterThanY(arr, y)
// Given an array and a value Y, count and print the number of array values greater than Y. 
function printArrayCountGreaterThanY(arr, y){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > y){
            count++;
        }
    }
    return count;
}

console.log(printArrayCountGreaterThanY([ 1, 4, 9, 16 ],2))

// zeroOutArrayNegativeVals(arr)
// Return the given array, after setting any negative values to zero.

function zeroOutArrayNegativeVals(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}

console.log(zeroOutArrayNegativeVals([ 1, -4, -9, 16 ]))


// printMaxMinAverageArrayVals(arr)
// Given an array, print the max, min and average values for that array.

// shiftArrayValsLeft(arr)
// Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.

function shiftArrayValsLeft(arr){
    for(var i = 0; i < 4; i++){
        arr.shift();
        arr.push(0);
        console.log(arr);
    }
    return arr
}

console.log(shiftArrayValsLeft([4,3,2,1]))

// swapStringForArrayNegativeVals(arr)
// Given an array of numbers, replace any negative values with the string 'Dojo'

// //once finished start in the algo book//