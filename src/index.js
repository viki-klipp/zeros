module.exports = function getZerosCount(number) {
  let multiplier = 5,
    arr = [],
    result = 0;

  while(arr[arr.length-1] >= 1 || arr.length == 0) {
    arr.push(Math.floor(number / multiplier));
    multiplier *= 5;
  }
  
  arr.forEach((el) => result += el);

  return result;
}
