function largestSubarraySum(array){
 // code to write here
}

// test cases
largestSubarraySum([1, -1, 5, 3, -7, 4, 5, 6, -100, 4]) // returns 16
largestSubarraySum([1, 100, 4, 15, 9, 30]) // returns 159
largestSubarraySum([1, 100, 4, 15, 9, 30, -1]) // returns 159
largestSubarraySum([-3, 1, 100, 4, 15, 9, 30]) // returns 159
largestSubarraySum([-3, 1, 100, 4, 15, 9, 30, -1]) // returns 159
largestSubarraySum([-2, -3, 4, -1, -2, 1, 5, -3]) // returns 7
largestSubarraySum([2, 1, -3, 4, -1, 2, 1, -5, 4]) // returns 6
largestSubarraySum([-1, -1, -5, -3, -7, -4, -5, -6, -100, -4]) // returns 0
//let timeLimit = 1000;
//this.timeout(timeLimit)
let array = new Array(1000).fill(1);
largestSubarraySum(array) // returns 1000 within the O(n) time limit
