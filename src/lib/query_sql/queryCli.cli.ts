import inquirer from "inquirer";
import {getMostSpendUsers,getOrderAvgIn2023,getUsersWithoutOrder} from "./query_sql.js";
export  async function run() {
    while (true) {
        const { action } = await inquirer.prompt([
          {
            type: "list",
            name: "action",
            message: "📋 Feature Flag Manager - What would you like to do?",
            choices: [
              "1. Get Users with Most Spend Amount.",
              "2. Get Orders AVG in 2023",
              "3. Get Users without any submited order.",
              "Exit",
            ],
          },
        ]);

    if (action === "Exit") {
        console.log("Exiting SQL Query Cli.");
        break;
      }
  
      switch (action) {
        case "1. Get Users with Most Spend Amount.":
            getMostSpendUsers()
          break;
  
        case "2. Get Orders AVG in 2023": {
            getOrderAvgIn2023()
          break;
        }
  
        case "3. Get Users without any submited order.": {
            getUsersWithoutOrder()
          break;
        }
    }
}
}




