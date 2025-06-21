# 🧠 CLI Toolkit App

This is a command-line interface (CLI) application that offers a variety of algorithms and tools including:

- ✅ Longest Valid Substring with Even Vowels  
- ✅ Sum of Factorials  
- ✅ Max Group Length Sum  
- ✅ Feature Flag Management System  
- ✅ SQL Query Analyzer (mock interface)  

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/cli-toolkit-app.git
cd cli-toolkit-app
```


# Install dependencies, Build & Run
```bash
npm install
npm run build   # Compiles TypeScript to JavaScript
npm start       # Starts the CLI app (runs built JS)
```


## Single dependencies installation, Build & Run

```bash
npm run cli     # Starts the CLI app (runs built JS)
```


## Feature Flag Module usage

To add a new feature:

Create a new module in lib/your-feature-name/.
Export a run() function that prompts the user and handles all related logic.
Register the feature in the moduleMap enum inside src/app.ts.
Add a corresponding case in the main switch statement inside the main() function to call your feature’s run() function.

## Available Scripts 

Add the following scripts to your package.json to simplify your workflow:

```json

"scripts": {
  "build": "tsc",
  "start": "node dist/app.js",
  "cli": "npm run build && npm run start"
}

```

## Requirments 

Node.js >= 16.x
TypeScript >= 4.x
Inquirer

## Usage

Once you run the app, you'll be prompted to select one of the available algorithms/tools:

Choose an option from the list.
Follow the prompts to enter input data.
See the results printed on the console.
Choose whether to run another test or exit.

## Example 

```bash 
npm run cli

? Select which algorithm to use: (Use arrow keys)
> longest substring with valid even vowels
  sum of factorials
  max group length sum
  feature Flag
  SQL Queries

? Enter a string to test: hello world
Your Input: hello world
The longest valid substring is: 4 long

? Do you want to test another string? (Y/n) n
👋 Done!
```


## Contact

Amir Samimi
+989124971667


MIT License © Amir Samimi 2025
