const app = require("commander");

const pushExistingReop = () =>
  app
    .command("init")
    .description("Run CLI tool")
    .action(async () => {
      clear();

      nuweInit();

      // pushCurrentRepo

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
            chalk.green(
              "Your project has been successfully committed to Github!"
            )
          );
        }
      } else {
        console.log(chalk.gray("Okay, bye."));
      }
    });
