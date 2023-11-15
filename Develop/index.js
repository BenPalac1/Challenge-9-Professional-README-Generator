// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },

    {
        type: 'input',
        name: 'description',
        message: 'What is your project description?'
    },
    
    {
        type: 'input',
        name: 'installation',
        message: 'What are your installation instructions?'
    },    
    
    {
        type: 'input',
        name: 'usage',
        message: 'What is your usage information?'
    },

    {
        type: 'input',
        name: 'contributing',
        message: 'What are your contribution guidelines?'
    },

    {
        type: 'input',
        name: 'tests',
        message: 'What are your test instructions?'
    },

    {
        type: 'list',
        name: 'license',
        message: 'What license does your project require?',
        choices: ['MIT License', 'GNU GPLv2', 'GNU GPLv3', 'Apache License 2.0', 'ISC License', 'N/A']
    },

    {
        type: 'input',
        name: 'gitHub',
        message: 'What is your GitHub username?'
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];



// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
};

// function to initialize app
function init() {
    inquirer.prompt(questions).then(answers =>{
        console.log(answers);
        writeToFile('README.md', generateMarkdown({ ...answers }));
        
    });
}

// function call to initialize app
init();
