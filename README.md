## Remote Github Repository Creator CLI

console.log(chalk.gray("Remote repo created. Choose files to ignore."));
      await repo.ignoreFiles();

      console.log(
        chalk.gray("Committing files to GitHub at: " + chalk.yellow(currentURL))
      );
      const commit = await repo.initialCommit(currentURL, repoName);
      if (commit) {
        console.log(
          chalk.green("Your project has been successfully committed to Github!")
        );
      }