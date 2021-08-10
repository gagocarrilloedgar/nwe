const app = require('commander')

const { cloneRepo, testRunner } = require('../services/shell')
const { inquireRepositoryData } = require('../services/inquirer')

const cloneWithInquire = () =>
  app
    .command('clone')
    .description('Clone github project')
    .action(async () => {
      inquireRepositoryData().then(({ url, repoName }) => {
        cloneRepo(url, repoName)
        const dirName = repoName || url.split('/').pop()
        testRunner(dirName)
      })
    })

module.exports = { cloneWithInquire }
