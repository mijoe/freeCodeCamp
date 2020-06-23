const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid
  s.shift();
  s.shift();
  s.push(5);
  s.push(7);

  // Only change code above this line
}
editInPlace();
