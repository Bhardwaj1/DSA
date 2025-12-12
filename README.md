# DSA - Coding Questions

Welcome to the Data Structures and Algorithms (DSA) repository. This directory contains solutions to various coding problems organized by data structure type and difficulty level.

## 📚 Table of Contents
- [Array](#array)
  - [Easy](#array-easy)
  - [Medium](#array-medium)
- [String](#string)
  - [Easy](#string-easy)

---

## Array

### Array-Easy

#### 1. Reverse Array In Groups
**File:** `Coding Questions/Array/Easy/reverseArrayInGroups.js`

**Problem Description:**
Given an array arr[] of positive integers. Reverse every sub-array group of size k.
- Note: If at any instance, k is greater or equal to the array size, then reverse the entire array.

**Examples:**
- Input: `arr[] = [1, 2, 3, 4, 5], k = 3`
  - Output: `[3, 2, 1, 5, 4]`
  - Explanation: First group consists of elements 1, 2, 3. Second group consists of 4, 5.

- Input: `arr[] = [5, 6, 8, 9], k = 5`
  - Output: `[9, 8, 6, 5]`
  - Explanation: Since k is greater than array size, the entire array is reversed.

**Constraints:**
- 1 ≤ arr.size(), k ≤ 10^5
- 1 ≤ arr[i] ≤ 10^5

**Function:** `reverseInGroups(arr, k)`
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

---

### Array-Medium

#### 1. Rotate Array
**File:** `Coding Questions/Array/Medium/rotateArray.js`

**Problem Description:**
Given an array arr[]. Rotate the array to the left (counter-clockwise direction) by d steps, where d is a positive integer. Do the mentioned change in the array in place.
- Note: Consider the array as circular.

**Examples:**
- Input: `arr[] = [1, 2, 3, 4, 5], d = 2`
  - Output: `[3, 4, 5, 1, 2]`
  - Explanation: When rotated by 2 elements, it becomes 3 4 5 1 2.

- Input: `arr[] = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20], d = 3`
  - Output: `[8, 10, 12, 14, 16, 18, 20, 2, 4, 6]`
  - Explanation: When rotated by 3 elements, it becomes 8 10 12 14 16 18 20 2 4 6.

- Input: `arr[] = [7, 3, 9, 1], d = 9`
  - Output: `[3, 9, 1, 7]`
  - Explanation: When we rotate 9 times, we'll get 3 9 1 7 as resultant array.

**Constraints:**
- 1 ≤ arr.size(), d ≤ 10^5
- 0 ≤ arr[i] ≤ 10^5

**Difficulty:** Medium
**Accuracy:** 37.06%
**Submissions:** 599K+
**Points:** 4
**Average Time:** 20m

**Function:** `rotateArr(arr, d)`

---

## String

### String-Easy

#### 1. Simple String
**File:** `Coding Questions/String/Easy/String.js`

**Problem Description:**
A basic string problem for practice.

---

## 📊 Summary

| Topic | Difficulty | Count |
|-------|-----------|-------|
| Array | Easy | 1 |
| Array | Medium | 1 |
| String | Easy | 1 |
| **Total** | | **3** |

---

## 📖 How to Use

1. Navigate to the specific problem folder
2. Open the `.js` file to view the problem statement and solution
3. Review the examples and constraints
4. Test the functions with provided examples or your own test cases

## 🎯 Next Steps

- Add more problems and solutions
- Implement Hard difficulty problems
- Add test cases for each problem
- Include multiple solution approaches where applicable

---

**Last Updated:** December 12, 2025
A growing library of DSA solutions with clear code, comments, and examples. Designed for beginners, students, and developers preparing for coding interviews.
