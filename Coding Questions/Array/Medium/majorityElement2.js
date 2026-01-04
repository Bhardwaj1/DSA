// Majority Element II - Elements occurring more than ⌊n/3⌋ times
// Last Updated : 26 Jul, 2025
// Given an array arr[] consisting of n integers, find all the array elements which occurs more than floor(n/3) times.
// Note: The returned array of majority elements should be sorted.

// Examples:

// Input: arr[] = [2, 2, 3, 1, 3, 2, 1, 1]
// Output: [1, 2]
// Explanation: The frequency of 1 and 2 is 3, which is more than floor n/3 (8/3 = 2).

// Input: arr[] = [-5, 3, -5]
// Output: [-5]
// Explanation: The frequency of -5 is 2, which is more than floor n/3 (3/3 = 1).

// Input: arr[] = [3, 2, 2, 4, 1, 4]
// Output: [ ]
// Explanation: There is no majority element.


function majorityElement(arr){
    let obj={};
    let majorityArray=[]

    for(let i=0;i<arr.length;i++){
        if (obj[arr[i]]) {
            obj[arr[i]]+=1
        }else{
            obj[arr[i]]=1
        }
    };

    for(let key in obj){
        if (obj[key]>Math.floor(arr.length/3)) {
            majorityArray.push(Number(key))
        }
    };
    console.log(majorityArray);
};

majorityElement([3, 2, 2, 4, 1, 4]);