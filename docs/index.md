## GIT Supercharged | nwe 

[Spanish version](https://github.com/gagocarrilloedgar/nwe/blob/main/READMEES.md)

CLI (Command Line Interface) based on git but with super powers. The goal is to group and simplify commands to make working with git & github easier and faster.

[![CodeFactor](https://www.codefactor.io/repository/github/gagocarrilloedgar/nwe/badge)](https://www.codefactor.io/repository/github/gagocarrilloedgar/nwe) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=gagocarrilloedgar_gitx&metric=alert_status)](https://sonarcloud.io/dashboard?id=gagocarrilloedgar_gitx) ![GitHub followers](https://img.shields.io/github/followers/gagocarrilloedgar?style=social) ![GitHub forks](https://img.shields.io/github/forks/gagocarrilloedgar/gitx?style=social) ![GitHub Repo stars](https://img.shields.io/github/stars/gagocarrilloedgar/gitx?style=social)

## Install

```shell
    # Install command
    npm i -g nwe
```

## Detailed description

The objective of the project is to be able to facilitate the creation of projects and upload them to github in an easy way as well as simplifying the use of git and making routine tasks like doing commits and add changes much faster by grouping commands. Some current features are:

- inits a new local repos create a new github one
- Clone and clone name change
- Github clone, name change & create a new github repo automatically
- Github token auth
- branch + checkout combined
- add . commit --m "DECRIPTION" push combined
- add . commit --m "DECRIPTION" push origin [branch] combined (detecs the branch automatically)

## Usage

```sh
      # clone and push automatically to your github
      nwe clone [url] 
```

```sh
      # init and push to github (new repo)
      nwe init
```

```sh
      # Adds all the current changes, commits with the set up description and push to the repo
      nwe push [Description, no need for placing " "]
```

```sh
      # Adds all the current changes, commits with the set up description and push to the current branch you are working on at the moment
      nwe push -o [Description, no need for placing " "]
```


```sh
      # Combines branch + checkout [branch_name]
      nwe branch [branch_name]
```

### MKDocs & JSDocs functionality
```sh
      # Allows to create documentation templates based on MKDocs and use JSDocs to include jsdocs comments into the MKDoc folder
      nwe docs [option]
```

For this functionality you'll need to follow the documenation of: [Edgar's Custom Material-template](https://gagocarrilloedgar.github.io/mkdocs_template/)


And install: 

```sh
      npm i jsdoc-to-markdown 
```
