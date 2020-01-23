// // Make 3 functions:

// // Function that takes a number through a parameter and returns how many digits that number has
// // Function that takes a number through a parameter and returns if its even or odd
// // Function that takes a number through a parameter and returns if its positive or negative
// // Create a function that takes a number through a parameter and calls all three functions for the number that was passed. It should show the results in the console.

// // Ex:
// // Code: getNumberStats(-25); Console: 2 Digits, Odd, Negative

function digitCounter(number) {
    numToString = number.toString();
    if (numToString < 0) {
        return numToString.length - 1
    }
    return numToString.length

}

function evenOrOdd(number) {
    if (number % 2) {
        return "Odd"
    }
    return "Even"
}

function positiveOrNegative(number) {
    if (number >= 0) {
        return "Positive"
    }
    return "Negative"
}

function getNumberStats() {
    return `The number you have entered has ${digitCounter(input)} Digits, it is ${evenOrOdd(input)}, and its ${positiveOrNegative(input)}`
}

let input = prompt("Enter a number")
console.log(getNumberStats(input))

// ----------------------------------------------------------------------------------------------

// Create 2 variables with arrow functions.

// 1. First arrow function will accept two parameters,
//     one for element and one for color.The function should change the given 
//     element text color with the color given from the second color parameter.
//     If no parameter is passed for color, the default value is black.

// 2. Second arrow function will accept two parameters,
//     one for element and one for textSize.The function should change the
//      given element text size to the number given from the second textSize parameter.
//      If no parameter is passed for textSize, the default value is 24.

// Create an HTML document with two inputs, a button
// and an h1 header with some text.The first input should be for text size and the 
// second for color.When the button is clicked the h1 header should change according to the input values(change size as the first input value and color as the second input value).Use the functions that we declared earlier and use arrow function for the event listener of the button.

//     Ex:
// ** Input1: ** Person enters 28 ** Input2: ** Person enters red ** Result: ** The h1 text should change to size 28 and color red
