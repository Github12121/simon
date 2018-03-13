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
});