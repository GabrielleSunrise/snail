function snail(arr) {
  let res = [];
  while (arr.length > 0) {
    res.push(...arr.shift());
    arr.map(row => res.push(row.pop()));
    if (arr.length > 0) {
     res.push(...arr.pop().reverse());
    }
    arr.slice().reverse().map(row => res.push(row.shift()));
  }
  return res;
}
