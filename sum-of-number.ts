/**
 * Given an array of integers nums and an integer target, 
 * return indices of the two numbers such that they add up to target.
 * https://leetcode.com/problems/two-sum
 * Example:
 Input: nums = [2,7,11,15], target = 9
 Output: [0,1]
 Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */

function twoSum(nums: number[], target: number): number[] {
  const sum: number[] = [];
  for (let i: number = 0; i < nums.length; i++) {
    for (let j: number = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        sum.push(i, j);
      }
    }
  }
  return sum;
}
