// Topics to Learn:
// Array Methods (push, pop, map, filter, reduce)
// Object Properties and Methods
// Strings and its methods
// Destructuring Assignment
// Spread and Rest Operators
// TASK:
// 1.E-commerce Cart Manager
// Description: Simulate an e-commerce shopping cart. It should:
// Use an array to store items in the cart (e.g., [{name: "Shirt", price: 500}, {name:
// "Jeans", price: 1200}]).
// Use array methods like push(), pop() to add and to remove the last item, and
// display the updated cart.
// Use reduce() to calculate the total price of items in the cart.
// Use destructuring to extract item details.
// Use the spread operator to add a discount to each item.
// Expected Output:
// Cart: Shirt, Jeans
// Total Price: 1700
// Adding Discount...
// Updated Cart: Shirt (450), Jeans (1080)
// 2. Write a program to find the longest word in a given string.
// 3. Create a program to find all pairs of numbers in an array whose sum equals a
// given target.
// Ex:
// Array : [1, 2, 3, 4, 5]
// Target value: 6
// Output: [[1, 5], [2, 4]]


let fruits = ["apple", "banana", "mango", "orange"];
// let str = fruits.join("*");
// console.log(str);

// let poppedFruit = fruits.pop();
// console.log(poppedFruit);

// let pushedFruit = fruits.push("kiwi");
// console.log(fruits);

// let shiftedFruit = fruits.shift();
// console.log(fruits);

// let unshiftedFruit = fruits.unshift("kiwi");
// console.log(fruits);
let numbers = [1, 2, 3, 4, 5];
let mapFunction = numbers.map(num => num*2);
console.log(mapFunction);
console.log(numbers);
let filterFunction = mapFunction.filter(num => num%5 === 0);
console.log(filterFunction);
console.log(mapFunction);