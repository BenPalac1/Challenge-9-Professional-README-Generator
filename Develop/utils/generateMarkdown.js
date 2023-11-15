// function that returns a license badge based on which license is passed in
// choices are 'MIT License', 'GNU GPLv2', 'GNU GPLv3', 'Apache License 2.0', 'ISC License', 'N/A'
// if user chooses 'N/A', there is no license, and an empty string is returned
function renderLicenseBadge(license) {
  if(license === "MIT License") {
    return "![License](https://img.shields.io/badge/License-MIT-blue.svg)";

  } else if (license === "GNU GPLv2") {
    return "![License](https://img.shields.io/badge/License-GPLv2-blue.svg)";

  } else if (license === "GNU GPLv3") {
    return "![License](https://img.shields.io/badge/License-GPLv3-blue.svg)";

  } else if (license === "Apache License 2.0") {
    return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";

  } else if (license === "ISC License") {
    return "![License](https://img.shields.io/badge/License-ISC-blue.svg)";

  } else {
    return "";
  }
}

// function that returns the license link
// If there is no license an empty string is returned

function renderLicenseLink(license) {
  if (license !== 'N/A') {
    return `* [License](#license)`;
  }
  return '';
}


// function that returns the license section of README
// If there is no license an empty string is returned
function renderLicenseSection(license) {
  if (license !== 'N/A') {
    return `## License
      Licensed under ${license}`;
  }
  return '';
}

// function that generates markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)} 

  ## Description
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  ${renderLicenseLink(data.license)}

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Any questions, please reach to me by email, ${data.email} or github, [${data.gitHub}](https://github.com/${data.gitHub}/)
  
`;
}

module.exports = generateMarkdown;
