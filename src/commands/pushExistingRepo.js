const app = require('commander')
const { newGithubRepo, authenticate } = require('../services/github')
const { logInfo } = require('../services/logger')
const { npmGitInit } = require('../services/shell')

const initAndCreate = () =>
  app
    .command('init')
    .description('inits local repository and push the result to a github repo')
    .action(async () => {
      logInfo('Authenticating...')
      const octokit = await authenticate()

      logInfo('Initializing new remote repo...')

      npmGitInit()

      const url = await newGithubRepo(octokit)

      logInfo('Committing files to GitHub at: ' + url)
    })

module.exports = { initAndCreate }
