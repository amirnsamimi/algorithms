// import { sof } from "./lib/sof/sof.js";
// import { fibbo } from "./lib/fibbonacci/fibbonacci.js";
// import { zigma } from "./lib/zigma/zigma.js";
// import { recursive, recursive2 } from "./lib/recursive/recursive.js";
// let selectedTemplate = "#controller";
// const onClickHandle = (e) => {
//   selectedTemplate = "#" + e.target.name;
//   const newTemplate = document.querySelector(selectedTemplate);
//   document.querySelector("#render").replaceChildren(newTemplate.content);
//   addAfterLoad(selectedTemplate);
// };
// const addAfterLoad = (template) => {
//   let calculationHanlder = () => {};
//   let scriptCode = () => {};
//   switch (template) {
//     case "#sof":
//       calculationHanlder = sofHandle;
//       scriptCode = sof;
//       break;
//     case "#fibbo":
//       calculationHanlder = fibboHandle;
//       scriptCode = fibbo;
//       break;
//     case "#zigma":
//       calculationHanlder = zigmaHandle;
//       scriptCode = zigma;
//       break;
//       case "#recursive":
//         calculationHanlder = recursiveHanlde;
//         scriptCode = recursive;
//         break;
//         case "#recursive2":
//           calculationHanlder = recursive2Hanlde;
//           scriptCode = recursive2;
//           break;
//     default:
//       calculationHanlder = () => {};
//       break;
//   }
//   document
//     .querySelector("#render")
//     .getElementsByTagName("section")[0]
//     .querySelector(".input")
//     .addEventListener("change", calculationHanlder);
//   const textArea = document
//     .querySelector("#render")
//     .getElementsByTagName("section")[0]
//     .getElementsByTagName("textarea")[0];
//   textArea.value = scriptCode;
// };
// const onloadData = () => {
//   const template = document.querySelector(selectedTemplate);
//   document.querySelector("#backtohome").addEventListener("click", restoreMenu);
//   document.querySelector("#render").appendChild(template.content);
// };
// const restoreMenu = () => {
//   window.location.replace("/algorithms");
// };
// onloadData();
// // SOF
// const sofHandle = (event) => {
//   console.log("hi");
//   let output = sof(event.target.value);
//   document
//     .querySelector("#render")
//     .getElementsByTagName("section")[0]
//     .querySelector(".output").value = output;
// };
// // Fibbo
// const fibboHandle = (event) => {
//   let output = fibbo(event.target.value);
//   document
//     .querySelector("#render")
//     .getElementsByTagName("section")[0]
//     .querySelector(".output").value = output;
// };
// // Zigma
// const zigmaHandle = (event) => {
//   let output = zigma(event.target.value);
//   document
//     .querySelector("#render")
//     .getElementsByTagName("section")[0]
//     .querySelector(".output").value = output;
// };
// // recursive
// const recursiveHanlde = (event) => {
//   let output = recursive(event.target.value);
//   document
//     .querySelector("#render")
//     .getElementsByTagName("section")[0]
//     .querySelector(".output").value = output;
// };
// const recursive2Hanlde = (event) => {
//   let output = recursive2(Number(event.target.value));
//   document
//     .querySelector("#render")
//     .getElementsByTagName("section")[0]
//     .querySelector(".output").value = output;
// };
// export { onClickHandle };
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
    }
    else {
        console.log("❌ No valid substring found.");
        main();
    }
};
main();
