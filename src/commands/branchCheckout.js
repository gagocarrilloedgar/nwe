const app = require('commander')
const { branchAndCheck } = require('../services/shell')

/**
 * Command to execture git branch [name] checkout [combined]
 * @returns {Function}
 */
const branchCheckout = () =>
  app
    .command('branch')
    .arguments('<name>', 'Branch name')
    .description('Combined git branch <name>  | git checkout <name> -m ')
    .action((name) => {
      branchAndCheck(name)
    })

module.exports = { branchCheckout }
