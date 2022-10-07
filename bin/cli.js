#!/usr/bin/env node
const { execSync } = require('child_process');
const runCommand = (command) => {
    try {
        execSync(`${command}`, { stdio: "inherit" })
    } catch (error) {
        console.error(`Failed to execute ${command}`, error);
        return false
    }
    return true
}

const repoName = process.argv[2]
const gitCheckoutCommand = `git clone --depth 1 https://github.com/piemree/expressts.git ${repoName}`
const initGitCommand = `cd ${repoName} git init`
const installDepsCommand = `cd ${repoName} && npm install`

console.log(`Cloning the repository with name ${repoName}`);
const chechedOut = runCommand(gitCheckoutCommand)
if (!chechedOut) process.exit(-1)

console.log(`Initializing git repository for ${repoName}`);
const initGit = runCommand(initGitCommand)
if (!initGit) process.exit(-1)

console.log(`Installing dependencies for ${repoName}`);
const installDeps = runCommand(installDepsCommand)
if (!installDeps) process.exit(-1)

console.log("You are ready. Follow the following commands to start");
console.log(`cd ${repoName} && npm run dev`);