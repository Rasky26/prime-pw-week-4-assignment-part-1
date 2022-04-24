console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  console.log(`\n-->   Input for question #2: ${name}`)
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log(`Question #2: ${helloName('Colin')}`)


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  console.log(`\n-->   Input for question #3: firstNumber: ${firstNumber}, secondNumber: ${secondNumber}`)
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber
}

// Logs out the answer to question #3
console.log(`Question #3: ${addNumbers(1, 2)}`)

// 3.a Adds an array of numbers and returns the result.
//     Uses the `reduce()` function.
//     Ref link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
//
// Set the callable `reduce()` function, set `initialValue` to a default
function addArray(numbersArray, initialValue=0) {
   // call built-in `reduce()` function
  return numbersArray.reduce(
     // adds together digits using an arrow function
    (exisingSum, nextValue) => exisingSum + nextValue,
     // sets a starting value, specified as zero, though could be skipped if array exists
    initialValue
  )
}

// Initialize the values
let addNumbersInArray = [2, 3, 5, 7, 11, 13]
let initialValue = 0

// Logs out the answer to question #3.a
console.log(`\n-->   Input for question #3.a:`, addNumbersInArray)
console.log(`Question #3.a ${addArray(addNumbersInArray, initialValue)}`)


// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3 ){
  console.log(`\n-->   Input for question #4: num1: ${num1}, num2: ${num2}, num3: ${num3}`)
  // Multiply and return the values in a singular step
  return num1 * num2 * num3
}

// Logs out the answer to quesiton #4
console.log(`Question #4: ${multiplyThree(2, 3, 5)}`)


// 4.a Function to multiply array of numbers, NOT using the `reduce()` function
// Function that loops through the 
function multiplyArray(valuesArray) {
  
  // Check for values in array
  if (!valuesArray.length) {
    return 0
  }

  // Set the starting value
  let totalValue = valuesArray[0]

  // Check if there was only a single value
  if (valuesArray.length == 1) {
    return totalValue
  }

  // Loop through remaining values, starting with the second value
  for (let i = 1; i < valuesArray.length; i++) {
    totalValue *= valuesArray[i]
  }

  // Return the results
  return totalValue
}

// Initialize the values
let multiplyNumbersInArray = [1, 1, 2, 3, 5, 8, 13]

// Log out the answer to question #4.a
console.log(`\n-->   Input for question #4.a:`, multiplyNumbersInArray)
console.log(`Question #4.a ${multiplyArray(multiplyNumbersInArray)}`)



// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  
  // Set a check if the number is greater than zero
  if ( number > 0 ){
    return true;
  }
  
  // If it was not, default to `false`
  return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {

  // First, check if the array has a length.
  // If the length is zero, that is the same as a boolean `false`,
  // so you can use a `not` in front of it to make it choose
  // that answer to output.
  if (!array.length) {

    // Was unsure if you wanted `undefined` actually returned, or
    // just a blank `return` statement. Opted for the verbose method.
    return undefined
  }

  // Otherwise, just return the last value using the array length minus one.
  // Need to use minus one as the array count starts at zero.
  return array[array.length - 1]
}

// Initialize some values:
let validArray = [1, false, ['This', 'is', true], 'beans']
let emptyArray = []

// Log out the answer to question #6.
console.log(`\n-->   Input for question #6. with exiting array:`, validArray)
console.log(`Question #6. ${getLast(validArray)}`)

console.log(`\n-->   Input for question #6. with an empty array:`, emptyArray)
console.log(`Question #6. ${getLast(emptyArray)}`)


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){

  // Step through each value in the array
  for (let v of array) {
    // Check if that value exactly matches the search term.
    if (value === v) {
      // Return `true` if it does
      return true
    }
  }
  // If no matches were found, return `false`
  return false
}

// Initialize the array and the search term
let arrayToSearch = ['apple', 'toast', 'eggs', 'bacon']
let validSearchTerm = 'eggs'
let invalidSearchTerm = 'cheese'

// Log out the answer to question #7.
console.log(`\n-->   Input for question #7. with a valid search term -- Term: ${validSearchTerm} | Array:`, arrayToSearch)
console.log(`Question #7. ${find(validSearchTerm, arrayToSearch)}`)

console.log(`\n-->   Input for question #7. with a invalid search term -- Term: ${invalidSearchTerm} | Array:`, arrayToSearch)
console.log(`Question #7. ${find(invalidSearchTerm, arrayToSearch)}`)

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

  // Check if the first letter of the string matches the search letter
  if (string[0] === letter) {
    return true
  }

  // Otherwise, return `false`
  return false
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function returnPositiveArray(array) {

  // Initialize a blank array
  let returnArray = []

  // Loop through input array
  for (let a of array) {
    // Check if the value is greater than zero
    if (a > 0) {
      // If greater than zero, push to the `returnArray`
      returnArray.push(a)
    }
    // Otherwise, no action is needed if it is less than zero
  }

  // Once the loop is complete, return the `returnArray`
  return returnArray
}

// Initialize various arrays
let mixedArray = [26, 0, 86, -13, 0.0009, -0.0000000000001]
let negativeArray = [-1, -2, -3]

// Log out the answer to question #10.
console.log(`\n-->   Input for question #10. with a mixed array -- Array:`, mixedArray)
console.log(`Question #10.`, returnPositiveArray(mixedArray))

console.log(`\n-->   Input for question #10. with a negative array -- Array:`, negativeArray)
console.log(`Question #10.`, returnPositiveArray(negativeArray))

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// Link to the challenge: https://edabit.com/challenge/eCPim4XcssdZdvs32

// Given an array of strings, numbers, and a combination of each,
// the goal is to populate a new array if any value for each index
// of the array has a number in it.

function containsNumber(array) {

  // Initialize a return array
  let returnArray = []

  // Loop through the input array to get each index value
  for (let word of array) {

    // Check for blank array value
    if (!word) {

      // If a blank is found, continue with the next array value
      continue
    }

    // Check if the word is already a valid number
    if (!isNaN(word)) {
      returnArray.push(word)

      // This loop is now complete, continue to next value in the array
      continue
    }

    // Now, within each index value, loop through each individual character
    // to check if the current item being examined is a number.
    // I am using the inverse of `isNaN`, which stands for 'is not a number'.
    for (let char of word ) {

      // Check if the current character is NOT 'is not a number', which
      // ultimately checks if the current value is indeed a number.
      if (!isNaN(char)) {

        // Add the total word to the `returnArray`
        returnArray.push(word)

        // Break out of the current loop as a valid number has been found
        break
      }

    }
  }

  // Once the array loop is done, return the results
  return returnArray
}

// Initialize some values
let blendedCharactersArray = ['two', 'two2', ,'-2', -2, 'two 2', 222, '2two', , 2.2, '2 two', 't2wo', '222']

// Log out the results
console.log(`\n-->   Input for question #11. -- Array:`, blendedCharactersArray)
console.log(`Question #11.`, containsNumber(blendedCharactersArray))


// 11.a Found another fun project to work on.
// Link to the question: https://edabit.com/challenge/8vJaRDKxoGQ5JnCCz

function hasThreeDivisors(number) {
  // This function takes in a number and begins checking with the value
  // of 2 (incrementing by one each step) to see if that original number is
  // divisable.
  //
  // Any valid responses are stored in an array, any numbers that are not
  // fully divisible are skipped.
  //
  // If the length of the array climbs greater than 3, stop the loop.

  // Set an array to hold the results
  let returnArray = []

  // Initialize an incrementor value, start with 0, but immediately increment
  // it to 1, the lowest divible value.
  let divisorCheck = 0

  // Since the highest divisable value for a number is half its amount
  // (8 would be a good stopping point when looking at the value of 16),
  // cap the loop amount at half the total number (plus one for edge cases,
  // such as 1)
  while ( divisorCheck < ((number + 1) / 2) ) {

    // Increment the `divisorCheck` by one
    divisorCheck++

    // Need to check if the same `divisorCheck` value can be used
    // multiple times, such as 2 * 2 * 2 = 8
    //
    // Since 8 % 2 = 0, and zero can be converted to Boolean `false`, I need to
    // inverse that `false` to `true` with a `!`.
    //
    // This will also help prevent an infinite loop from forming.
    if (!Boolean(number % divisorCheck)) {

      // If a valid divisor is found, add that to our `returnArray`
      returnArray.push(divisorCheck)
    }
  }

  // Make sure to add on the number itself to the resultant array.
  returnArray.push(number)

  // If the number of divisors found is exactly 3, return `true`.
  // Otherwise, return `false`
  return returnArray.length === 3 ? true : false
}

// Initialize the starting values
let validResponseOne = 4
let invalidResponse = 12
let validResponseTwo = 25

// Log out the results
console.log(`\n-->   Input for question #11.a -- Number:`, validResponseOne)
console.log(`Question #11.a`, hasThreeDivisors(validResponseOne))

console.log(`\n-->   Input for question #11.a -- Number:`, invalidResponse)
console.log(`Question #11.a`, hasThreeDivisors(invalidResponse))

console.log(`\n-->   Input for question #11.a -- Number:`, validResponseTwo)
console.log(`Question #11.a`, hasThreeDivisors(validResponseTwo))