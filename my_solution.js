snail = function(arr) {
  let res = arr[0];
  arr.shift();
  for (let i = arr.length; i > 0; i--) {
    for (let i = 0; i < arr.length; i++) {
      res.push(arr[i][arr[i].length - 1]);
      arr[i].pop();
    }
    if (arr.length == 0) {
      break;
    }
    for (let i = arr.length - 1; i > -1; i--) {
      res.push(arr[arr.length - 1][i]);
    }
    arr.pop();
    if (arr.length == 0) {
      break;
    }
    for (let i = arr.length - 1; i > -1; i--) {
      res.push(arr[i][0]);
      arr[i].shift();
    }
    if (arr.length == 0) {
      break;
    }
    for (let i = 0; i < arr[0].length; i++) {
      res.push(arr[0][i]);
    }
    arr.shift();
  }
  return res;
}
