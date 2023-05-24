/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * https://leetcode.com/problems/valid-parentheses
 * Example:
 Input: s = "()[]{}"
 Output: true
 Explanation: An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 */

function isValid(s: string): boolean {
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return false; // No corresponding open bracket
      }

      const top = stack.pop();

      if (
        (char === ")" && top !== "(") ||
        (char === "]" && top !== "[") ||
        (char === "}" && top !== "{")
      ) {
        return false; // Mismatched brackets
      }
    }
  }

  return stack.length === 0; // All open brackets are closed
}
