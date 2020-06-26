function countOnline(usersObj) {
  // Only change code below this line
  let count = 0;
  for (let user in usersObj) {
    console.log(user);
    if (usersObj[user].online) {
      console.log(user + " is online");
      count++;
    }
  }
  return count;
  // Only change code above this line
}
