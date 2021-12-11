const inquirer = require('inquirer');
const fs = require('fs');
// var markdown = require('./ *insertmarkdown* .js');

inquirer
  .prompt([
    {
      // Title
      type: 'input',
      message: 'Title: ',
      name: 'title'
    },
    {
      // Description
      type: 'input',
      message: 'Description: ',
      name: 'description'
    },
    {
      // Installation
      type: 'input',
      message: 'Installation: ',
      name: 'installation'
    },
    {
      // Usage
      type: 'input',
      message: 'Usage: ',
      name: 'usage'
    },
    {
      // Contributing
      type: 'input',
      message: 'Contributing: ',
      name: 'contributing'
    },
    {
      // Tests
      type: 'input',
      message: 'Tests: ',
      name: 'tests'
    },
    {
      // License List
      type: 'rawlist',
      message: 'License: ',
      name: 'license',
      choices: [
        '![image](https://img.shields.io/badge/license-MIT-green)',
        '![image](https://img.shields.io/badge/license-Apache-blue)',
        '![image](https://img.shields.io/badge/license-lgpl__2__1-blue)',
        '![image](https://img.shields.io/badge/license-BSD-green)',
      ],
    },
    {
      // GitHub User Link
      type: 'input',
      message: 'GitHub Username: ',
      name: 'gitHubUserName'
    },
    {
      // Email
      type: 'input',
      message: 'Email: ',
      name: 'email'
    },
    
  ])
  .then((response) => {
    console.log(response);
      response.confirm === response.results
        ? console.log('Success!')
        : console.log('Whoops! No bueño. That can\'t be right.')
  });

  // Example from Activity 20:
  // .then((data) => {
  //   const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

  //   fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
  //     err ? console.log(err) : console.log('Success!')
  //   );
  // });
