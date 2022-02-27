// required module
const inquirer = require("inquirer");

// create empty array for teamData if one does not exist
const promptPeople = (teamData) => {
    if (!teamData) {
        teamData = [];
    }

console.log(`
=================
Add A Team Member
=================
`);

return inquirer
    .prompt[(
        {
            type: "input",
            name: "name",
            message: "What is the team member name?",
        },
        {   type: "input",
            name: "id",
            message: "What is the team member ID?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your team member's email address?",
        },
        {
           type: "list",
           name: "occupation",
           message: "What is the team member occupation? Select one.",
           choices: ["Manager", "Engineer", "Intern"],
        },
        {
           type: "input",
           name: "office",
           message: "What is the manager's office number?",
           when: ({ occupation }) => {
               if (occupation === "Manager") {
                   return true;
               } else {
                   return false;
               }
           },
        },
        {
           type: "input",
           name: "github",
           message: "What is the engineer\'s GitHub account name?",
           when: ({ occupation }) => {
               if (occupation === "Intern") {
                   return true;
               } else {
                   return false;
               }
            },
        },
        {
           type: "input",
           name: "school",
           message: "What is the intern's school?",
           when: ({ occupation }) => {
               if (occupation === "Intern") {
                   return true;
               } else {
                   return false;
               }
           },
        },
        {
           type: "confirm",
           name: "confirmAnother",
           message: "Any additional team members?",
           default: false,
        },
    ])

    .then((person) => {
        teamData.push(person);
        if (person.confirmAnother) {
            return promptPeople(teamData);
        } else {
            return teamData;
        }
    });
};

module.exports = promptPeople;





