const inquirer = require('inquirer')
const { questions } = require('./questions')

/**
 * Triggers the inquierer library
 * @param {Object} question set of questions passed to be answered
 * @returns {Function}
 */
const inquire = (question) => inquirer.prompt(question)

/**
 * Triggers inquirer when yes/no  needs to be answered
 * @returns {Object}
 */
async function inquireRepositoryData() {
  const toQuestion = [questions.url, questions.changeName]

  const { url, changeName } = await inquire(toQuestion)

  let name

  if (changeName.toLowerCase() === 'yes' || changeName.toLowerCase() === 'y') {
    name = await inquire(questions.repoName)
  }

  return { url, repoName: name === undefined ? '' : name }
}

module.exports = { inquireRepositoryData, inquire }
