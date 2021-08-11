#!/usr/bin/env node

const clear = require('clear')

const { checkArgumentsForHelp, parseArguments, cloneAndCreateRepo, cloneWithInquire, poweredGitPush } = require('./commands')
const { testing } = require('./commands/baseCommands')
const { branchCheckout } = require('./commands/branchCheckout')
const { initAndCreate } = require('./commands/pushExistingRepo')

clear()

// Test
testing()

// Clone command (at the moment only working for Github)
cloneWithInquire()

// Clone and after that create a repository to your Github account and push the changes
cloneAndCreateRepo()

// Powered git add . git commit --m "fdsf" git push
poweredGitPush()

// Combined branch and checkout
branchCheckout()

// init
initAndCreate()

// Parse the arguments and create the help command
parseArguments()

checkArgumentsForHelp()
