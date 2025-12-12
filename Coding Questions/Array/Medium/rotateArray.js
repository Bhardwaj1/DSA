// Rotate Array
// Difficulty: MediumAccuracy: 37.06%Submissions: 599K+Points: 4Average Time: 20m
// Given an array arr[]. Rotate the array to the left (counter-clockwise direction) by d steps, where d is a positive integer. Do the mentioned change in the array in place.

// Note: Consider the array as circular.

// Examples :

// Input: arr[] = [1, 2, 3, 4, 5], d = 2
// Output: [3, 4, 5, 1, 2]
// Explanation: when rotated by 2 elements, it becomes 3 4 5 1 2.
// Input: arr[] = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20], d = 3
// Output: [8, 10, 12, 14, 16, 18, 20, 2, 4, 6]
// Explanation: when rotated by 3 elements, it becomes 8 10 12 14 16 18 20 2 4 6.
// Input: arr[] = [7, 3, 9, 1], d = 9
// Output: [3, 9, 1, 7]
// Explanation: when we rotate 9 times, we'll get 3 9 1 7 as resultant array.
// Constraints:
// 1 <= arr.size(), d <= 105
// 0 <= arr[i] <= 105

function rotateArr(arr, d) {
  //   for (let i = 1; i < d-1; i++) {
  //     let x = arr[0];
  //     arr[i] = arr[i-1];
  //     arr[arr.length - 1] = x;
  //     console.log(arr);
  //   }
  // code here

  let incIndex = 0;
  let index = 1;

  while (incIndex < d) {
    let x = arr[0];
    arr[index] = arr[index - 1];
    arr[arr.length - 1] = x;
    incIndex++;
  }

  console.log(arr);
}

rotateArr([1, 2, 3, 4, 5], 3);
