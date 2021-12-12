const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./getMarkdown.js');

inquirer
  .prompt([
    {
      // Title
      type: 'input',
      message: 'What would you like to title this project?',
      name: 'title',
    },
    {
      // Description
      type: 'input',
      message: 'Please provide a short description explaining the what, why, and how of your project.',
      name: 'description',
    },
    {
      // Installation
      type: 'input',
      message: 'What are the steps required to install your project?',
      name: 'installation',
    },
    {
      // Usage
      type: 'input',
      message: 'Please provide instructions and examples for use.',
      name: 'usage',
    },
    {
      // Contributing
      type: 'input',
      message: 'Who all contributed to this project? List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.',
      name: 'contributing',
    },
    {
      // Tests
      type: 'input',
      message: 'How do you test the app?',
      name: 'tests',
    },
    {
      // License List
      type: 'rawlist',
      message: 'What license is this project under?',
      name: 'license',
      choices:
        [
          '![image](https://img.shields.io/badge/license-MIT-green)',
          '![image](https://img.shields.io/badge/license-Apache-blue)',
          '![image](https://img.shields.io/badge/license-lgpl__2__1-blue)',
          '![image](https://img.shields.io/badge/license-BSD-green)',
        ],
    },
    {
      // GitHub User Link
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'gitHubUserName',
    },
    {
      // Email
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },

  ])
  .then((response) => {
    console.log(response);
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('Whoops! That\'s not it.'),
    getItDone("./README.md", response);
  })

// Function to "get it done"
function getItDone(file, data) {
  fs.writeFile(file, markdown.getMarkdown(data), (err) => {
    if(err) console.log(err);
  })
}

// Function to initialize
function init() {
  fs.writeFile("./README.md", "", (err) => {
    if(err) console.log(err);
  });
}

init();

