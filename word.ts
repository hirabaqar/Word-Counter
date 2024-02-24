//  import counter from "counter";

import inquirer from "inquirer";
interface para{
paragraph:string
}

console.log('word counter Project 7th')

let start=('develope by Hira Baqar')
// const counter=("hirabaqar")
const counter=("abcde fghijklm nopqr stuv wxyz")
console.log(counter.length)

function counting(paragraph:string) {
    let freewhitespace= paragraph.replace(/\s/g,"")   
return freewhitespace.length
}

async function startwordcounter(){
    let result=await inquirer.prompt({
        type:"input",
        name:"paragraph",
        message:"write paragraph here to count "
    })
    console.log(result.paragraph)
}
startwordcounter()







   









