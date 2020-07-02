function confirmEnding(str, target) {
  let s = str.substr(str.length - target.length);
  console.log(s);
  return s == target;
}

confirmEnding("Bastian", "n");
