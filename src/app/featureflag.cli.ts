import inquirer from "inquirer";
import { FeatureFlag } from "./featureflag.js";

const featureFlag = new FeatureFlag();

export const run = async () => {
  while (true) {
    const { action } = await inquirer.prompt([
      {
        type: "list",
        name: "action",
        message: "Feature Flag Manager - What would you like to do?",
        choices: [
          "1. List all features",
          "2. Add new feature",
          "3. Enable feature for all users",
          "4. Disable feature",
          "5. Enable feature for specific users",
          "6. Check if feature is enabled for user",
          "7. List enabled features for user",
          "Exit",
        ],
      },
    ]);

    if (action === "Exit") {
      console.log("Exiting Feature Flag Manager.");
      break;
    }

    switch (action) {
      case "1. List all features":
        console.log("Available Features:");
        console.log([...featureFlag["featureMap"].keys()]);
        break;

      case "2. Add new feature": {
        const { name } = await inquirer.prompt([
          { type: "input", name: "name", message: "Enter feature name:" },
        ]);
        featureFlag.addFeature(name);
        console.log(`Feature "${name}" added.`);
        break;
      }

      case "3. Enable feature for all users": {
        const { name } = await inquirer.prompt([
          { type: "input", name: "name", message: "Enter feature name to enable:" },
        ]);
        featureFlag.enableFeature(name);
        console.log(`Feature "${name}" enabled for all users.`);
        break;
      }

      case "4. Disable feature": {
        const { name } = await inquirer.prompt([
          { type: "input", name: "name", message: "Enter feature name to disable:" },
        ]);
        featureFlag.disableFeature(name);
        console.log(`Feature "${name}" disabled.`);
        break;
      }

      case "5. Enable feature for specific users": {
        const { name, users } = await inquirer.prompt([
          { type: "input", name: "name", message: "Enter feature name:" },
          {
            type: "input",
            name: "users",
            message: "Enter user IDs (comma-separated):",
          },
        ]);
        const userIds = users
          .split(",")
          .map((id: string) => parseInt(id.trim(), 10));
        featureFlag.enableFeatureForUsers(name, userIds);
        console.log(`Feature "${name}" enabled for users: ${userIds.join(", ")}`);
        break;
      }

      case "6. Check if feature is enabled for user": {
        const { name, userId } = await inquirer.prompt([
          { type: "input", name: "name", message: "Enter feature name:" },
          { type: "number", name: "userId", message: "Enter user ID:" },
        ]);
        const result = featureFlag.isFeatureEnabled(name, userId);
        console.log(
          result
            ? `Feature "${name}" is enabled for user ${userId}`
            : `Feature "${name}" is NOT enabled for user ${userId}`
        );
        break;
      }

      case "7. List enabled features for user": {
        const { userId } = await inquirer.prompt([
          { type: "number", name: "userId", message: "Enter user ID:" },
        ]);
        const list = featureFlag.listEnabledFeatures(userId);
        console.log(`Features enabled for user ${userId}:`, list);
        break;
      }
    }
  }
};


