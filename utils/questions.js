const inquirer = require('inquirer');
const promptPeople = (teamData) => {
    if (!teamData) {
        teamData = [];
    }

