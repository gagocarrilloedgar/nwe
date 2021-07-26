const inquirer = require("inquirer");
const { Octokit } = require("@octokit/rest");
const Configstore = require("configstore");
const packageJson = require("../../package.json");
const { questions } = require("./questions");

// Create a Configstore instance
const config = new Configstore(packageJson.name);

const authenticate = async () => {
  var token = config.get("github_token");

  if (token) {
    try {
      return new Octokit({ auth: token });
    } catch (error) {
      console.error("Something is wrong at authenticate", error);
    }
  } else {
    const answer = await inquirer.prompt(questions.githubToken);

    try {
      config.set("github_token", answer.token);
      return new Octokit({ auth: answer.token });
    } catch (error) {
      console.log("Something is wrong at authenticate", error);
    }
  }
};

async function newGithubRepo(octokit, name) {
  const toPrompt =
    name === undefined
      ? [
          questions.repoName,
          questions.repoDescription,
          questions.repoVisibility,
        ]
      : [questions.repoDescription, questions.repoVisibility];

  const answers = await inquirer.prompt(toPrompt);

  const data = {
    name: name === undefined ? answers.name : name,
    description: answers.description,
    private: answers.visibility === "private",
    auto_init: true,
  };

  try {
    const response = await octokit.repos.createForAuthenticatedUser(data);
    return response.data.clone_url;
  } catch (error) {
    console.log("Something is wrong at newRepo", error);
  }
}

module.exports = { authenticate, config, newGithubRepo };
