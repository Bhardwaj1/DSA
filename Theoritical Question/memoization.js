function memoization() {
  let cachedValue = {};

  return function fn(num) {
    if (num in cachedValue) {
      return cachedValue[num];
    } else {
      console.log("memoization");
      cachedValue[num] = num + 1;
      return cachedValue[num];
    }
  };
}

const memoizedValue=memoization();
console.log(memoizedValue(1));
console.log(memoizedValue(2));
console.log(memoizedValue(1));
console.log(memoizedValue(2));
