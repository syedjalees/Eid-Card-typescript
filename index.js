#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let Regards = await inquirer.prompt([
    {
        name: "regards",
        type: "input",
        message: "Enter Your Name Here to Make a Eid Card of Your name!"
    }
]);
const card = Regards.regards;
function Wishing(Eid) {
    Eid("AL AZHA");
}
let wish = (konsiEid) => {
    console.log(chalk.yellow("\n\n\t      Wishing You\n"));
    setTimeout(() => {
        console.log(chalk.blueBright("\t\tHappy..."));
    }, 1000);
    setTimeout(() => {
        console.log(chalk.redBright(`\t\tEid`));
    }, 2000);
    setTimeout(() => {
        console.log(chalk.redBright(`\t\t${konsiEid}`));
    }, 2500);
    setTimeout(() => {
        console.log(chalk.blueBright(`\t\tMubarak..!`));
    }, 3000);
};
Wishing(wish);
setTimeout(() => {
    console.log(chalk.yellow(`\n\t  Regards: ${card}\n\n`));
}, 3500);
