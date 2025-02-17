// TASK:
// 1. Bank Account Manager
// Description:
// Create a program to simulate a basic bank account. It should:
// Use a function declaration to create an account with an initial balance.
// Use arrow functions for deposit() and withdraw() operations.
// Ensure the balance is private and only accessible via methods.
// Validate transactions to ensure sufficient balance during withdrawal.
// Expected Output:
// Initial Balance: 1000
// Deposit 500: New Balance = 1500
// Withdraw 200: New Balance = 1300
// Withdraw 1500: Insufficient Balance!

function bankAccount(initialBalance) {
    let balance = initialBalance;
    return {
        deposit: (amount) => {
            balance += amount;
            console.log(`Deposit ${amount}: New Balance = ${balance}`);
        },
        withdraw: (amount) => {
            if (balance >= amount) {
                balance -= amount;
                console.log(`Withdraw ${amount}: New Balance = ${balance}`);
            } else {
                console.log(`Insufficient Balance!,available balance is", ${balance}`);
            }
        }
        
    };
   
}
// 2. Write a function to calculate the square of a number.
let number = 5;
let squareOfNumber = number * number;
console.log(squareOfNumber);



// 3.Create a function to check if a given string is a palindrome.
function isPalindrome(str){
    let normalStr = str.toLowerCase().replace(/[\W_]/g, '');
    let reversedStr = "";
    for(let i = normalStr.length - 1; i >= 0; i--){
        reversedStr += normalStr[i];

    }
    if(normalStr === reversedStr){
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrome("madam"));

// 4.Write a function to find the largest of three numbers.

let num1 = 10;
let num2 = 20;
let num3 = 30;
if(num1 >num2&&num1>num3)
    {
        console.log(num1);
    }
else if(num2>num1&&num2>num3)
    {
        console.log(num2);
    }   
else
    {
        console.log(num3);
    }
 
// 5. What will happen if you declare a variable without let, const, or var inside a function?

// If you declare a variable inside a function without using let, const, or var, it will create a global variable (or an implicit global). This is because the variable is not declared using let, const, or var, so it is not block-scoped to the function and will be hoisted to the global scope.