const { config } = require('../services/github')
const { inquire } = require('../services/inquirer')
const { logInfo, logError } = require('../services/logger')
const { questions } = require('../services/questions')
const app = require('commander')

const configGithubToken = () =>
  app
    .command('token')
    .description('Delete github token')
    .action(async () => {
      logInfo('Checking for stored token...')

      const token = config.get('github_token')

      if (token) {
        logInfo('A token is stored in configstore.')

        const answer = await inquire(questions.tokenActions)

        if (answer.proceed === 'Yes') {
          config.delete('github_token')
          logInfo('Token is deleted.')
        } else {
          logInfo('Okay')
        }
      } else {
        logError('No token is found.')
      }
    })

module.exports = { configGithubToken }
