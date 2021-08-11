const app = require('commander')
const { push } = require('shelljs/commands')
const { addCommit, pushOrigin } = require('../services/shell')

const poweredGitPush = () =>
  app
    .command('push')
    .option('-o, --origin', 'Push to the current branch')
    .arguments('<description...>', 'Description of the commit')
    .description('Combined git add . | git commit -m "Description" | git push')
    .action((description, options) => {
      addCommit(description.join(' '))

      if (options.origin) {
        pushOrigin()
      } else {
        push()
      }
    })

module.exports = { poweredGitPush }

// dummy change
