import { sof } from "./lib/sof/sof.js";
import { fibbo } from "./lib/fibbonacci/fibbonacci.js";
import { zigma } from "./lib/zigma/zigma.js";
let selectedTemplate = "#controller";
const onClickHandle = (e) => {
  const oldTemplate = document.querySelector(selectedTemplate);
  selectedTemplate = "#" + e.target.name;
  console.log(oldTemplate);
  const newTemplate = document.querySelector(selectedTemplate);
  document.querySelector("#render").replaceChildren(newTemplate.content);
  addAfterLoad(selectedTemplate);
};

const addAfterLoad = (template) => {
  let calculationHanlder = () => {};
  let scriptCode = () => {};

  switch (template) {
    case "#sof":
      calculationHanlder = sofHandle;
      scriptCode = sof;
      break;
    case "#fibbo":
      calculationHanlder = fibboHandle;
      scriptCode = fibbo;
      break;
    case "#zigma":
      calculationHanlder = zigmaHandle;
      scriptCode = zigma;
      break;
    default:
      calculationHanlder = () => {};
      break;
  }

  document
    .querySelector("#render")
    .getElementsByTagName("section")[0]
    .querySelector(".input")
    .addEventListener("change", calculationHanlder);

  const textArea = document
    .querySelector("#render")
    .getElementsByTagName("section")[0]
    .getElementsByTagName("textarea")[0];

  textArea.value = scriptCode;
};

const onloadData = () => {
  const template = document.querySelector(selectedTemplate);
  document.querySelector("#render").appendChild(template.content);
};

onloadData();

// SOF

const sofHandle = (event) => {
  console.log("hi");
  let output = sof(event.target.value);
  document
    .querySelector("#render")
    .getElementsByTagName("section")[0]
    .querySelector(".output").value = output;
};

// Fibbo

const fibboHandle = (event) => {
  let output = fibbo(event.target.value);
  document
    .querySelector("#render")
    .getElementsByTagName("section")[0]
    .querySelector(".output").value = output;
};

// Zigma

const zigmaHandle = (event) => {
  let output = zigma(event.target.value);
  document
    .querySelector("#render")
    .getElementsByTagName("section")[0]
    .querySelector(".output").value = output;
};

export { onClickHandle };
