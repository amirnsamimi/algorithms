import inquirer from "inquirer";
import { longestValidSubstring } from "./lib/longestVowelsValidSubString/longestVowelsValidSubString.js";
import { sumOfFactorials } from "./lib/sof/sof.js";
import { maxGroupLengthSum } from "./lib/maxGroupLenghtSum/maxGroupLengthSum.js";
import { run as featureRun } from "./app/featureflag.cli.js";
import { run as queryRun } from "./lib/query_sql/queryCli.cli.js";

enum moduleMap {
  "longest substring with valid even vowels" = "longest substring with valid even vowels",
  "sum of factorials" = "sum of factorials",
  "max group length sum" = "max group length sum",
  "feature Flag" = "feature Flag",
  "SQL Queries" = "SQL Queries",
}

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

    switch (application) {
      case moduleMap["longest substring with valid even vowels"]: {
        const { inputString } = await inquirer.prompt([
          {
            type: "input",
            name: "inputString",
            message: "Enter a string to test:",
          },
        ]);
        console.log(`Your Input: ${inputString}`);
        const result = longestValidSubstring(inputString || "");
        console.log(`The longest valid substring is: ${result} long`);
        break;
      }
      case moduleMap["max group length sum"]: {
        const { inputArray } = await inquirer.prompt([
          {
            type: "input",
            name: "inputArray",
            message: "Enter Array of Numbers (comma-separated).ex: 3,3,3,3:",
            filter: (input) =>
              input.split(",").map((item: string) => Number(item.trim())),
          },
        ]);
        console.log(`Your Input: ${inputArray}`);
        const result = maxGroupLengthSum(inputArray || "");
        console.log(`max group length is: ${result}`);
        break;
      }
      case moduleMap["sum of factorials"]: {
        const { inputString } = await inquirer.prompt([
          {
            type: "input",
            name: "inputString",
            message: "Enter a string to test:",
          },
        ]);
        console.log(`Your Input: ${inputString}`);
        const result = sumOfFactorials(inputString || "");
        console.log(`Sum of factorial is: ${result}`);
        break;
      }
      case moduleMap["feature Flag"]: {
        await featureRun();
        break;
      }
      case moduleMap["SQL Queries"]: {
        await queryRun();
        break;
      }
      default:
        console.log("not valid");
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
