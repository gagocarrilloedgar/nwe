const app = require('commander')
const { newGithubRepo, authenticate } = require('../services/github')
const { inquire } = require('../services/inquirer')
const { logInfo } = require('../services/logger')
const { questions } = require('../services/questions')

const pushExistingReop = () =>
  app
    .command('init')
    .description('Run CLI tool')
    .action(async () => {
      const answer = await inquire(questions)

      if (answer.proceed === 'Yes') {
        logInfo('Authenticating...')
        const octokit = await authenticate()

        logInfo('Initializing new remote repo...')

        const url = await newGithubRepo(octokit)

        logInfo('Committing files to GitHub at: ' + url)
      }
    })

module.exports = { pushExistingReop }
