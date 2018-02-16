const random = require('random-number-generator');
const prompt = require('prompt');
var randomnumber = random(3);
var keys = ['r', 'g', 'b', 'y'];
var colors = keys[random(3)];
console.log(colors);
prompt.get(['input'], function(err, result) {
    console.log('Command-line input received:');
    console.log('input:' + result.input);
    if(colors == result.input) {
        console.log('You Won!');
    }
});
