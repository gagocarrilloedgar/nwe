const { cloneRepo } = require("../services/shell");
const app = require("commander");
const { nuweInit } = require("../services/logger");
const { inquireRepositoryData } = require("../services/inquirer");

const cloneWithInquire = () =>
  app
    .command("clone")
    .description("Clone github project")
    .action(async () => {
      nuweInit("nuwe cli");
      inquireRepositoryData().then(({ url, repoName }) =>
        cloneRepo(url, repoName)
      );
    });

module.exports = { cloneWithInquire };
