// Render license badge based on user selection
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache 2.0 License':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    
    case 'BSD 3-Clause':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    
    case 'BSD 2-Clause':
      return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';

    case 'GNU GPL v3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';

    default: 
    return '';

  }
}

// render link to license webiste based on user selection
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache 2.0 License':
      return 'https://opensource.org/licenses/Apache-2.0';

    case 'BSD 3-Clause':
      return 'https://opensource.org/licenses/BSD-3-Clause';

    case 'BSD 2-Clause':
      return 'https://opensource.org/licenses/BSD-2-Clause';

    case 'GNU GPL v3':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    
    default: 
      return '';
  }
}

// create license section for README.md
function renderLicenseSection(license) {
  if (license) {
    return `
  ## License
  License information: ${renderLicenseLink(license)}
  `;
  }
  return '';
}

// generate markdown for README.md
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}


  ## Description
  ${data.description}

  ## Table of Contents
  - [Intallation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  GitHub Profile: https://github.com/${data.github}

  Email: ${data.email}

`;
}

// export generateMarkdown function
module.exports = generateMarkdown;
