// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [];
inquirer
.prompt([
    {
        type:"input",
        message:"What is the name of the project?",
        name: "ProjectName",
    },
    {
        type:"input",
        message:"Provide a descrition of your project?",
        name:"Description",
    },
    {
        type:"input",
        message:"What instructions do you want to assist users with your project?",
        name:"Usage",
    },
    {
        type:"input",
        message:"",
        name:"License",
    }
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
