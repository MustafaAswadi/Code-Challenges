/**
 * Given an integer x, return true if x is a palindrome and false otherwise.
 * https://leetcode.com/problems/palindrome-number
 * Example:
 Input: 121
 Output: true
 Explanation: Because 121 in same as its reverse version, we return true.
 */

function isPalindrome(x: number): boolean {
  const numToString: string = x.toString();
  const reversed: string = numToString.split("").reverse().join("");
  return numToString === reversed;
}
