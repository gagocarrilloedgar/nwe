#!/usr/bin/env node


import { greenBright, red, green } from 'chalk';
import clear from 'clear';
import { textSync } from 'figlet';

import { directoryExists } from './lib/files';
import { getStoredGithubToken, getPersonalAccesToken, githubAuth } from './lib/github';
import { createRemoteRepo, createGitignore, setupRepo } from './lib/repo';

clear();

console.log(
    greenBright(
        textSync('Nuwe CLI', { horizontalLayout: 'full' })
    )
);

if (directoryExists('.git')) {
    console.log(red('Already a Git repository!'));
    process.exit();
}

const getGithubToken = async () => {
    // Fetch token from config store
    let token = getStoredGithubToken();
    if (token) {
        return token;
    }

    // No token found, use credentials to access GitHub account
    token = await getPersonalAccesToken();

    return token;
};

const run = async () => {
    try {
        // Retrieve & Set Authentication Token
        let token = new Promise(getGithubToken());
        await token;

        githubAuth(token);

        // Create remote repository
        const url = await createRemoteRepo();

        // Create .gitignore file
        await createGitignore();

        // Set up local repository and push to remote
        await setupRepo(url);

        console.log(green('Todo ready!'));
    } catch (err) {
        if (err) {
            switch (err.status) {
                case 401:
                    console.log(red('No nos hemos podido conectar, por favor conecta con tu TOKEN de github'));
                    break;
                case 422:
                    console.log(red('Ya existe un repositorio remoto o existe un nombre con el mismo TOKEN'));
                    break;
                default:
                    console.log(red(err));
            }
        }
    }
};

run();