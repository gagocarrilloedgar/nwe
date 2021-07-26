const configGithubToken = () =>
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

module.exports = { configGithubToken };
