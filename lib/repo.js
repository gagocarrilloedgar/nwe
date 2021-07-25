// Git repository management.

import { Spinner as _Spinner } from 'clui';
import { readdirSync, writeFileSync } from 'fs';
const git = require('simple-git/promise')();
const Spinner = _Spinner;
import touch from "touch";
import { without } from 'lodash';

import { askRepoDetails, askIgnoreFiles } from './inquirer';
import { getInstance } from './github';

export async function createRemoteRepo() {
    const github = getInstance();
    const answers = await askRepoDetails();

    const data = {
        name: answers.name,
        description: answers.description,
        private: (answers.visibility === 'private')
    };

    const status = new Spinner('Creating remote repository...');
    status.start();

    try {
        const response = await github.repos.createForAuthenticatedUser(data);
        return response.data.ssh_url;
    } finally {
        status.stop();
    }
}
export async function createGitignore() {
    const filelist = without(readdirSync('.'), '.git', '.gitignore');

    if (filelist.length) {
        const answers = await askIgnoreFiles(filelist);

        if (answers.ignore.length) {
            writeFileSync('.gitignore', answers.ignore.join('\n'));
        } else {
            touch('.gitignore');
        }
    } else {
        touch('.gitignore');
    }
}
export async function setupRepo(url) {
    const status = new Spinner('Initializing local repository and pushing to remote...');
    status.start();

    try {
        git.init()
            .then(git.add('.gitignore'))
            .then(git.add('./*'))
            .then(git.commit('Initial commit'))
            .then(git.addRemote('origin', url))
            .then(git.push('origin', 'master'));
    } finally {
        status.stop();
    }
}