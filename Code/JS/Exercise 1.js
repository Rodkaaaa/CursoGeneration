console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log(!(false || true));
console.log(!(false && true));
console.log(!false && true);
console.log(!true && true);
console.log(!false || false);

/**
 * 1. Create a fork of this repl.it.
 * 2. Write test cases to validate your code before you complete the exercise.
 * 3. Make sure to run your exercise and check
 * for correctness.
 */

/**
 * Exercise #1
 * Create a function that takes in one number
 * and checks if the number is greater than  10. Print out to the console true if it is greater and false otherwise.
 */
function exercise1(num) {
  return num > 10 ? true : false;
}

/**
 * Exercise #2
 * Create a function that takes in one number
 * and checks if it is divisible by 4 or divisible by 9.
 * Print out to the console true if a number
 * if divisible by 4 or 9, and false if a
 * number is not divisible by either number.
 */

function exercise2(num) {
  if (num % 4 == 0) {
    return `divisible por 4`;
  } else if (num % 9 == 0) {
    return `divisible por 9`;
  } else {
    return `no es divisible por4 ni 9`;
  }
}

/**
 * 1. Create a fork of this repl.it.
 * 2. Write test cases to validate your code before you complete the exercise.
 * 3. Make sure to run your exercise and check
 * for correctness.
 */

/**
 * Exercise 1:
 * We want to check if a string is empty.
 * If a string is not empty, we want to print
 * out the first character of that string.
 * If a string is empty, print out a text saying
 * "This string is empty"
 */
function checkEmptyString(str) {
  return str == "" ? "empty" : str.charAt(0);
}
// Example test, should return a
console.log(checkEmptyString("apple"));

/**
 * Exercise 2:
 * We want to compare two strings and check if
 * they are the same - case insensitive.
 * Return a boolean - true if the two strings are
 * the same, and false if they are not
 */
function checkTwoStringsSame(str1, str2) {
  return str1.toLowerCase() == str2.toLowerCase() ? true : false;
}

// Example test, should return true
console.log(checkTwoStringsSame("String1", "string1"));

/**
 * 
 *  Create a function that takes in 2 inputs (using prompt)
 *  and goes through the 5 arithmetic operators (+, -, /, *,
 *  %). The expected output on the console is:
 * `The sum is x` -> x is the calculated sum
 * `The subtraction is y` -> y is the calculated difference
 * `The multiplication is z` -> z is the calculated multiplication
 * `The division is w` -> w is the calculated division
 * `The remainder is q` -> q is the calculated remainder
 */

function mathematicOperations(num1,num2,str){
    switch(str.toLowerCase()){
        case "x":
            return `la suma es: ${num1+num2}`;
        case "y": 
            return `la resta es: ${num1-num2}`;
        case "w":
            return `la division es: ${num1/num2}`;
        case "z":
            return `la multiplicación es: ${num1*num2}`;
        case "q":
            return `la resto es: ${num1%num2}`;
        default:
            return `opción invalida`
    }
}

console.log(mathematicOperations(2,2,""));



/* Part 1
Open a repl.it Javascript page and call it Algorithms Introduction Exercise 1.
Write a program where a user enters the number of tasks they have completed. The program returns one of the following labels to the console:

**Failed**
**Insufficient**
**Good**
**Excellent**
**Error**
based on the conditions:

Failed if they scored 6 or less
Insufficient if they scored > 6 but less than 9 (9 included)
Good if they scored > 9 but less than 14 (14 included)
Excellent if they scored 15
Error if participants enter a negative number or a number outside the range supported (outside 0 - 15) */

function score(score){
  if(score<=6){
    return `Failed`
  }else if (score > 6 && score<=9){
    return `Insufficient`
  }else if(score>9 && score<=14){
    return `Good`
  }else if(score>14){
    return `Excellent`
  }else{
    return `Error`
  }
}
console.log(score(15));

/* Part 2
Open a repl.it Javascript page and call it Algorithms Introduction Exercise 2.
Write an algorithm to find the largest among 5 different numbers entered by the user.
Print out the largest number to the console. */