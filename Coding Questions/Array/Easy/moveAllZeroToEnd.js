// Move All Zeroes to End
// Difficulty: EasyAccuracy: 45.51%Submissions: 404K+Points: 2Average Time: 15m
// You are given an array arr[] of non-negative integers. You have to move all the zeros in the array to the right end while maintaining the relative order of the non-zero elements. The operation must be performed in place, meaning you should not use extra space for another array.

// Examples:

// Input: arr[] = [1, 2, 0, 4, 3, 0, 5, 0]
// Output: [1, 2, 4, 3, 5, 0, 0, 0]
// Explanation: There are three 0s that are moved to the end.
// Input: arr[] = [10, 20, 30]
// Output: [10, 20, 30]
// Explanation: No change in array as there are no 0s.
// Input: arr[] = [0, 0]
// Output: [0, 0]
// Explanation: No change in array as there are all 0s.
// Constraints:
// 1 ≤ arr.size() ≤ 105
// 0 ≤ arr[i] ≤ 105

const moveAllZeroToEnd = (arr) => {
  //   let newArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] !== 0) {
  //       newArr.push(arr[i]);
  //     }
  //   }
  //   while (newArr.length < arr.length) {
  //     newArr.push(0);
  //   }
  //   return newArr;

  let start = 0;
  let end = arr.length;
  while (start <= end) {
    if (arr[start]!=0 &&arr[end] !=0) {
        start++
    }else if(arr[start]==0){
        [arr[start],arr[end]]=[arr[end]=arr[start]];
        end--
    }
  }

  return arr
};

console.log(moveAllZeroToEnd([3, 5, 0, 0, 4]));
