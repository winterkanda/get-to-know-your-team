const inquirer = require("inquirer");
const fs = require("fs");

//data getting pulled from library
const Engineer = require(".lib/engineer.js");
const Manager = require(".lib/Manager.js");
const Intern = require(".lib/Intern");

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
            inquirer
                .prompt({
                    type: "input",
                    name: "github",
                    message: "Please enter your GitHub username:",
                })
                .then((roleInfo) => {
                    employeeArray.push(
                        new Engineer(
                            answers.role,
                            answers.name,
                            answers.github,
                            answers.id,
                            roleInfo.github

                        )
                    );
                    addEmp();
                    
                })
        }
    })
}