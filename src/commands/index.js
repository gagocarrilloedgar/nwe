const { cloneWithInquire } = require('./cloneWithInquire')
const { checkArgumentsForHelp, parseArguments } = require('./baseCommands')
const { cloneAndCreateRepo } = require('./cloneAndCreateRepo')
const { configGithubToken } = require('./tokenActions')

module.exports = {
  cloneWithInquire,
  checkArgumentsForHelp,
  parseArguments,
  cloneAndCreateRepo,
  configGithubToken
}
