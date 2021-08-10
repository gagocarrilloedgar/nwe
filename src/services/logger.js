const chalk = require('chalk')
const figlet = require('figlet')

const logTitle = (message) => chalk.greenBright(figlet.textSync(message, { horizontalLayout: 'full' }))

const gitxInit = (message) => logger(logTitle(message))

const logInfo = (message) => logger(chalk.gray(message))

const logAlert = (message) => logger(chalk.yellow(message))

const logSuccess = (message) => logger(chalk.green(message))

const logError = (errorMessage) => console.error(errorMessage)

const logger = (action) => console.log(action)

module.exports = { logger, gitxInit, logInfo, logAlert, logSuccess, logError }
