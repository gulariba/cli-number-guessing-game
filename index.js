#!/usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to codewithAreeba - CLI Number Guessing Game");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your guess number(number limit from 1 to 5 ):",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("congratulations! you got a correct answer.");
}
else {
    console.log("soory! you guess a wrong number");
}
