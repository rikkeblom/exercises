"use strict";
const letters = ["a", "b", "c", "d", "e", "f", "g"];
console.log(letters[4]);

let newarr = letters;
newarr[4] = "*";
console.log(letters);
//changing an item in newarr also changed the corresponding item in letters
//setting letters as a const instead of let does not change this

const people = ["Harry", "Ron", "Hermione"];
let result;

result = people.push("Draco");
console.log(result);
//draco becomes the 4th item in the array

result = people.pop();
console.log(result);
//Draco was removed again from the array

result = people.push("Neville");
result = people.push("Luna");
//Neville and Luna are added to the array

result = people.slice(0, 3);
console.log(result);
//we see the first 3 items in the array

result = people.splice(1, 0, "Cho");
//Cho was added between item 0 and 1 (Harry and Ron)

people[1] = "Ginny";
//Ginny replaces Cho in the array

result = people.push("Fred", "George");
//both Fred and George are added to the array

result = people.indexOf("Fred");
//Fred is at index 7

result = people.splice(result, 1);
//Fred becomes his own array

result = people.unshift("Remus", "Sirius");
//adds Remus and Sirius to the beginning of the array

result = people.shift();
//Removes Remus from the beginning of the array

console.log(result);
console.log(people);

//New exercise
const newletters = Array.from("abcdefghijklmn");
console.log(newletters);
//each letter becomes an item in the array

const str = "abcdefghijklmn";
const arr1 = str.split();
console.log(arr1);
//split makes the entire string into an array item
let arr2 = Array.from(str);
arr2 = arr2.toString();
console.log(arr2);
//array from makes each character into an array item
//toString turns the array back into a string
//- this time with commas between each character
