// Functions related to actions made by the console
const shell = require('shelljs')
const { logError, logSuccess } = require('./logger')
const YAML = require('yaml')
const fs = require('fs')

const gitCloneTemplate = (branch, path) => {
  try {
    shell.exec(`git clone -b ${branch} https://github.com/gagocarrilloedgar/mkdocs_template`)
    shell.exec(`mv  ${path}/mkdocs_template/* ${path}`)
    shell.exec('rm -rf mkdocs_template')
  } catch (error) {
    logError('An error ocurre during the initialization of your MKDocs')
  }
}

const createDocs = (path) => {
  try {
    shell.cd(path + '/src')
    const directories = shell
      .exec('ls -d */', { silent: true })
      .stdout.split('/\n')
      .filter((el) => el !== '')

    shell.cd('..')
    shell.cd(path + '/docs')

    shell.exec('mkdir src')

    shell.cd('..')

    directories.map((dir) => shell.exec(`jsdoc2md ./src/${dir}/** > ./docs/src/${dir}.md`, { silent: true }))
    try {
      const fileContents = fs.readFileSync('./mkdocs.yml', 'utf8')
      const data = YAML.parse(fileContents)
      const arr = []
      // eslint-disable-next-line array-callback-return
      directories.map((dir) => {
        const key = dir.charAt(0).toUpperCase() + dir.slice(1)
        const obj = {}
        obj[key] = `src/${dir}.md`
        arr.push(obj)
      })
      data.nav[1].src = arr
      fs.writeFile('./mkdocs.yml', YAML.stringify(data), function (err) {
        if (err) return console.log(err)
        logSuccess(' MKDocs.yml updated correctly')
      })
    } catch (e) {
      console.log(e)
    }
  } catch (error) {
    logError('An error ocurre during the creation of your documentation')
  }
}

module.exports = { createDocs, gitCloneTemplate }
