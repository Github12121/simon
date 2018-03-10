const random = require('random-number-generator');
const figlet = require('figlet');
const chalk = require('chalk');
const MAX = 5;
const readlineSync = require('readline-sync');
var keys = ['r', 'g', 'b', 'y'];
var targets = [];
var playing = true;

figlet('Simon',{
    //isometric1
    font: 'colossal',
    horizontalLayout: 'default',
    verticalLayout: 'default'}, function(err, data) {
    console.log(chalk.blue.bgRed.bold(data));
    console.log('A fun electronic version of Simon!');
    console.log(chalk.blue.bgRed.bold('How To Play'));
    console.log('The letter R = 0, G = 1, B = 2, Y = 3.' +
        'Remember, if you\'re dealing with a number such as 10331,' +
        'type the first letter, then press enter and repeat these steps until' +
        'you are finished with the number');
    do {
        targets.push(random(3));
        console.log(targets);
        for (var i = 0; i < targets.length && true == playing; i++) {
            var guessNum = i + 1;
            var guess = readlineSync.question('Guess #' + guessNum + ': ');
            var target = targets[i];
            if (guess == keys[target]) {
                console.log(chalk.white.bgGreen.bold('You\'re Right!'));
            } else {
                console.log(chalk.red.bold('You\'re Wrong!'));
                console.log(chalk.white.bold('Game Over!'));
                playing = false;
            }
        }

        if (targets.length == MAX) {
            playing = false;
            console.log('Nice Job!');
        }
    } while (playing);
});