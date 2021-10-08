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
        if (answers.role === "Engineer") {
            inquirer    
                .prompt({
                    type: "input",
                    name: "github",
                    message: "Please enter your GitHub username?",
                })
                .then((roleInfo) => {
                    employeeArray.push
                        new Engineer(
                            answers.id,
                            answers.name,
                            answers.role,
                            answers.email,
                            roleinfo.github
                        )
                    );
                    addEmp();
                });

            }else if (answers.role == "Intern") {
                inquirer
                    .prompt({
                        type: "input",
                        name: "school",
                        message: "Please list where you go to school:",
                    })
                    .then((roleInfo) => {
                        employeeArray.push(
                            new Intern(
                                answers.role,
                                answers.name,
                                answers.email,
                                answers.id,
                                roleInfo.school
                            )
                        );
                    addEmp();   
                });
            }else if (answers.role === "Manager") {
                inquirer
                    .prompt({
                        type: "input",
                        name: "officeNumber",
                        message: "Please enter your office number:"
                    })
                    .then((roleInfo) => {
                        employeeArray.push(
                            new Manager(
                                answers.role,
                                answers.id,
                                answers.name,
                                answers.email,
                                roleInfo.officeNumber
                            )
                        );
                        addEmp();
                    });
                }
            });
};

function addEmp() {
    inquirer 
        .prompt({
            type: "confirm",
            message: "Would you like to add a new employee?",
            name: "addEmp"
        })
}       .then(function ({ addEmp })) {
            if (addEmp) {
                questionsPrompt();
            }else {
                }
            })
            .catch((err) => {
                console.log("Error!", err);
                throw err;
            });
        
}

promptQuestions();