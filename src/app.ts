import { sof } from "./lib/sof/sof.js";
import { fibbo } from "./lib/fibbonacci/fibbonacci.js";
import { zigma } from "./lib/zigma/zigma.js";
import { recursive, recursive2 } from "./lib/recursive/recursive.js";
import { longestValidSubstring } from "./lib/longestVowelsValidSubString/longestVowelsValidSubString.js";

// Node.js-compatible prompt
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const main = async () => {
  const rl = readline.createInterface({ input, output });

  const testStr = await rl.question("Enter a string: ");
  rl.close();

  const result = longestValidSubstring(testStr || "");
  
  if (result > 0) {
    console.log(`✅ The longest valid substring is: ${result} long`);
    main();
  } else {
    console.log("❌ No valid substring found.");
    main();
  }
};

main();
