// let dataStr = "HHHH AAAAA VVVVV LLLLLL"
// let obj = {}
// for(const data of dataStr) {
//     if(obj[data]) {
//         obj[data] = obj[data] + 1
//     } else {
//         obj[data] = 1
//     }
// }
// console.log(obj)
// for(const data in obj) {
//     console.log(obj[data]);
// }

// let dataAray = [1,2,3,4,5,6,7,8,9]

// let array = dataAray.flatMap((e)=> e % 2 == 0 ? e ** 2 : [])
// console.log(array)

// function findMissingNumber(arr) {
//     const n = arr.length + 1;
//     const sum = (n * (n + 1)) / 2;
//     const arrSum = arr.reduce((acc, curr) => acc + curr, 0);
  
//     return sum - arrSum;
//   }

//   console.log(findMissingNumber([1,2,3,4,5,7,8,9]))


// A school method based Javascript program to
// check if a number is prime
 
  
// function isPrime(n)
// {
//     if (n <= 1)
//         return false;
//     for (let i = 2; i < n; i++)
//         if (n % i == 0)
//             return false;
  
//     return true;
// }
// isPrime(11) ? console.log(" true") : console.log(" false");


// function checkPali(str) {
//     return str === str.split('').reverse().join('')
// }
// console.log(checkPali('leveljj'));

// function findLongestWord(str) {
//     let wo = str.split(' ');
//     let ln = ''
//     for(let i =0; i< wo.length ; i++) {
//         if(wo[i].length > ln.length) {
//             ln = wo[i]
//         } 
//     }
//     return ln
// }
// console.log(findLongestWord('The quickjjj brown foxiiiiiiiiiii jumpsjfghfghfghfghfghfg over the lazy dog'));

// function checkPalindrome(str) {
//     const len = str.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(checkPalindrome('level'))

// function checkEvenOdd(number) {
//     if (typeof number !== 'number' || isNaN(number)) {
//         return "Invalid input. Please enter a valid number.";
//     } else {
//         if (number % 1 !== 0) {
//             return "Decimal numbers are not allowed. Please enter an integer.";
//         } else {
//             if (number % 2 === 0) {
//                 return number + " is even.";
//             } else {
//                 return number + " is odd.";
//             }
//         }
//     }
// }

// // Example usage:
// console.log(checkEvenOdd(5));      // Output: 5 is odd.
// console.log(checkEvenOdd(10));     // Output: 10 is even.
// console.log(checkEvenOdd(3.14));   // Output: Decimal numbers are not allowed. Please enter an integer.
// console.log(checkEvenOdd("hello")); // Output: Invalid input. Please enter a valid number.

// function printPattern(rows) {: This declares a function named printPattern that takes one parameter rows, which indicates the number of rows in the pattern.

//     for (let i = 1; i <= rows; i++) {: This outer loop iterates over each row of the pattern. It starts from 1 and continues until rows. For each iteration, i represents the current row number.
    
//     let line = '';: This initializes an empty string line to store the numbers for the current row.
    
//     let num = i;: This initializes a variable num to store the starting number for the current row. It starts with the current row number (i).
    
//     for (let j = 1; j <= i; j++) {: This inner loop iterates over each number in the current row. It starts from 1 and continues until i, inclusive. For each iteration, j represents the position of the number in the row.
    
//     line += num + ' ';: Inside the inner loop, it appends the current value of num followed by a space to the line string. This builds the string representation of the current row.
    
//     num += rows - j;: After adding the current number to the line, it updates the value of num to the next number in the sequence. It does so by adding rows - j to num, which is the difference between the total number of rows and the current position in the row. This generates the pattern of increasing numbers diagonally.
    
//     console.log(line);: After completing the inner loop for a row, it prints the line string, which contains the numbers for that row, to the console.
    
//     }: Closes the inner loop.
    
//     }: Closes the outer loop.
    
//     printPattern(5);: This calls the printPattern function with the argument 5, which prints the pattern for 5 rows.
// function printPattern(rows) {
//     for (let i = 1; i <= rows; i++) {
//         let line = '';
//         let num = i;
//         for (let j = 1; j <= i; j++) {
//             line += num + ' ';
//             num += rows - j;
//         }
//         console.log(line);
//     }
// }

// printPattern(5);
// function averageCalculate(Arr) {
//     let sum = 0
//     for (i = 0; i < Arr.length; i++) {
//         sum = sum + Arr[i];
//     }
//     let c = (sum / Arr.length)
//     console.log("Average is: ", c)

//     if (!Array.isArray(Arr)) {
//         console.log("Invalid Array! Please enter numbers in array")
//         return;
//     }

//     else if (Arr.length === 0) {
//         console.log("0");
//         return;
//     }

//     for (i = 0; i < Arr.length; i++) {
//         if (typeof (Arr[i]) !== 'number' || isNaN(Arr[i])) {
//             console.log("Invalid Array! Please enter numbers in array")
//             return;
//         }
//     }
// }

// averageCalculate([10, 20, 30]); // Output: 20
// averageCalculate([-5, 0, 5]); // Output: 0
// averageCalculate([2.5, 3.5, 4.5]); // Output: 3.5
// averageCalculate([100]); // Output: 100
// averageCalculate([]); // Output: 0
// averageCalculate(['a', 'b', 'c']); // Output: Invalid Array: Array contains non-numeric values.
// averageCalculate([1, '2', 3]); // Output: Invalid Array: Array contains non-numeric values.
// averageCalculate(123); // Output: Invalid input: Input should be an array.


// function averageCalculate(Arr) {

//     if (!Array.isArray(Arr)) {
//         console.log("Invalid Array! Please enter numbers in array")
//         return("Invalid Array! Please enter numbers in array");
//     }

//     else if (Arr.length === 0) {
//         console.log("0");
//         return("0");
//     }

//     for (i = 0; i < Arr.length; i++) {
//         if (typeof (Arr[i]) !== 'number' || isNaN(Arr[i])) {
//             console.log("Invalid Array! Please enter numbers in array")
//             return("Invalid Array! Please enter numbers in array");
//         }
//     }
//     let sum = 0
//     for (i = 0; i < Arr.length; i++) {
//         sum = sum + Arr[i];
//     }
//     c = (sum / Arr.length)
//     console.log("Average is: ", c)
// }

// let a = averageCalculate({});
// console.log(a,'FROM AAAAAAAAAAAAAAAAAA')

// function averageCalculate(Arr) {

//     if (!Array.isArray(Arr)) {
//         return "Invalid Array! Please enter numbers in array"
//     }

//     else if (Arr.length === 0) {
//         return "0";
//     }

//     for (i = 0; i < Arr.length; i++) {
//         if (typeof (Arr[i]) !== 'number' || isNaN(Arr[i])) {
//             return "Invalid Array! Please enter numbers in array"
            
//         }
//     }
//     let sum = 0
//     for (i = 0; i < Arr.length; i++) {
//         sum = sum + Arr[i];
//     }
//     return sum / Arr.length
//     // console.log("Average is: ", c)
// }

// let f = averageCalculate([1, 2, Infinity, 4, 5])
// // averageCalculate([5, "a", 3])
// console.log(f, 'fvw')