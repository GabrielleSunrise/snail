snail = function(arr) {
  let res = [];
  while (arr.length > 0) {
    res.push(...arr.shift());
    if (arr.length > 0) {
      arr.map((item) => {
        res.push(item[item.length-1]);
        item.pop();
      });
    }
    if (arr.length > 0) {
      res.push(...arr.pop().reverse());
    }
    if (arr.length > 0) {
      arr.slice(0).reverse().map((item) => {
        res.push(item[0]);
        item.shift();
      });
    }
  }
  return res;
}
