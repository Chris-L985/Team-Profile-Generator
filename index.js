const inquirer = require('inquirer');

// Libraries to link the jobs for a team
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

// inquirer input generated page
const { writeFile } = require('./site-generator');
const teamGenerator = require('./src/team-template');

// array to push team information
let teamInfo = [];

// user prompts

const createManager = () => {
    return inquirer
    .prompt ([
        {
            //Manager Name
            type: "input",
            name: "employeeName",
            message: "What is the Team manager's name?:",
            validate: (managerName) => {
                if (managerName) {
                    return true;
                } else {
                console.log("Please enter the manager's name.");
                return false;
            }
        },
    },
    {
            //Manager ID
            type: "input",
            name: "employeeId",
            message: "What is the Team manager's ID?:",
            validate: (managerId) => {
                if (managerId) {
                    return true;
                } else {
                console.log("Please enter the manager's ID number.");
                return false;
            }
        },
    },
    {
            //Manager email
            type: "input",
            name: "employeeEmail",
            message: "What is the Team manager's email address?:",
            validate: (managerEmail) => {
                if (managerEmail) {
                    return true;
                } else {
                console.log("Please enter the manager's email address.");
                return false;
            }
        },   
    },
    {
       //Manager office number
            type: "input",
            name: "managerOfficeNum",
            message: "What is the Team manager's office number?:",
            validate: (managersOfficeNumber) => {
                if (managersOfficeNumber) {
                    return true;
                } else {
                console.log("Please enter the manager's office number.");
                return false;
            }
        },    
    },
    ])
    .then(({ employeeName, employeeId, employeeEmail, managerOfficeNum }) => {
        let manager = new Manager(
            employeeName,
            employeeId,
            employeeEmail,
            managerOfficeNum
        );
        teamInfo.push(manager);
    });
};

// code to add a new employee to the team
const addNewEmployee = () => {
    console.log(`Add Team Member`);

    return inquirer
    .prompt({
        type: "list",
        name: "addEmployee",
        message: "What would you like to add to your team?",
        choices: ["Engineer", "Intern", "I'm good"],
    })
    .then((employeeType) => {
        if (employeeType.addEmployee === "Engineer") {
            return inquirer
            .prompt([
                {
                //Input Engineers info
                type: "input",
                name: "employeeName",
                message: "What is the engineer's name?:",
                validate: (engineerName) => {
                    if (engineerName) {
                      return true;
                    } else {
                      console.log("Please enter the engineer's name.");
                      return false;
                    }
                
                },
            },
            {
                //Engineer ID
                type: "input",
                name: "employeeId",
                message: "What is the engineer's ID?:",
                validate: (engineerId) => {
                    if (engineerId) {
                        return true;
                    } else {
                    console.log("Please enter the engineer's ID number.");
                    return false;
                    }
                },
            },
            {
                //Engineer email
                type: "input",
                name: "employeeEmail",
                message: "What is the engineer's email address?:",
                validate: (engineerEmail) => {
                    if (engineerEmail) {
                        return true;
                    } else {
                    console.log("Please enter the engineer's email address.");
                    return false;
                    }
                }, 
            },
            {
                //GitHub Username
                type: "input",
                name: "engineerGithub",
                message: "What is the engineer's GitHub username?:",
                validate: (engineerGithubName) => {
                    if (engineerGithubName) {
                        return true;
                    } else {
                    console.log("Please enter the engineer's GitHub username.");
                    return false;
                    }
                }, 
            },
            ]).then(
                ({ employeeName, employeeId, employeeEmail, engineerGithub }) => {
                    let engineer = new Engineer(
                        employeeName,
                        employeeId,
                        employeeEmail,
                        engineerGithub
                    );
                    teamInfo.push(engineer);
                    return addNewEmployee();
                }
            );
        } else if (employeeType.addEmployee === "Intern") {
            return inquirer
            .prompt([
                {
                //Input Intern info
                type: "input",
                name: "employeeName",
                message: "What is the intern's name?:",
                validate: (internName) => {
                    if (internName) {
                      return true;
                    } else {
                      console.log("Please enter the intern's name.");
                      return false;
                    }
                
                },
            },
            {
                //Intern ID
                type: "input",
                name: "employeeId",
                message: "What is the Intern's ID?:",
                validate: (InternId) => {
                    if (InternId) {
                        return true;
                    } else {
                    console.log("Please enter the intern's ID number.");
                    return false;
                    }
                },
            },
            {
                //Intern email
                type: "input",
                name: "employeeEmail",
                message: "What is the intern's email address?:",
                validate: (internEmail) => {
                    if (internEmail) {
                        return true;
                    } else {
                    console.log("Please enter the Intern's email address.");
                    return false;
                    }
                }, 
            },
            {
                //School name
                type: "input",
                name: "internSchool",
                message: "What is the name of the intern's school?:",
                validate: (internSchoolName) => {
                    if (internSchoolName) {
                        return true;
                    } else {
                    console.log("Please enter the intern's school name.");
                    return false;
                    }
                }, 
            },
        ]).then(({ employeeName, employeeId, employeeEmail, internSchool}) => {
                let intern = new Intern(
                    employeeName,
                    employeeId,
                    employeeEmail,
                    internSchool
                );
                teamInfo.push(intern);
                return addNewEmployee();
            });
        } else {
            return teamInfo;
        }
    
    });
};

createManager()
    .then(addNewEmployee)
    .then((teamInfo) => {
        return teamGenerator(teamInfo);
    })
    .then((pageHTML) => {
        return writeFile(pageHTML);
    })
    .then((returnResponse) => {
        console.log(returnResponse);
    }).catch((err) => {
        console.log(err);
    });