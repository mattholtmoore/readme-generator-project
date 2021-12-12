function getMarkdown(data) {
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
  ${data.email},
  (https://www.github.com/${data.gitHubUserName})`;
};

module.exports = {
  getMarkdown: getMarkdown
}