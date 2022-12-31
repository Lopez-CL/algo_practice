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
// Threes and Fives Create function ​ThreesFives()​ that adds each value from 100 and 4000000 (inclusive) if that value is evenly divisible by 3 or 5 ​but not both​. Display the final sum in the console. Second:​ Change your function to make a ​BetterThreesFives(start,end)​where ​start​and ​end values are customizable. You can think of the above ​ThreesFives()​ function as BetterThreesFives(100,4000000)​.

const threesFives = () => {
    let sum = 0;
    for (let i = 100; i <= 400000; i++) {
        i % 3 == 0 && i % 5 != 0 ? sum = sum + i : "";
        i % 5 == 0 && i % 3 != 0 ? sum = sum + i : "";
        console.log(sum);
    }
    return sum;
}

console.log(threesFives());
const betterThreesFives = (min, max) => {
    let sum = 0;
    for (let i = min; i <= max; i++) {
        i % 3 == 0 && i % 5 != 0 ? sum = sum + i : "";
        i % 5 == 0 && i % 3 != 0 ? sum = sum + i : "";
        console.log(sum);
    }
    return sum;
}

console.log(betterThreesFives(3, 15));


// Generate Coin Change Implement ​generateCoinChange(cents)​ that accepts a parameter for the number of cents, and computes how to represent that amount with the smallest number of coins. Console.log the result.
const coinGenerator = (cents) => {
    let amount = cents;
    let quarters = 0;
    let dimes = 0;
    let nickles = 0;
    let pennies = 0;
    while (amount > 0) {
        if (amount >= 25) {
            quarters++;
            amount -= 25;
        }
        else if (amount >= 10) {
            dimes++;
            amount -= 10;
        }
        else if (amount >= 5) {
            nickles++;
            amount -= 5;
        }
        else if (amount >= 1) {
            pennies++;
            amount -= 1;
        }
    };
    return `To make up ${cents} cents in coins, you need ${quarters} quarters, ${dimes} dimes, ${nickles} nickles, and ${pennies} pennies!`
}

console.log(coinGenerator(15));
console.log(coinGenerator(75));
console.log(coinGenerator(85));

// Statistics to Doubles Implement a ‘die’ that randomly returns an integer between 1 and 6 inclusive. Roll a pair of these dice, tracking the statistics until doubles are rolled. Display the ​number of rolls​, ​min​, ​max​, and ​average​.
const stats2Double = () => {
    let rolls = 0
    let min = 0
    let max = 0
    let die1 = Math.floor(Math.random() * 6 - 1 + 1) + 1;
    let die2 = Math.floor(Math.random() * 6 - 1 + 1) + 1;
    while (die1 !== die2) {
        if (die1 > die2) {
            max = die1
            min = die2
        }
        else {
            max = die2
            min = die1
        }
        rolls++;
        console.log(`roll ${rolls}`)
        console.log(`max of that roll is ${max}`)
        console.log(`min of that roll is ${min}`)
        die1 = Math.floor(Math.random() * 6 - 1 + 1) + 1;
        die2 = Math.floor(Math.random() * 6 - 1 + 1) + 1;
    }
    return console.log(`${die1} and ${die2}! We have a match! after ${rolls + 1} rolls!`)
}
stats2Double();

// Sum To One Digit Implement a function ​sumToOne(num)​ that, given a number, sums that number’s digits repeatedly until the sum is only one digit. Return that final one digit result.
const sumToOne = (num) => {
    if (num < 10) {
        return console.log(num)
    }
    const StNum = String(num).split('')
    sum = 0
    for (let i = 0; i < StNum.length; i++) {
        // console.log(+StNum[i])
        sum += +StNum[i];
        // console.log(sum)
    }
    return sumToOne(sum)

}
sumToOne(777)
// Fibonacci Implement the Fibonacci function, a famous mathematical equation that generates a numerical sequence such that each number is the sum of the previous two. The Fibonacci numbers at index 0 and 1, coincidentally, have values of 0 and 1. Your function should accept an argument of which Fibonacci number. Examples: ​fibonacci(2)​ = 1, ​fibonacci(3)​ = 2, ​fibonacci(4)​ = 3, ​fibonacci(5)​ = 5, etc.

const fibonacci = (num) => {
    if (num === 0) {
        return 0
    }
    if (num === 1) {
        return 1
    }
    let intOne = 0
    let intTwo = 1
    let sum = 0
    for (let i = 1; i < num; i++) {
        sum = intOne + intTwo
        intOne = intTwo
        intTwo = sum
    }
    return sum
}
console.log(fibonacci(5));

// Last Digit of A to the B Modern computers can handle very large numbers, but this ability has limits. If a number is repeatedly multiplied by itself, it eventually exceeds the computer’s ability to accurately represent it. (Side note: the number of times it is multiplied by itself is called the ​exponent​.) For an optional end-of-chapter challenge, determine the smallest (least significant) digit of a number that is potentially very, very large. You may find that you must do this without computing the actual (unimaginably large) number. Implement a function that accepts two non-negative integers as arguments. Function ​lastDigitAtoB(a, b)​ should return the last digit of the first number (a) raised to an exponent of the second number (b).

const lastDigitAtoB = (a,b) => {
    let getLastDigit = String(a**b).split('')
    // console.log(getLastDigit)
    // console.log(getLastDigit[getLastDigit.length - 1])
    return getLastDigit[getLastDigit.length - 1]
    
}
console.log(lastDigitAtoB(12,5))

// Clock Hand Angles Traditional 
// clocks are increasingly uncommon, but most can still read rotating hands of hours, minutes, and seconds. Create function ​clockHandAngles(seconds)​ that, given the number of seconds since 12:00:00, will print the angles (in degrees) of the hour, minute and second hands. As a quick review, there are 360 degrees in a full arc rotation. Treat “straight-up” 12:00:00 as 0 degrees for all hands.

const clockHandsAngles = (seconds) =>{
    let hourHand = seconds/3600 % 12;
    // console.log(hour)
    let minuteHand = seconds/60 % 60;
    // console.log(minute);
    let secondsHand = seconds % 60;
    // console.log(secondHand);
    //the following generates the degrees for each hand based on how the hands moves to go in a complete circle.
    return [Math.round(hourHand*30),Math.round(minuteHand*6),Math.round(secondsHand*6)]
}
console.log(clockHandsAngles(50000))
//     let counts = [0,0,0, seconds]
//     let denominations = [3600, 60, 1]
//     let scaling = [30, 6, 6]
//     for(let i =0; i < 3; i++){
//         counts[i] = counts[3]/denominations[i] * scaling[i] % 360
//         counts[3] -= Math.floor(counts[i]/scaling[i] * denominations[i])
//     }
//     return `Hour Hand: ${counts[0]} degs, Minute Hand: ${counts[1]} degs, Second Hand: ${counts[2]} degs`
// }
console.log(clockHandsAngles(165465))