// require packages for use
const inquirer = require('inquirer');
const fs = require('fs');

// require generateMarkDown function from utils
const generateMarkDown = require('./utils/generateMarkdown');


// questions for inquirer to ask user
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
    message: 'Please provide usage instructions (Required):',
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
    name: 'license',
    message: 'Select the license(s) you will use for your project:',
    choices: ['Apache 2.0 License', 'BSD 3-Clause', 'BSD 2-Clause', 'GNU GPL v3']
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

// write file to dist containing data
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(`./dist/${fileName}`, data, err => {
            // if there is an error, reject
            if (err) {
                reject(err);
                return;
            }

            // if no error, resolve
            resolve({
                ok: true,
                message: `Successfully created ${fileName} at location: dist/${fileName}`
            })
        })
    })
}

// run inquirer, generate markdown, and write file to dist
function init() {
    return inquirer
        .prompt(questions)
        .then(data => generateMarkDown(data))
        .then(markdown => writeToFile('README.md', markdown));
}

// Function call to initialize app
init();


