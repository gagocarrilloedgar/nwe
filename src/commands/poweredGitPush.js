const app = require('commander')
const { push } = require('shelljs/commands')
const { addCommit, pushOrigin } = require('../services/shell')

const poweredGitPush = () =>
  app
    .command('push')
    .arguments('[description...]', 'Description of the commit')
    .option('-o, --origin', 'Push to the current branch')
    .description('Combined git add . | git commit -m "Description" | git push')
    .action((description, options) => {
      addCommit(description)

      if (options.origin) {
        pushOrigin()
      } else {
        push()
      }
    })

module.exports = { poweredGitPush }
