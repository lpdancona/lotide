const takeUntil = function (array, callback) {
  let result = [];
  for (let item of array) {
    console.log(item);
    if (!callback(item)) {
      result.push(item);
    }
  }
  return result;
};
module.exports = takeUntil;
