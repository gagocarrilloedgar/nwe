#!/usr/bin/env node

const clear = require("clear");

const {
  checkArgumentsForHelp,
  parseArguments,
  cloneAndCreateRepo,
  cloneWithInquire,
} = require("./src/commands");
const { testing } = require("./src/commands/baseCommands");

clear();

// Test
testing();

// Clone command (at the moment only working for Github)
cloneWithInquire();

// Clone and after that create a repository to your Github account and push the changes
cloneAndCreateRepo();

// Parse the arguments and create the help command
parseArguments();

checkArgumentsForHelp();
