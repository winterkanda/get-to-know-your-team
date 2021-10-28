const inquirer = require("inquirer");
const fs = require("fs");

//data getting pulled from library
const Engineer = require("./library/engineer.js");
const Manager = require("./library/manager.js");
const Intern = require("./library/intern");

const employeeArray = [];

const startPrompt = function () {
  inquirer

    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter the manager's office number:",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the manager's email:",
      },
      {
        type: "confirm",
        name: "addAnother",
        message: "Would you like to an additional employee?",
      },
    ])

    .then((answers) => {
      employeeArray.push(
        new Manager(
          answers.name,
          answers.email,
          employeeArray.length + 1,
          answers.officeNumber
        )
      );
      if (answers.addAnother) {
      }
    });
};

function employeePrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter the employee's preferred name:",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the employee's email:",
      },
      {
        type: "list",
        name: "role",
        message: "What is the employee's role?",
        choices: ["Intern", "Engineer"]
      },
    ])
    .then((answers) => {
      if (answers.role === "Engineer") {
        inquirer
          .prompt({
            type: "input",
            name: "github",
            message: "Please enter the employee's GitHub username:",
          })
          .then((roleInfo) => {
            employeeArray.push(
              new Engineer(
                
                answers.name,
                answers.email,
                employeeArray.length + 1,
                roleInfo.github
              )
            );
            addEmp();
          });
      } else if (answers.role == "Intern") {
        inquirer
          .prompt({
            type: "input",
            name: "school",
            message: "Please list where you go to school:",
          })
          .then((roleInfo) => {
            employeeArray.push(
              new Intern(
                answers.name,
                answers.email,
                employeeArray.length + 1,
                roleInfo.school
              )
            );
            addEmp();
          });
      }
    });
}

function addEmp() {
  inquirer
    .prompt({
      type: "confirm",
      message: "Would you like to add a new employee?",
      name: "addEmp",
    })
    .then(function ({ addEmp }) {
      if (addEmp) {
        employeePrompt();
      } else {

        //if all done, generate HTML file

      }
    })
    .catch((err) => {
      console.log("Error!", err);
      throw err;
    });
}

questionsPrompt();
