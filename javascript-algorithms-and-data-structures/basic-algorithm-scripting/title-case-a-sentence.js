function titleCase(str) {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
  }
  console.log(arr.join(" "));
  return arr.join(" ");
}

titleCase("I'm a little tea pot");
