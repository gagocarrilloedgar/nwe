const app = require('commander')

const { cloneRepo } = require('../services/shell')
const { inquireRepositoryData } = require('../services/inquirer')

const cloneWithInquire = () =>
  app
    .command('clone')
    .description('Clone github project')
    .action(async () => {
      inquireRepositoryData().then(({ url, repoName }) => {
        cloneRepo(url, repoName)
      })
    })

module.exports = { cloneWithInquire }
