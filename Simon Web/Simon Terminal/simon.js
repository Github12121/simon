const random = require('random-number-generator');
const sleep = require('thread-sleep');
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

console.log(ansi.clearScreen);

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

    readlineSync.question('Press any key to continue');
    var timeout = 1000;
    do {
        console.log(ansi.clearScreen);

        var randomColorNumber = random(3);
        targets.push(randomColorNumber);

        for (var i = 0; i < targets.length; i++) {
            var randomNumber = targets[i];
            console.log(colors[randomNumber]);
            sleep(timeout);
            console.log(ansi.eraseLines(3));
            sleep(1);
        }
        for (var i = 0; i < targets.length && true == playing; i++) {
            var guessNum = i + 1;
            var guess = readlineSync.question('Guess #' + guessNum + ': ');
            var target = targets[i];
            // Remember to press enter after a letter or it will be marked as wrong!
            if (guess == keys[target]) {
                console.log(chalk.white.bgGreen.bold('You\'re Right!'));
            } else {
                console.log(chalk.red.bold('You\'re Wrong!'));
                console.log(chalk.white.bold('Game Over!'));
                console.log(chalk.red.bgBlue.bold('try node simonhelp.js'))
                playing = false;
            }
        }
        sleep(1);
        if (targets.length == MAX && playing == true) {
            playing = false;
            console.log('Nice Job!');
        }

        timeout -= 300;
        // Make sure timeout doesn't go below zero or we will crash!
        if (timeout <= 0) {
            timeout = 100;
        }
    } while (playing);
});