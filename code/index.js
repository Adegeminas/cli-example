const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('inquirer');
const Configstore = require('configstore');
const CLI = require('clui');
const Spinner = CLI.Spinner;

const askQuestions = () => { // return promise
  const questions = [
    {
      name: 'next',
      type: 'input',
      message: 'What is your next step?',
      validate: function(value) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter your next step.';
        }
      },
    },
  ];
  return inquirer.prompt(questions);
};

const conf = new Configstore('ginit');
conf.set('state', {
  hp: 100,
});


const f = () => {
  return false;
};

conf.set('function', f.toString());

console.log(new Function('return ' + conf.get('function'))()());
