/**
 * find the longest common prefix string amongst an array of strings.
 * https://leetcode.com/problems/longest-common-prefix
 * Example:
 Input: strs = ["flower","flow","flight"]
 Output: "fl"
 Explanation: If there is no common prefix, return an empty string ""
 */

function longestCommonPrefix(strs: string[]): string {
  const sortedArr: string[] = strs.sort();
  const firstElement: string = sortedArr[0];
  const lastElement: string = sortedArr[sortedArr.length - 1];
  let longestPrefix: string = "";

  for (let i: number = 0; i < firstElement.length; i++) {
    if (firstElement[i] !== lastElement[i]) break;
    else if (firstElement[i] === lastElement[i])
      longestPrefix += firstElement[i];
  }
  return longestPrefix;
}
