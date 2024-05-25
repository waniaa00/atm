#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt(
   [
     {
        name: "pin",
        message: "enter your pin",
        type : "number"
    }
]
)
if (pinAnswer.pin === 1234) {
    console.log("Correct pin code!")
  let operationAns = await inquirer.prompt(
    [
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["withdraw", "Check balance"]
        }
    ]
   );
   console.log(operationAns.operation);
   
   if (operationAns.operation === "withdraw"){
    let amountAns = await inquirer.prompt(
        [
            {
                name: "amount",
                message:"select your amount",
                type: "list",
                choices : ["1000","2000","5000","10000"]
            }
        ]
    );
    myBalance -= amountAns.amount;
    console.log("Your remaining balance is: " + myBalance)
   }
   else if (operationAns.operation === "Check balance"){
    console.log(`Your current balamce is ${myBalance}`)
   }


}

else {
    console.log("Incorrect pin code")
};