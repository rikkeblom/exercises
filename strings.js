"use strict";
let code = "\u3394\\";
console.log(code);

const longline = "a very very very very very very very \
very very very very very long line of text that spans across the width of the editer";
//the linebreak is only in the editer in order to make it show in the consolelog it should be \n
console.log(longline);

//template literals
const name = "Rikke";
const drink = "tea";

console.log(`Hello ${name},
 would you like some ${drink}?`);
//when using backticks, the linebreaks will be the same in the editor as in the code.

//Template literal exercise
const personname = "Rikke";
const animaltype = "cat";
const animalname = "Findus";

console.log(`My name is ${personname}.
I have a ${animaltype} called ${animalname}.`);
