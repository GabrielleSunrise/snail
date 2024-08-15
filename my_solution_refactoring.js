snail = function(arr) {
  let res = [];
  while (arr.length > 0) {
    arr[0].map((item) => {
      res.push(item);
    });
    arr.shift();
    if (arr.length == 0) {
      break;
    }
    arr.map((item) => {
      res.push(item[item.length-1]);
      item.pop();
    });
    if (arr.length == 0) {
      break;
    }
    arr[arr.length - 1].slice(0).reverse().map((item) => {
      res.push(item);
    });
    arr.pop();
    if (arr.length == 0) {
      break;
    }
    arr.slice(0).reverse().map((item) => {
      res.push(item[0]);
      item.shift();
    });
  }
  return res;
}
