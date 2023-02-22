const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Inter = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");

const fs = require("fs");

const DIST_DIR = path.resolve(__dirname, "dist");
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
                message: `What is the managers id?`,
                name: "id",
            }, 
            {
                type: "input",
                message: "What is the managers email?",
                name: "email",
            },
            {
                type: "input",
                message: "What is the managers office number?",
                name: "officeNumber",
            },
            ]).then(answers => {
                const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
                teamProfile.push(manager);
                res();
            });
    });
}

const employeePrompt = () => {
    return new Promise((res, rej) => {
        inquirer.prompt([
            {
                type: "list",
                message: "Use arrow keys to select another type of employee to enter",
                name: "employeeType",
                choices: [
                    "Engineer",
                    "Intern",
                {
                    name: "No more Employees to add?",
                    value: "false",
                }
            ]
        },
        {
            message: "What is the Engineers name?",
            name: "name",
            when: ({ employeeType }) => employeeType === "Engineer"
        },
        {
            message: "What is the Interns name?",
            name: "name",
            when: ({ employeeType }) => employeeType === "Intern"
        },
        {
            message: "What is the Engineers Id?",
            name: "id",
            when: ({ employeeType }) => employeeType === "Engineer"
        },
        {
            message: "What is the Interns id?",
            name: "id",
            when: ({ employeeType }) => employeeType === "Intern"
        },
        {
            message: "What is the Engineers email address?",
            name: "email",
            when: ({ employeeType }) => employeeType === "Engineer"
        },
        {
            message: "What is the Interns email address?",
            name: "email",
            when: ({ employeeType }) => employeeType === "Intern"
        },
        {
            message: "What is the Engineers GitHub Id?",
            name: "github",
            when: ({ employeeType }) => employeeType === "Engineer"
        },
        {
            message: "What school did the Intern go to?",
            name: "school",
            when: ({ employeeType }) => employeeType === "Intern"
        }           
        ]).then(answers => {
            if (answers.employeeType) {
                switch (answers.employeeType) {
                    case "Engineer":
                    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                    teamProfile.push(engineer);
                    break;
                }
            }
        })
    })
}

const createHTMLFile = (htmlPage) => {
    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR);
    }
    fs.writeFile(outputPath, htmlPage, "utf-8", (err) => {
        if(err) throw err;
        console.log(`Success! Checkout Team Profile Page at ${outputPath}`)
    });
}

managerPrompt().then(() => {
    return employeePrompt();
}).then(() => {
    const templateHTML = render(teamProfile)
    createHTMLFile(templateHTML);
}).catch((err) => {
    console.log(err);
});