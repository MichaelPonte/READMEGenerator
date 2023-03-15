const fs = require('fs');

const inquirer = require('inquirer');
const path = require('path');

const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address (Required)',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have? (Required)',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies? (Default: npm i)',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests? (Default: npm test)',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo? (Required)',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo? (Required)',
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((inquirerResponses) => {
            console.log('Generating README...');
            writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
        })
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();
