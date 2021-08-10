/**
  Questions to use for the CLI UIHBNHG
*/
const path = require('path')
const { logError } = require('./logger')

exports.questions = {
  url: {
    name: 'url',
    type: 'input',
    message: "What's the URL of the repo you'd like to clone?"
  },
  changeName: {
    name: 'changeName',
    type: 'input',
    message: 'Would you like to change the repository name?',
    choices: ['Yes', 'No'],
    default: 'Yes'
  },
  repoName: {
    name: 'name',
    type: 'input',
    message: 'Enter the new repo name',
    default: path.basename(process.cwd())
  },
  repoDescription: {
    name: 'description',
    type: 'input',
    message: 'Enter new repo description (optional).',
    default: null
  },
  repoVisibility: {
    name: 'visibility',
    type: 'input',
    message: 'Set repo to public or private? (for NUWE in order to test your project, the repository needs to be public)',
    choices: ['public', 'private'],
    default: 'public'
  },
  githubToken: {
    name: 'token',
    type: 'input',
    message: 'Enter your Github personal access token.',
    validate: function (value) {
      if (value.length === 40) {
        return true
      } else {
        logError('Please enter a valid token.')
        return false
      }
    }
  },
  pushCurrentRepo: {
    name: 'proceed',
    type: 'input',
    message: 'Proceed to push this project to a Github remote repo?',
    choices: ['Yes', 'No'],
    default: 'Yes'
  },
  tokenActions: {
    name: 'proceed',
    type: 'input',
    message: 'Proceed to delete stored token?',
    choices: ['Yes', 'No'],
    default: 'Yes'
  }
}
