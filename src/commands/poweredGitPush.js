const app = require('commander')
const { logInfo } = require('../services/logger')
const { addCommitPush } = require('../services/shell')

const poweredGitPush = () =>
  app
    .command('push')
    .arguments('<description>', 'Description of the commit')
    .description('Combined git add . | git commit -m "Description" | git push')
    .action(async (description) => {
      addCommitPush(description)
    })

module.exports = { poweredGitPush }
