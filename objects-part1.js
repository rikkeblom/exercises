"use strict";

const person1 = {
  firstName: "Rikke",
  age: 28,
  student: true,
};

console.log(person1.lastName);
//result: undefined
person1.lastName = "Thøgersen";
//result: Thøgersen
console.log(person1.lastName);
//we added the property "lastName" through dot notation

console.log(person1.firstName + " " + person1.lastName);

person1.lastName = undefined;
//we have deleted content of the property lastName
//it will still have it but it won't have any value
console.log(person1.lastName);

delete person1.lastName;
console.log(person1);
//with delete the property is removed from the object
//however it is much more common to set the property to Null or undefined

person1.age++;
//even after setting the object to const instead of let
//you can still modify the properties in it

const person2 = {
  firstName: "Hjørdis",
  age: "55",
  student: false,
};

// person1 = person2;
// console.log(person2);
//we get an error
//you cannot set the entire object as equal another if it is a const
person1.firstName = person2.firstName;
console.log(person1);
//however we can still change the properties inside the object
//this is why we will prefer to use const for objects most of the time
