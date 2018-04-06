const random = require('random-number-generator');
const figlet = require('figlet');
const chalk = require('chalk');
const MAX = 5;
const ansi = require('ansi-escapes');
const readlineSync = require('readline-sync');
var keys = ['r', 'g', 'b', 'y'];
var colors = [chalk.red.bgWhite('red'), chalk.green.bgWhite('green'), chalk.blue.bgWhite('blue'),
    chalk.yellow.bgWhite('yellow')];
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
    console.log('The letter R = 0, G = 1, B = 2, Y = 3.');
    console.log('Type node simonhelp.js to get help.');
    do {
        targets.push(random(3));
        //console.log(targets);
        for (var i = 0; i < targets.length; i++) {
            var randomNumber = targets[i];
            console.log(colors[randomNumber]);
            for (var j = 0; j < 350000000; j++){

            }
            console.log(ansi.eraseLines(3));
        }
        for (var i = 0; i < targets.length && true == playing; i++) {
            var guessNum = i + 1;
            var guess = readlineSync.question('Guess #' + guessNum + ': ');
            var target = targets[i];
            if (guess == keys[target]) {
                console.log(chalk.white.bgGreen.bold('You\'re Right!'));
            } else {
                console.log(chalk.red.bold('You\'re Wrong!'));
                console.log(chalk.white.bold('Game Over!'));
                console.log(chalk.red.bgBlue.bold('try node simonhelp.js'))
                playing = false;
            }
        }

        if (targets.length == MAX) {
            playing = false;
            console.log('Nice Job!');
        }
    } while (playing);
});