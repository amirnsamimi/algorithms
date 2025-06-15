// import { sof } from "./lib/sof/sof.js";
// import { fibbo } from "./lib/fibbonacci/fibbonacci.js";
// import { zigma } from "./lib/zigma/zigma.js";
import { longestValidSubstring } from "./lib/longestVowelsValidSubString/longestVowelsValidSubString.js";
import inquirer from "inquirer";
import { sumOfFactorials } from "./lib/sof/sof.js";
var moduleMap;
(function (moduleMap) {
    moduleMap["longest substring with valid even vowels"] = "longest substring with valid even vowels";
    moduleMap["recursive algo"] = "recursive algo";
    moduleMap["fibbonacci algorithm"] = "fibbonacci algorithm";
    moduleMap["sum of factorials"] = "sum of factorials";
})(moduleMap || (moduleMap = {}));
const choices = Object.keys(moduleMap);
const main = async () => {
    while (true) {
        const { application } = await inquirer.prompt([
            {
                type: "list",
                name: "application",
                message: "Select which algorithm to use:",
                choices,
            },
        ]);
        const { inputString } = await inquirer.prompt([
            {
                type: "input",
                name: "inputString",
                message: "Enter a string to test:",
            },
        ]);
        switch (application) {
            case moduleMap["longest substring with valid even vowels"]: {
                const result = longestValidSubstring(inputString || "");
                console.log(`The longest valid substring is: ${result} long`);
                break;
            }
            case moduleMap["fibbonacci algorithm"]: {
                console.log("thank you");
                break;
            }
            case moduleMap["sum of factorials"]: {
                const result = sumOfFactorials(inputString || "");
                console.log(`Sum of factorial is: ${result}`);
                break;
            }
            default:
                console.log("not valid");
                break;
        }
        const { again } = await inquirer.prompt([
            {
                type: "confirm",
                name: "again",
                message: "Do you want to test another string?",
                default: true,
            },
        ]);
        if (!again) {
            console.log("👋 Done!");
            break;
        }
    }
};
main();
