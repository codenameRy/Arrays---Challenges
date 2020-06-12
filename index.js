//Challenge 1 Implement Binary Search on a Sorted Array

// Description - Given a sorted array of integers, return the index of the given key. Return -1 if the key is not found.

// Example - Given the following array, if the search key is 47, binary search will return 3.

// let arr = [1, 10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162, 176, 188, 199, 200, 210, 222]
// let inputs = [10, 49, 99, 110, 176]

//Solution 1: recursive #
// Runtime complexity - The runtime complexity of this solution is logarithmic, O(log n).  
// Memory complexity - The memory complexity of this solution is logarithmic,  O(log n).

// "use strict";
let binarySearchRec = function(a, key, low, high) {
  if (low > high) {
    return -1;
  }
  
  let mid = low + Math.floor((high - low) / 2);
  if (a[mid] === key) {
    return mid;
  } else if (key < a[mid]) {
    return binarySearchRec(a, key, low, (mid - 1));
  } else {
    return binarySearchRec(a, key, (mid + 1), high);
  }
};

let binarySearch = function(a, key) {
  return binarySearchRec(a, key, 0, (a.length - 1));
};

let arr = [1, 10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162, 176, 188, 199, 200, 210, 222]
let inputs = [10, 49, 99, 110, 176]

for (let i = 0; i < inputs.length; i++){
  console.log("binarySearch(arr, " + (inputs[i])+ ") = " +  (binarySearch(arr, inputs[i])))
}

// Solution 2: iterative* 
// Runtime complexity # The runtime complexity of this solution is logarithmic, O(log n).  
// Memory complexity # The memory complexity of this solution is constant, O(1). A better memory complexity compared to recursive solution

let binarySearch2 = function(a, key) {
  let low = 0;
  let high = a.length - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (a[mid] === key) {
      return mid;
    }

    if (key < a[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }  
  return -1;
};

let arr2 = [1, 10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162, 176, 188, 199, 200, 210, 222]
let inputs2 = [10, 49, 99, 110, 176]

for (let i = 0; i < inputs.length; i++){
  console.log("binarySearch2(arr2, " + (inputs2[i])+ ") = " +  (binarySearch2(arr2, inputs2[i])))
}