// Functions related to actions made by the console
const shell = require("shelljs");

const { logError } = require("./logger");

async function pushFolderToRepo(dir) {
  try {
    shell.cd(`${process.cwd()}/${dir}`);
    shell.exec("git add .");
    shell.exec("git remote -v");
    shell.exec(`git commit --m "Updating ${dir} after beeing created"`);
    shell.exec("git push origin main");

    return true;
  } catch (error) {
    logError("Something happend during the update");
    return false;
  }
}

function cloneRepo(url, repoName) {
  const path = process.cwd();
  shell.cd(path);
  shell.exec(`git clone ${url} ${repoName}`);
}

module.exports = { pushFolderToRepo, cloneRepo };
