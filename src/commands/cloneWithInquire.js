const app = require("commander");

const { cloneRepo, testRunner } = require("../services/shell");
const { nuweInit } = require("../services/logger");
const { inquireRepositoryData } = require("../services/inquirer");

const cloneWithInquire = () =>
  app
    .command("clone")
    .description("Clone github project")
    .action(async () => {
      nuweInit("nuwe cli");
      inquireRepositoryData().then(({ url, repoName }) => {
        cloneRepo(url, repoName);
        testRunner(repoName);
      });
    });

module.exports = { cloneWithInquire };
