function firstUniqChar(s) {
  const charCount = new Map();

  // Count the occurrences of each character
  for (const ch of s) {
    charCount.set(ch, (charCount.get(ch) || 0) + 1);
  }

  // Find the first non-repeating character
  for (let i = 0; i < s.length; i++) {
    if (charCount.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
}

// Example usage:
console.log(firstUniqChar("leetcode")); // Output: 0
console.log(firstUniqChar("loveleetcode")); // Output: 2
console.log(firstUniqChar("aabb")); // Output: -1

