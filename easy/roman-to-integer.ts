/**
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 * Symbol       Value
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000
 * https://leetcode.com/problems/roman-to-integer
 * Example:
 * Input: "III"
 * Output: 3
 * Explanation: 2 is written as II in Roman numeral, just two ones added together. 
 * 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
 */

function romanToInt(s: string): number {
  const romanMap: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result: number = 0;
  let prevValue: number = 0;

  for (let i: number = s.length - 1; i >= 0; i--) {
    const currentValue: number = romanMap[s[i]];
    if (currentValue >= prevValue) {
      result += currentValue;
    } else {
      result -= currentValue;
    }
    prevValue = currentValue;
  }
  return result;
}
