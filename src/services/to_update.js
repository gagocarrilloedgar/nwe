const inquirer = require('inquirer')
const fs = require('fs')
const glob = require('glob')

async function ignoreFiles() {
  const files = glob.sync('**/*', { ignore: '**/node_modules/**' })
  const defaultIgnore = [
    '/build',
    '.env',
    '.DS_Store',
    '/coverage',
    '.env.local',
    '.env.development.local',
    '.env.test.local',
    '.env.production.local'
  ]

  fs.writeFileSync('.gitignore', defaultIgnore.join('\n') + '\n')

  // ignore any node_modules by default
  const filesToIgnore = glob.sync('{*/node_modules/,node_modules/}')
  if (filesToIgnore.length) {
    fs.appendFileSync('.gitignore', filesToIgnore.join('\n') + '\n')
  } else {
    fs.closeSync(fs.openSync('.gitignore', 'w'))
  }

  const question = [
    {
      type: 'checkbox',
      name: 'ignore',
      message: 'Select the file and/or folders you wish to ignore:',
      choices: files
    }
  ]

  const answers = await inquirer.prompt(question)
  if (answers.ignore.length) {
    fs.appendFileSync('.gitignore', answers.ignore.join('\n'))
  }
}

module.exports = {
  ignoreFiles
}
