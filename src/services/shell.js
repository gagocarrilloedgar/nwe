// Functions related to actions made by the console
const shell = require('shelljs')

const { logError } = require('./logger')

/**
 * Pushed the folder to the reppo after being cloned
 * @param {String} url github repository url
 * @param {String} dir directory name
 * @returns {Bolean}
 */
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

/**
 * Clones and inits the repository from a given url
 * @param {String} url github repository url
 * @param {String} repoName repositry name
 */
function cloneRepo(url, repoName) {
  const path = process.cwd()
  shell.cd(path)
  shell.exec(`git --bare clone ${url} ${repoName}`)
}

/**
 * Executes git push
 * @returns the shell execution command
 */
const push = () => shell.exec('git push')

/**
 * Finds the current branch name and exectures push origin name
 */
const pushOrigin = async () => {
  const branch = await shell.exec('git symbolic-ref --short HEAD')
  shell.exec(`git push origin ${branch}`)
}

/**
 * Combined command that executes add . + commit --m "description"
 * @param {String} description
 */

function addCommit(description) {
  // we make sure we are in the root folder
  const path = process.cwd()
  shell.cd(path)

  shell.exec('git add .')
  shell.exec(`git commit --m "${description}"`)
}

/**
 * Combined command that executes branch name + checkout name
 * @param {String} name
 */
const branchAndCheck = (name) => {
  shell.exec(`git branch ${name}`)
  shell.exec(`git checkout ${name}`)
}

module.exports = { pushFolderToRepo, cloneRepo, push, addCommit, pushOrigin, branchAndCheck }
