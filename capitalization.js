"use strict";
//Given a single name string in an unknown case, e.g. “peter” or “PETER”
//create a new string with the same name, where the third letter is uppercase,
//and the rest is lowercase. I.e. “peTer”.
//Hint: use substring, toUpperCase, toLowerCase and simple string concatenation

const firstname = "aNNeMariELiseLOTTE";

const firstpart = firstname.substring(0, 2);
const thirdletter = firstname.substring(2, 3);
const lastpart = firstname.substring(3);

const editedthird = thirdletter.toUpperCase();
const editedfirst = firstpart.toLowerCase();
const editedlast = lastpart.toLowerCase();

const sillyname = editedfirst + editedthird + editedlast;
console.log(sillyname);

//New version

const firstletter = firstname.substring(0, 1);
const therest = firstname.substring(1);

const editfirst = firstletter.toUpperCase();
const editlast = therest.toLowerCase();

const perfectname = editfirst + editlast;
console.log(perfectname);
