// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  //const Badges= {
 //  apache: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
 // }

 console.log(data.license)
   
  if (data.license == "MIT") {
    const licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    return licenseBadge
  }
  else  if (data.license == "Apache") {
    const licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    return licenseBadge
  }
  else {
    const licenseBadge = ""
    return licenseBadge
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}
 



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.title}


  ## Description

  ${data.description}

  ## Table of Contents

  # [Installation](#Installation)
  # [Usage](#Usage)
  # [License](#License)
  # [Contributing](#Contributing)
  # [Tests](#Tests)
  # [Questions](#Questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}
  ${renderLicenseBadge(data)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions please contact me through the methods here:

  GitHub: @${data.name}
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
