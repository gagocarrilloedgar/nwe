const app = require("commander");

const testing = () =>
  app.command("test").action(async () => {
    console.log(`${process.cwd()}/${"ed"}`);
  });

const parseArguments = () => app.parse(process.argv);

const checkArgumentsForHelp = () => {
  if (!app.args.length) {
    app.help();
  }
};

module.exports = { testing, parseArguments, checkArgumentsForHelp };
