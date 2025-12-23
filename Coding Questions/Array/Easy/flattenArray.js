const flattenArr = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    if (!Array.isArray(ele)) {
      newArr.push(ele);
    } else {
      const flat = flattenArr(ele);
      for (let j = 0; j < flat.length; j++) {
        newArr.push(flat[j]);
      }
    }
  }
  return newArr;
};

console.log(flattenArr([1, [2, [3, [4, 5]]]]));
