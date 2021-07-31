// Functions related to actions made by the console
const shell = require("shelljs");

const { logError, logSuccess, logger } = require("./logger");

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
  shell.exec("npm run test");

  logSuccess("Your test report is ready");

  const report = createReport(path);
  logger(report);
  return report;
}

function createReport(path) {
  // Creates a mix of both reports generates by the test runners
  const coverage = require(path + "/test/report/coverage-summary.json");
  const testResults = require(path + "/test/report/results.json");

  return {
    numFailedTests: testResults.numFailedTests,
    numFailedTestSuites: testResults.numFailedTestSuites,
    numPassedTestSuites: testResults.numPassedTestSuites,
    numPassedTests: testResults.numPassedTests,
    numPendingTestSuites: testResults.numPendingTestSuites,
    numPendingTests: testResults.numPendingTests,
    numTotalTestSuites: testResults.numTotalTestSuites,
    numTotalTests: testResults.numTotalTests,
    coverageResults: coverage.total,
  };
}
// https://github.com/gagocarrilloedgar/keplerJs
module.exports = { pushFolderToRepo, cloneRepo, testRunner };


