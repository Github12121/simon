const figlet = require('figlet');
const chalk = require('chalk');
figlet('Simon Help', {
    font: 'colossal',
    horizontalLayout: 'default',
    verticalLayout: 'default'}, function(err, data2) {
    console.log(chalk.red.bgBlue.bold(data2));
    console.log('How to play');
    console.log('If you\'re dealing with a number such as 10110,');
    console.log('enter the first letter, then press the enter key and');
    console.log('repeat these steps.');
    console.log('Simon.js');
    console.log('Simon.js was based on the game made and sold by Hasbro.');
    console.log('Versions will be created for the browser and the terminal.');
    console.log('Simon.js uses of node and javascript.');
    console.log('Simon.js was created in node javascript.');
    console.log('Javascript is a programming language used in the terminal and');
    console.log('the browser.');
    console.log('Node.js is a program that can be downloaded on nodejs.org and is used to
    console.log('used to run javascript programs in the terminal.');
    console.log('Use of NPM Programs');
    console.log('Readline-sync is a javascript program that is used to "let your script have' +
        ' a conversation with the user via a console".');
    console.log('Random-Number-Generator is a program that is used to create a random number.');
    console.log('Figlet is a program used to create fonts in the terminal.');
    console.log('Chalk is a program to color text in the terminal.');
    console.log('More of Simon Online');
    console.log('Github repository is located at https://github.com/Github12121/simon.');
    console.log('Created on Webstorm');

});