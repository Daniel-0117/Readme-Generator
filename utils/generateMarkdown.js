// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
  let badge;

  switch (License) {
    case "MIT":
      badge = { name: "MIT", color: "green"};
      break;
    case "Academic Free License v3.0":
      badge = { name: "Academic+Free+License+v3.0", color:"blue"};
      break;
    case "Apache license 2.0":
      badge = { name: "Apache+License+2.0", color:"orange"};
      break;
    case "Microsoft Public License":
      badge = { name: "Microsoft+Public+License", color:"purple"};
      break;


  }
  return `https://img.shields.io/static/v1?label=license&message=${badge.License}&color=${badge.License})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) {
  let link;

  switch (License) {
    case "MIT":
      link = "mit";
      break;
    case "Academic Free License v3.0":
      link = "afl-3.0";
      break;
    case "Apache License 2.0":
      link ="apache-2.0";
      break;
    case "Microsoft Public License":
      link = "ms-pl";
      break;
  }
  return `https://choosealicense.com/licenses/${link}/`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}


function generateMarkdown(userResponse) {
var licenseBadge = renderLicenseBadge(userResponse.License)
  var licenselink = renderLicenseLink(userResponse.License)
  var result = (`\n#${userResponse.Title}

\n![License](https://img.shields.io/badge/license-${userResponse.License}-orange.svg) \n
\n## Description
\n${userResponse.Description}
\n## Table of Contents
\n* [Installation](#Installation)
\n* [Usage](#Usage)
\n* [Credits](#Credits)
\n* [Technology](#Technology)
\n* [License](#License)
\n## Installation
\n${userResponse.Installation}
\n## Usage
\n${userResponse.Usage}
\n## Credits
\n${userResponse.Credits}
\n## Technology Used
\n${userResponse.TechUsed}
\n## License
\nThis project is licensed under the ${userResponse.License} - see the [License](${licenselink}) page.`)

return result ;
}


 module.exports = generateMarkdown;