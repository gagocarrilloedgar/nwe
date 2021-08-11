const app = require('commander')

// Functions related to actions made by the console
const shell = require('shelljs')
const { logError } = require('../services/logger')

/**
 * Testing function to try out not working or commands
 * @returns
 */
const testing = () =>
  app.command('test').action(async () => {
    const path = process.cwd() + '/' + 'test2'

    console.log('path2')
    try {
      shell.cd(path)
      shell.exec('git add .')
      shell.exec(`git commit --m "Updating ${'test2'} after beeing created"`)
      shell.exec('git push')

      return true
    } catch (error) {
      logError('Something happend during the update')
      console.log(error)
      return false
    }
  })

const parseArguments = () => app.parse(process.argv)

const checkArgumentsForHelp = () => {
  if (!app.args.length) {
    app.help()
  }
}

module.exports = { testing, parseArguments, checkArgumentsForHelp }
