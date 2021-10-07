const inquirer = require("inquirer");
const fs = require("fs");

const employeeArray = [];

const questionsPrompt = function () {
    inquirer

    .prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter your preferred name.",
        },
        {
            type: "input",
            name: "id",
            message: "What is your id number?",
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email."
        },
        {
            type: "list",
            name: "role",
            message: "What is your role?",
            choices: ["Intern", "Engineer", "Manager"],
        },
        
    ])
    .then((answers) => {
        if (answers.role == "Intern") {
            
        }
    })
}