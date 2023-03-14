const fs = require('fs');

const inquirer = require('inquirer');
const path = require('path');

const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = ["Please enter a description of your application", "Please enter installation instructions", "Please enter the usage of the application", "Please enter contribution guidlines", "Please enter test instructions"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.txt`, `${data}\n`, (err) => err ? console.error(err) : console.log(`Commit Logged`));
}

// TODO: Create a function to initialize app
function init() {

    for (const question of questions) {
        inquirer.prompt([
            {
                type: 'input',
                message: question,
                name: 'input',
            },
        ])
        .then((response) => {
            writeToFile('README', response.question);
        });
    }
    
}

// Function call to initialize app
init();
