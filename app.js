const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Inter = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");

const fs = require("fs");

const DIST_DIR = path.resolver(__dirname, "output");
const outputPath = path.join(DIST_DIR, "index.html");

const render = require("./lib/htmlRender");
const { run } = require("jest");

const teamProfile = [];

const managerPrompt = () => {
    return new Promise((res, rej) => {
        inquirer
            .prompt([{
                type: "input",
                message: `What is the managers name?`,
                name: "name",
            },
            {
                type: "input",
                message: `What is the managers id?`
                name: "id",
            }, 
            {
                type: "input",
                message: "What is the managers email?"
                name: "email",
            },
            {
                type: "input",
                message: "What is the managers office number?"
                name: "officeNumber",
            },
            ]).then(answers => {
                const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
                teamProfile.push(manager);
                res();
            });
    });
}

