const path = require("path");
const inquirer = require("inquirer");
const fs = require("fs");
const glob = require("glob");
const git = require("simple-git")();

const repoName = {
  name: "name",
  type: "input",
  message: "Enter new repo name.",
  default: path.basename(process.cwd()),
  validate: function (value) {
    if (value.length) {
      return true;
    } else {
      return "Please enter a valid input.";
    }
  },
};

const repoDescription = {
  name: "description",
  type: "input",
  message: "Enter new repo description (optional).",
  default: null,
};

const repoVisibility = {
  name: "visibility",
  type: "input",
  message:
    "Set repo to public or private? (for NUWE in order to test your project, the repository needs to be public)",
  choices: ["public", "private"],
  default: "public",
};

async function newRepo(octokit, name) {
  const questions =
    name === undefined
      ? [repoName, repoDescription, repoVisibility]
      : [repoDescription, repoVisibility];

  const answers = await inquirer.prompt(questions);

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

async function ignoreFiles() {
  const files = glob.sync("**/*", { ignore: "**/node_modules/**" });
  const defaultIgnore = [
    "/build",
    ".env",
    ".DS_Store",
    "/coverage",
    ".env.local",
    ".env.development.local",
    ".env.test.local",
    ".env.production.local",
  ];

  fs.writeFileSync(".gitignore", defaultIgnore.join("\n") + "\n");

  //ignore any node_modules by default
  const filesToIgnore = glob.sync("{*/node_modules/,node_modules/}");
  if (filesToIgnore.length) {
    fs.appendFileSync(".gitignore", filesToIgnore.join("\n") + "\n");
  } else {
    fs.closeSync(fs.openSync(".gitignore", "w"));
  }

  const question = [
    {
      type: "checkbox",
      name: "ignore",
      message: "Select the file and/or folders you wish to ignore:",
      choices: files,
    },
  ];

  const answers = await inquirer.prompt(question);
  if (answers.ignore.length) {
    fs.appendFileSync(".gitignore", answers.ignore.join("\n"));
  }
}

async function initialCommit(url, dir) {
  try {
    await git.add("edgar").commit("Initial commit");
    await git.push(url, "main");

    return true;
  } catch (error) {
    console.log("Something is wrong at initialCommit", error);
  }
}

module.exports = { newRepo, ignoreFiles, initialCommit };
