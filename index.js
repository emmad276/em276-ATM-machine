#! /usr/bin/env node 
import inquirer from "inquirer";
let mybalance = 50000; // Dollars
let mypin = 1234;
let pinanswer = await inquirer.prompt([
    {
        name: "pinnumber",
        type: 'number',
        message: 'Enter you pin number'
    },
]);
if (pinanswer.pinnumber === mypin) {
    console.log("Correct Pin Code");
    let operation_ans = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ['Withdraw amount', 'Check balance', 'Fast Cash']
        },
    ]);
    if (operation_ans.operation === "Withdraw amount") {
        let amountans = await inquirer.prompt([{
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }]);
        if (amountans.amount > mybalance) {
            console.log(`You are out of range`);
        }
        else {
            mybalance -= amountans.amount,
                console.log("Please collect your amount");
            console.log(`Your remaining balance is ${mybalance}`);
        }
    }
    else if (operation_ans.operation === "Check balance") {
        console.log(`Your balance is ${mybalance}`);
    }
    else if (operation_ans.operation === "Fast Cash") {
        let fcash = await inquirer.prompt([{
                name: "fcash_options",
                message: "Select one of the options",
                type: "list",
                choices: [1000, 2000, 5000, 10000, "Balance Inquiry"]
            },]);
        if (fcash.fcash_options === 1000) {
            mybalance -= 1000;
            console.log(`Please collect your amount`);
            console.log(`Your remaining balace is ${mybalance}`);
        }
        else if (fcash.fcash_options === 2000) {
            mybalance -= 2000;
            console.log(`Please collect your amount`);
            console.log(`Your remaining balace is ${mybalance}`);
        }
        else if (fcash.fcash_options === 5000) {
            mybalance -= 5000;
            console.log(`Please collect your amount`);
            console.log(`Your remaining balace is ${mybalance}`);
        }
        else if (fcash.fcash_options === 10000) {
            mybalance -= 10000;
            console.log(`Please collect your amount`);
            console.log(`Your remaining balace is ${mybalance}`);
        }
        else {
            console.log(`Your Balance is ${mybalance}`);
        }
    }
}
else {
    console.log("Incorrect Pin Code");
}
