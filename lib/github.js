// Access token management
import { Spinner as _Spinner } from 'clui';
import Configstore from 'configstore';
import Octokit from '@octokit/rest';
const Spinner = _Spinner;
import { createBasicAuth } from "@octokit/auth-basic";

import { askGithubCredentials, getTwoFactorAuthenticationCode } from './inquirer';
import { name } from '../package.json';

const conf = new Configstore(name);

let octokit;

export function getInstance() {
    return octokit;
}
export function getStoredGithubToken() {
    return conf.get('github.token');
}
export function githubAuth(token) {
    octokit = new Octokit({
        auth: token
    });
}
export async function getPersonalAccesToken() {
    const credentials = await askGithubCredentials();
    const status = new Spinner('Authenticating you, please wait...');

    status.start();

    const auth = createBasicAuth({
        username: credentials.username,
        password: credentials.password,
        async on2Fa() {
            status.stop();
            const res = await getTwoFactorAuthenticationCode();
            status.start();
            return res.twoFactorAuthenticationCode;
        },
        token: {
            scopes: ['user', 'public_repo', 'repo', 'repo:status'],
            note: 'ginit, the command-line tool for initalizing Git repos'
        }
    });

    try {
        const res = await auth();

        if (res.token) {
            conf.set('github.token', res.token);
            return res.token;
        } else {
            throw new Error("GitHub token was not found in the response");
        }
    } finally {
        status.stop();
    }
}