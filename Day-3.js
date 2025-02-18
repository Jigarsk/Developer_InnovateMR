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
const readline = require("readline");

let cart = [
    {name: "Scarf", price: 290},
    {name: "Shorts", price: 882},
    {name: "Jeans", price: 1501},
    {name: "Tie", price: 534},
    {name: "Shirt", price: 450}
];

// Display current cart
function displayCart(){
    let items = cart.map((item, index) => `${index + 1}. ${item.name} - ${item.price}`).join("\n");
    console.log(`\nCart: \n${items}`);
}

// Calculate total of cart
function totalCart(){
    let totalCart = cart.reduce((total, i) => total + i.price, 0);
    console.log(`\nTotal Price: ${totalCart}`);
}

// Add item in cart
function addItem(name, price){
    cart.push({name: name, price: price});
    console.log(`Added ${name} to cart`);
    displayCart();
    totalCart();
}

// Apply discount to each item in cart
function applyDiscount(discountPercentage){
    console.log("Applying Discount...");
    cart = cart.map((item) => {
        let discountedPrice = item.price - (item.price * discountPercentage / 100);
        return { ...item, price: discountedPrice };
    });
    displayCart();
    totalCart();
}

// Remove last item from cart
function removeItem(){
    let removedItem = cart.pop();
    console.log(`Removed ${removedItem.name} from cart`);
    displayCart();
    totalCart();
}

// Remove specific item from cart by name
function removeSpecificItem(name){
    cart = cart.filter(item => item.name !== name);
    console.log(`Removed all ${name} from cart`);
    displayCart();
    totalCart();
}

// Set up readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Display menu and ask for user choice
function showMenu() {
    console.log(`
    ------------------------------
    E-Commerce Cart Manager Menu
    ------------------------------
    1. Display Cart
    2. Add Item to Cart
    3. Remove Last Item from Cart
    4. Remove Specific Item from Cart
    5. Apply Discount
    6. Exit
    ------------------------------
    `);
    
    rl.question("Please choose an option (1-6): ", function(option) {
        switch(option) {
            case "1":
                displayCart();
                totalCart();
                showMenu();
                break;
            case "2":
                rl.question("Enter item name: ", function(name) {
                    rl.question("Enter item price: ", function(price) {
                        addItem(name, parseFloat(price));
                        showMenu();
                    });
                });
                break;
            case "3":
                removeItem();
                showMenu();
                break;
            case "4":
                rl.question("Enter item name to remove: ", function(name) {
                    removeSpecificItem(name);
                    showMenu();
                });
                break;
            case "5":
                rl.question("Enter discount percentage: ", function(discount) {
                    applyDiscount(parseFloat(discount));
                    showMenu();
                });
                break;
            case "6":
                console.log("Exiting the program...");
                rl.close();
                break;
            default:
                console.log("Invalid option. Please choose a valid option.");
                showMenu();
        }
    });
}

// Start the program
showMenu();

// 2. Write a program to find the longest word in a given string.
// 3. Create a program to find all pairs of numbers in an array whose sum equals a
// given target.
// Ex:
// Array : [1, 2, 3, 4, 5]
// Target value: 6
// Output: [[1, 5], [2, 4]]

