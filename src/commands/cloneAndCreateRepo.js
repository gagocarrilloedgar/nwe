const {
  logInfo,
  nuweInit,
  logAlert,
  logSuccess,
} = require("../services/logger");
const { cloneRepo, pushFolderToRepo } = require("../services/shell");
const app = require("commander");
const { inquireRepositoryData } = require("../services/inquirer");
const { authenticate, newGithubRepo } = require("../services/github");

const cloneAndCreateRepo = () =>
  app
    .command("create")
    .description("Clone and Create a new Github project from another one")
    .action(async () => {
      nuweInit("nuwe cli");
      inquireRepositoryData().then(async ({ url, repoName }) => {
        cloneRepo(url, repoName);

        logInfo("Authenticating...");

        const octokit = await authenticate();

        logInfo("Initializing new remote repo...");

        const currentURL = await newGithubRepo(octokit, repoName);

        logInfo("Committing files to GitHub at: ");

        logAlert(currentURL);

        const commit = await pushFolderToRepo(currentURL, repoName);

        if (commit)
          logSuccess("Your project has been successfully committed to Github!");
      });
    });

module.exports = { cloneAndCreateRepo };
