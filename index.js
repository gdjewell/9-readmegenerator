// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const createReadMe = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = () => {
  

  // These questions will be prompted in the terminal 

  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter your GitHub username.',

      validate: name => {    // This requires that the user enters something for this field
        if (name) {
          return true
        }
        else {
          return "You need to enter a username."
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your Email address.',

      validate: email => {
        if (email) {
          return true;
        }
        else {
          return "You need to enter an email address."
        }
      },
    },
    {
      type: 'input',
      name: 'title',
      message: 'Enter a title for your project.',

      validate: title => {
        if (title) {
          return true;
        }
        else {
          return "You need to enter a title for your project."
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description for your project.',

      validate: description => {
        if (description) {
          return true;
        }
        else {
          return "You need to enter a description."
        }
      }
    },
    {
      type: 'list',  // List is used if there are multiple options where you want user to select one option. 
      name: 'license',
      message: 'Enter a license for your project.',
      choices: ['MIT', 'Apache', 'None'],
    
    },
    {
      type: 'input',
      name: 'install',
      message: 'Write steps to install your project.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Write steps on how to use this project.',

      validate: usage => {
        if (usage) {
          return true
        }
        else {
          return "Please enter the steps on how to use your product."
        }
      },
    },

    {
      type: 'input',
      name: 'contributing',
      message: 'Please enter contributors.',
    },

    {
      type: 'input',
      name: 'tests',
      message: 'Please enter tests for your project.',
    },

  ])


  
  .then((answers) => {
    console.log(answers)
    return createReadMe(answers);  //returns the answers user gave
}) 
  .then(data => {
   console.log(data)
    return writeFile(data);   //runs function to write file
})
}

// TODO: Create a function to write README file
const writeFile = data => {
  fs.writeFile('example.md', data, error => {
    if (error) {
      console.error(error);
    }
    else {
      console.log('Your ReadMe has been created.')
    }
  }
  )
}

// TODO: Create a function to initialize app
function init() {
  questions();
}

// Function call to initialize app
init();


