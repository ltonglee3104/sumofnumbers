const testA = [1,2,3,4,5];

function sumFor(data) {
  let sum = 0;
  for (let i = 0; i < data.length; i ++) {
    sum += data[i];
  }
  return sum;
}

console.log(sumFor(testA));

function sumWhile(data) {
  let i = 0;
  let sum = 0;
  while (i < data.length) {
    sum += data[i];
    i++;
  }
  return sum;
}
console.log(sumWhile(testA));

function sumRecursion(data) {
  if (data.length === 0) {
    return 0;
  } else {
    return data[0] + sumRecursion(data.slice(1, data.length));
  }
}
console.log(sumRecursion(testA));

function sumTheSimpleWay (data) {
  return _.reduce(data, function(memo, key) {
    return memo + key;
  }, 0);
}