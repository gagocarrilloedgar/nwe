const inquirer = require("inquirer");
const { questions } = require("./questions");

// To test and add input management
const inquire = (question) => inquirer.prompt(question);

async function inquireRepositoryData() {
  const toQuestion = [questions.url, questions.changeName];

  const { url, changeName } = await inquire(toQuestion);

  if (changeName.toLowerCase() === "yes" || changeName.toLowerCase() === "y") {
    var { name } = await inquire(questions.repoName);
  }

  return { url, repoName: name === undefined ? "" : name };
}

module.exports = { inquireRepositoryData, inquire };
