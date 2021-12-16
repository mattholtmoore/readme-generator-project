// Created getMarkdown function to keep index.js more clean and concise.
function getMarkdown(data) {

  // Built out appropriate README structure/schematic 
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)

  
  ## Installation
  ${data.installation}


  ## Usage
  ${data.usage}


  ## Contributing
  ${data.contributing}


  ## License
  ${data.license}

 
  ## Tests 
  ${data.tests}


  ## Questions
  If you have any questions at all, please email me at: ${data.email},
  
  You can also find me on GitHub at: https://www.github.com/${data.gitHubUserName}`;
};

// Utilized module.exports to achieve modular programming so that index.js is allowed to access the exported code.

module.exports = { getMarkdown: getMarkdown };