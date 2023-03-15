// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } else {
    return ``;
  }
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n* [License](#license)\n`;
  }
  return ``;
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License

    This project is licensed under the ${license} license.`;
  }
  return ``;
}

// Function to initialize app
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

  For installing all the necesarry dependecies, run the command below:

  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  Run test with the following command below:

  \`\`\`
  ${data.tests}
  \`\`\`

  ## Questions

  For any questions or problems concerning the repo, please open an issue under the repo in GitHub 
  or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).

`;
}

module.exports = generateMarkdown;
