// TypeError: indexOf is not a function in JavaScript

// EXAMPLE 1 - Convert the value to a String or an Array before using `indexOf()`

// ✅ Convert to a String before using indexOf()
const num = 1234;
const result1 = String(num).indexOf('3');
console.log(result1); // 👉️ 2

// ---------------------------------------

// ✅ Convert to an Array before using indexOf()
const set = new Set(['a', 'b', 'c']);
const result2 = Array.from(set).indexOf('b');
console.log(result2); // 👉️ 1

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if the value is a string or an array before using `indexOf()`

// // ✅ check if the value is a String before using indexOf()
// const num = 1234;
// const result1 = typeof num === 'string' ? num.indexOf('3') : -1;
// console.log(result1); // 👉️ -1

// // ----------------------------------------------------------

// // ✅ check if the value is an Array before using indexOf()

// const set = new Set(['a', 'b', 'c']);
// const result2 = Array.isArray(set) ? set.indexOf('b') : -1;
// console.log(result2); // 👉️ -1

// ------------------------------------------------------------------

// // EXAMPLE 3 - Using a simple `if` statement

// // ✅ check if the value is a String before using indexOf()
// const num = 1234;

// let result1 = -1;

// if (typeof num === 'string') {
//   result1 = num.indexOf('3');
// }

// console.log(result1); // 👉️ -1

// // ----------------------------------------------------------

// // ✅ check if the value is an Array before using indexOf()

// const set = new Set(['a', 'b', 'c']);

// let result2 = -1;

// if (Array.isArray(set)) {
//   result2 = set.indexOf('b');
// }

// console.log(result2); // 👉️ -1
