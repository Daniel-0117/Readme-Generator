// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require('util');
const { default: Prompt } = require('inquirer/lib/prompts/base');
// TODO: Create an array of questions for user input
const questions = [

    {
        type:"input",
        message:"What is the name of the project?",
        name: "Title",
    },
    {
        type:"input",
        message:"Provide a descrition of your project?",
        name:"Description",
    },
    {
        type:"input",
        message:"Provide a table of contents",
        name:"TableofContents",
    },
    {
        type:"input",
        message:"What instructions do you have  to assist users with your project?",
        name:"Usage",
    },
    {
        type:"input",
        message:"List any collaborators and any third party assets",
        name:"Credits"
    },
    {
        type:"checkbox",
        message:"Choose which technologies were used in this project",
        choices:["HTML","CSS","Javascript","Node.js"],
        name:"TechUsed",


    },
    {
        type:"input",
        message:"What are your steps for installation?",
        name:"Installation"
    },
    {
        type:"list",
        message:"Choose a license for your project",
        choices:["MIT","Academic Free License v3.0", "Apache license 2.0","Microsoft Public License" ],
        name:"License",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {
        if (err) {
            return console.log(err);
        }
        console.log("The Job was successful!")
    });
}


// TODO: Create a function to initialize app
 function init() {
    
        inquirer
            .prompt(questions)
                .then(response => {
                    writeToFile('NewREADME.md', response)
                });
    
            }
        
    






// Function call to initialize app
init();
