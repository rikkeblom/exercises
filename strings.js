"use strict";
let code = "\u3394\\";
console.log(code);

const longline = "a very very very very very very very \
very very very very very long line of text that spans across the width of the editer";
//the linebreak is only in the editer in order to make it show in the consolelog it should be \n
console.log(longline);

//--------------------------------------
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

//Strings: .lenght and [index]
const nameforlenght = "Rikke Blom";
const len = nameforlenght.length;
console.log(`${nameforlenght} is ${len} characters long`);

//You can get a single character with [index of the character]
const letter = nameforlenght[0];
console.log(`The first letter of ${nameforlenght} is ${letter}`);

//------------------------------------

const HPname = "Albus Percival Wulfric Brian Dumbledore";
//find the total number of characters including spaces
const hpnamelenght = HPname.length;
console.log(`${HPname} is ${hpnamelenght} characters long including spaces`);
//find the value of the character at index 2
const valueindex2 = HPname[1];
console.log(`The second letter of ${HPname} is ${valueindex2}`);
//find the value of the character at index 6
const valueindex6 = HPname[5];
console.log(`The sixth letter of ${HPname} is ${valueindex6}`);
//find the index of the first D in Dumbledore
const Dposition = HPname.indexOf("D");
console.log(Dposition);
//find the index of the last e in Dumbledore
const ePosition = HPname.lastIndexOf("e");
console.log(ePosition);
//find the string values of Albus, Dumbledore, Wulfric, ian and bus
const valAlbus = HPname.substring(0, 5);
const valDumbledore = HPname.substring(29);
const valWulfric = HPname.substring(15, 22);
const valian = HPname.substring(25, 28);
const valbus = HPname.substring(2, 5);
console.log(`_${valian}_`);

//-----------------------------------------
//String methods
const string1 = "   There is    space here  \n  ";
const string2 = string1.trim();
console.log(`_${string2}_`);
//trim() removes spaces from the beginning and end of the string as well as linebreaks and ticks made with \

const fullname = "Rikke Blom Thøgersen";
const firstname = fullname.substring(0, 5);
const lastname = fullname.substring(11);
console.log(`_${firstname}_`);
console.log(`_${lastname}_`);
