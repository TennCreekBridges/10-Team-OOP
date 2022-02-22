// required modules
const fs = require('fs');
const prompts = require('./utils/prompts');
const generatePage = require('.utils/generatePage');

// constructors
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const { rejects } = require('assert');

// adds team info to array and evaluates statement to execute based on case 
prompts().then((teamInfo) => {
    let people = [];
    teamInfo.forEach((element) => {
        switch (element.role) {
            case 'Manager':
                const manager = new Manager(element);
                people.push(manager);
                return;
            case 'Engineer':
                const engineer = new Engineer(element);
                people.push(engineer);
                return;
            case 'Intern':
                const intern = new Intern(element);
                people.push(intern);
                return;
        }
    });

// writes file to ./dist/index.html 
    fs.writeFile(`./dist/index.html`, generatePage(people), (err) => {
        if (err) {
            rejects(err);
            return;
        }
    });
});
