"use strict";
//  import counter from "counter";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
console.log('word counter Project 7th');
let start = ('develope by Hira Baqar');
// const counter=("hirabaqar")
const counter = ("abcde fghijklm nopqr stuv wxyz");
console.log(counter.length);
function counting(paragraph) {
    let freewhitespace = paragraph.replace(/\s/g, "");
    return freewhitespace.length;
}
async function startwordcounter() {
    let result = await inquirer_1.default.prompt({
        type: "input",
        name: "paragraph",
        message: "write paragraph here to count "
    });
    console.log(result.paragraph);
}
startwordcounter();
