"use strict";

let person1 = {
  firstName: "Rikke",
  age: 28,
  student: true,
};

// const person2 = person1;
// person2.firstName = "Hjørdis";
// console.log(person1.firstName);
//result: Hjørdis
//the object is the same only the variable pointing to the object is different

let person2 = {
  firstName: "Hjørdis",
  age: 55,
  student: false,
};

let person3 = person1;
//person1 and 3 console logs the same values

person3.firstName = "changed";
//the firstname is changed on person3 and person1

person3 = person2;
//person3 now has the value of person2

person2.firstName = "also changed";
//the firstname of person2 and person3 have now also changed

person1 = person3;
//now all 3 persons are the same
//since none of the references are pointing to the original person1 object it is deleted.

// console.log(person1);
// console.log(person2);
// console.log(person3);

//-------------------------------------------------------

const student1 = {
  firstName: "Harry",
  lastName: "Potter",
};

const student2 = {
  firstName: "Harry",
  lastName: "Potter",
};

//eventhough student1 and student2 have the same inner content they are not the same object

// student1.firstName = "Potty";
//since the objects are not connected changing one won't change the other

student1.firstName = student2.firstName;
student1.lastName = student2.lastName;
//even though we set the properties as equal to each other they are still 2 seperate objects
console.log(student1);
console.log(student2);

if (student1 == student2) {
  console.log("they are the same!");
} else {
  console.log("they are not...");
}

//eventhough student1 and student2 have the same inner content they are not the same object
