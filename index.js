#! /usr/bin/env node

const app = require("commander");
const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const inquirer = require("inquirer");
const repo = require("./new_repo");
const auth = require("./creds");
const shell = require("shelljs");

clear();

app.command("test").action(async () => {
  const currentURL = "https://github.com/gagocarrilloedgar/edgar";
  const commit = await repo.initialCommit(currentURL, "edgar");
  if (commit) {
    console.log(
      chalk.green("Your project has been successfully committed to Github!")
    );
  }
});

app
  .command("clone")
  .description("Clone github project")
  .action(async () => {
    nuewInit();
    promptRepositoryData().then(({ url, repoName }) =>
      cloneRepository(url, repoName)
    );
  });

app
  .command("create")
  .description("Clone and create a new Github project from another one")
  .action(async () => {
    nuewInit();

    promptRepositoryData().then(async ({ url, repoName }) => {
      cloneRepository(url, repoName);

      console.log(chalk.gray("Authenticating..."));

      const octokit = await auth.authenticate();

      console.log(chalk.gray("Initializing new remote repo..."));

      const currentURL = await repo.newRepo(octokit, repoName);

      console.log(
        chalk.gray("Committing files to GitHub at: " + chalk.yellow(currentURL))
      );
      const commit = await repo.initialCommit(repoName);
      if (commit) {
        console.log(
          chalk.green("Your project has been successfully committed to Github!")
        );
      }
    });
  });

app
  .command("init")
  .description("Run CLI tool")
  .action(async () => {
    clear();
    console.log(
      chalk.magentaBright(
        figlet.textSync("NUWE CLI", { horizontalLayout: "full" })
      )
    );
    const question = [
      {
        name: "proceed",
        type: "input",
        message: "Proceed to push this project to a Github remote repo?",
        choices: ["Yes", "No"],
        default: "Yes",
      },
    ];

    const answer = await inquirer.prompt(question);

    if (answer.proceed == "Yes") {
      console.log(chalk.gray("Authenticating..."));
      const octokit = await auth.authenticate();

      console.log(chalk.gray("Initializing new remote repo..."));

      const url = await repo.newRepo(octokit);

      console.log(chalk.gray("Remote repo created. Choose files to ignore."));
      await repo.ignoreFiles();

      console.log(
        chalk.gray("Committing files to GitHub at: " + chalk.yellow(url))
      );
      const commit = await repo.initialCommit(url);
      if (commit) {
        console.log(
          chalk.green("Your project has been successfully committed to Github!")
        );
      }
    } else {
      console.log(chalk.gray("Okay, bye."));
    }
  });

app
  .command("token")
  .description("Delete github token")
  .action(async () => {
    clear();

    console.log(
      chalk.greenBright(
        figlet.textSync("NUWE TOKENS", { horizontalLayout: "full" })
      )
    );

    console.log(chalk.gray("Checking for stored token..."));
    let token = auth.config.get("github_token");

    if (token) {
      console.log("A token is stored in configstore.");
      const question = [
        {
          name: "proceed",
          type: "input",
          message: "Proceed to delete stored token?",
          choices: ["Yes", "No"],
          default: "Yes",
        },
      ];
      const answer = await inquirer.prompt(question);
      if (answer.proceed == "Yes") {
        auth.config.delete("github_token");
        console.log(chalk.gray("Token is deleted."));
      } else {
        console.log(chalk.gray("Okay, bye."));
      }
    } else {
      console.log(chalk.gray("No token is found."));
    }
  });

function cloneRepository(url, repoName) {
  const path = process.cwd;
  shell.cd(path);
  if (shell.exec(`git clone ${url} ${repoName}`).code !== 0) {
    shell.echo("Error: Git commit failed");
    shell.exit(1);
  }
}

function nuewInit() {
  console.log(
    chalk.greenBright(
      figlet.textSync("NUWE CLI ", { horizontalLayout: "full" })
    )
  );
}

async function promptRepositoryData() {
  var questions = {
    setUp: [
      {
        name: "url",
        type: "input",
        message: `What's the URL of the repo you'd like to clone?`,
      },
      {
        name: "changeName",
        type: "input",
        message: `Would you like to change the repository name?`,
        choices: ["Yes", "No"],
        default: "Yes",
      },
    ],
    repoName: [
      {
        name: "name",
        type: "input",
        message: `What is the new name?`,
      },
    ],
  };

  const { url, changeName } = await inquirer.prompt(questions.setUp);

  if (changeName.toLowerCase() === "yes" || changeName.toLowerCase() === "y") {
    var { name } = await inquirer.prompt(questions.repoName);
  }

  return { url, repoName: name === undefined ? "" : name };
}

app.parse(process.argv);

if (!app.args.length) {
  app.help();
}
