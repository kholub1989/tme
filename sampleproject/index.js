module.exports = {
  forEach(arr, fn) {
    for (let e of arr) {
      fn(e);
    }
  },
};
