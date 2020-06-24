let people = "rrrCCrrCCCrrr";
let reCriminals = /C+/g; // Change this line
let result = people.match(reCriminals);
console.log(result);