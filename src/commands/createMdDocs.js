const app = require('commander')
const { createDocs, gitCloneTemplate } = require('../services/jsdocs')
const { logAlert } = require('../services/logger')

/**
 * Creates the documentation and places it inside the docs folder
 * @returns {Function}
 */

const createMdDocs = () =>
  app
    .command('docs')
    .description('Creates the documentation and places it inside the docs folder')
    .option('-i, --init', 'Generates the basic mkdoc structure')
    .option('-m, --material', 'Generates de Mkdocs-material customized template')
    .option('-g, --generate', 'Creates the documenation using jsdocs and saves it inside your doc folder')
    .action((options) => {
      const path = process.cwd()
      if (options.init) {
        gitCloneTemplate('mkdocs_new', path)
      } else if (options.material) {
        gitCloneTemplate('to_clone', path)
      } else if (options.generate) {
        createDocs(path)
      } else {
        logAlert('Sorry we can not find that command')
      }
    })

module.exports = { createMdDocs }
