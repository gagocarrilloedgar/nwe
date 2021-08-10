// Functions related to actions made by the console
const shell = require('shelljs')

const { logError } = require('./logger')

async function pushFolderToRepo(url, dir) {
  const path = process.cwd() + '/' + dir
  try {
    shell.cd(path)
    shell.exec(`git push --mirror ${url}`)

    return true
  } catch (error) {
    logError('Something happend during the update')
    return false
  }
}

function cloneRepo(url, repoName) {
  const path = process.cwd()
  shell.cd(path)
  shell.exec(`git --bare clone ${url} ${repoName}`)
}

// https://github.com/gagocarrilloedgar/keplerJs
module.exports = { pushFolderToRepo, cloneRepo }
