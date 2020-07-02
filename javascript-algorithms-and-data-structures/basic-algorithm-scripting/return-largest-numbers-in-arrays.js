function largestOfFour(arr) {
  let maxs = [];
  for (let i = 0; i < arr.length; i++) {
    maxs.push(Math.max.apply(Math, arr[i]));
  }
  return maxs;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
