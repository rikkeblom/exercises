"use strict";

let maxiteration;
let iterator;

init();

function init() {
  maxiteration = 11;
  iterator = 0;
  loop();
}

function loop() {
  iterator++;
  if (iterator < maxiteration) {
    console.log("loop " + iterator);
    setTimeout(loop, 600);
  }
}
