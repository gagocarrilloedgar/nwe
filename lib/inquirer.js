import { prompt } from 'inquirer';
import { getCurrentDirectoryBase } from './files';

export function askGithubCredentials() {
    const questions = [
        {
            name: 'username',
            type: 'input',
            message: 'Enter your GitHub username or e-mail address:',
            validate: function (value) {
                if (value.length) {
                    return true;
                } else {
                    return 'Please enter your username or e-mail address.';
                }
            }
        },
        {
            name: 'password',
            type: 'password',
            message: 'Enter your password:',
            validate: function (value) {
                if (value.length) {
                    return true;
                } else {
                    return 'Please enter your password.';
                }
            }
        }
    ];
    return prompt(questions);
}
export function getTwoFactorAuthenticationCode() {
    return prompt({
        name: 'twoFactorAuthenticationCode',
        type: 'input',
        message: 'Enter your two-factor authentication code:',
        validate: function (value) {
            if (value.length) {
                return true;
            } else {
                return 'Please enter your two-factor authentication code.';
            }
        }
    });
}
export function askRepoDetails() {
    const argv = require('minimist')(process.argv.slice(2));

    const questions = [
        {
            type: 'input',
            name: 'name',
            message: 'Enter a name for the repository:',
            default: argv._[0] || getCurrentDirectoryBase(),
            validate: function (value) {
                if (value.length) {
                    return true;
                } else {
                    return 'Please enter a name for the repository.';
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            default: argv._[1] || null,
            message: 'Optionally enter a description of the repository:'
        },
        {
            type: 'list',
            name: 'visibility',
            message: 'Public or private:',
            choices: ['public', 'private'],
            default: 'public'
        }
    ];
    return prompt(questions);
}
export function askIgnoreFiles(filelist) {
    const questions = [
        {
            type: 'checkbox',
            name: 'ignore',
            message: 'Select the files and/or folders you wish to ignore:',
            choices: filelist,
            default: ['node_modules', 'bower_components']
        }
    ];
    return prompt(questions);
}