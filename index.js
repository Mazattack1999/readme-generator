// TODO: Include packages needed for this application
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of this project? (Required)',
    validate: title => {
        if (title) {
            return true;
        } else {
            console.log("Please enter a project name:");
            return false;
        }
    }
},
{
    type: 'input',
    name: 'description',
    message: 'Please enter a description for your project:'
},
// {
//     type: 'input',
//     name: 'tableOfContents',
//     message: 'Please create a table of contents:',
// },
{
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions (Requried):',
    validate: installation => {
        if (installation) {
            return true;
        } else {
            console.log("You must provide installation instructions:");
            return false;
        }
    }
},
{
    type: 'input',
    name: 'usage',
    message: 'Please provide usage information (Required):',
    validate: usage => {
        if (usage) {
            return true;
        } else {
            console.log("You must provide usage information");
            return false;
        }
    }
},
{
    type: 'list',
    name: 'licence',
    message: 'Select the license(s) you will use for your project:',
    choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'BSD 3-Clause', 'BSD 2-Clause', 'GNU GPL v3']
},
{
    type: 'input',
    name: 'contribution',
    message: 'Enter project contribution guidelines:'
},
{
    type: 'input',
    name: 'tests',
    message: 'Enter project test instructions:'
},
{
    type: 'input',
    name: 'github',
    message: 'Please enter your GitHub username (Required):',
    validate: github => {
        if (github) {
            return true;
        } else {
            console.log("You must enter your GitHub username.");
            return false;
        }
    }
},
{
    type: 'input',
    name: 'email',
    message: 'Please enter your email address (Requried):',
    validate: email => {
        if (email) {
            return true;
        } else {
            console.log("You must enter an email address.");
            return false;
        }
    }
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer
        .prompt(questions)
        .then(data => {
            console.log(data);
        })
}

// Function call to initialize app
init();


