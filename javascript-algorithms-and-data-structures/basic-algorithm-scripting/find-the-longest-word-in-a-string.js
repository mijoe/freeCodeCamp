function findLongestWordLength(str) {
  let arr = str.split(" ");
  let maxlen = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxlen) {
      maxlen = arr[i].length;
    }
  }
  return maxlen;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
