const path = require('path');

const fs = require('fs');

const prompt = actionfolder => {
  const promptfile = path.join(actionfolder, 'prompt.js');

  if (!fs.existsSync(promptfile)) {
    return Promise.resolve({});
  } // lazy loads inquirer (80ms load time)
  // $FlowFixMe


  const inquirer = require('inquirer');

  const promptModule = require(promptfile);

  if (promptModule.prompt) {
    return promptModule.prompt({
      inquirer
    });
  } else {
    return inquirer.prompt(promptModule);
  }
};

module.exports = prompt;