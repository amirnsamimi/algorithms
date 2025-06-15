import { longestValidSubstring } from "./lib/longestVowelsValidSubString/longestVowelsValidSubString.js";
import inquirer from "inquirer";
var moduleMap;
(function (moduleMap) {
    moduleMap["longest substring with valid even vowels"] = "longest substring with valid even vowels";
    moduleMap["recursive algo"] = "recursive algo";
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
            case moduleMap["longest substring with valid even vowels"]:
                const result = longestValidSubstring(inputString || "");
                if (result > 0) {
                    console.log(`The longest valid substring is: ${result} long`);
                }
                else {
                    console.log("No valid substring found.");
                }
                break;
            case moduleMap["recursive algo"]:
                console.log("thank you");
                break;
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
