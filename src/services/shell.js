// Functions related to actions made by the console
const shell = require("shelljs");

const { logError, logSuccess } = require("./logger");

async function pushFolderToRepo(url, dir) {
  const path = process.cwd() + "/" + dir;
  try {
    shell.cd(path);
    shell.exec(`git push --mirror ${url}`);

    return true;
  } catch (error) {
    logError("Something happend during the update");
    return false;
  }
}

function cloneRepo(url, repoName) {
  const path = process.cwd();
  shell.cd(path);
  shell.exec(`git --bare clone ${url} ${repoName}`);
}

function testRunner(dirName) {
  // install the packages
  const path = process.cwd() + "/" + dirName;
  shell.cd(path);
  shell.exec("npm i");

  // run the tests
  shell.exec("npm run test");
  logSuccess("Your test report is ready");
}

module.exports = { pushFolderToRepo, cloneRepo, testRunner };
