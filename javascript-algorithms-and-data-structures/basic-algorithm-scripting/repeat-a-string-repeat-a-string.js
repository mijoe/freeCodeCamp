function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  }
  let rstr = "";
  for (let i = 0; i < num; i++) {
    rstr += str;
  }
  return rstr;
}

repeatStringNumTimes("abc", 3);
