const { cloneWithInquire } = require('./cloneWithInquire')
const { checkArgumentsForHelp, parseArguments } = require('./baseCommands')
const { cloneAndCreateRepo } = require('./cloneAndCreateRepo')
const { configGithubToken } = require('./tokenActions')
const { poweredGitPush } = require('./poweredGitPush')

module.exports = {
  cloneWithInquire,
  checkArgumentsForHelp,
  parseArguments,
  cloneAndCreateRepo,
  configGithubToken,
  poweredGitPush
}
