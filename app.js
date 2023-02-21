const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Inter = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");

const fs = require("fs");

const DIST_DIR = path.resolver(__dirname, "output");
const outputPath = path.join(DIST_DIR, "index.html");

const render = require("./lib/htmlRender");

