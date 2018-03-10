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
    font: 'usaflag',
    horizontalLayout: 'default',
    verticalLayout: 'default'}, function(err, data) {
    console.log(chalk.blue.bgRed.bold(data));
    console.log('A fun electronic version of Simon!');
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