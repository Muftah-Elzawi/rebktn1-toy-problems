/*
Edit Distance
Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, given that the only operations can be insertion, deletion, or substitution.
Challenge: Do this in O(m x n) time, where m and n are the respective lengths of str1 and str2.



editDistance("cat", "cut") // 1

editDistance("wednesday", "sunday") // 5

editDistance("hackerrank", "hackreactor") // 6

For more information check out this article: https://en.wikipedia.org/wiki/Levenshtein_distance
*/

function editDistance(str1, str2) {
  // your code here...
  var count = 0;
  if (str1 === str2) {
    return "every thing is okay";
  }
  if (str2.length === str1.length) {
    for (let index = 0; index < str1.length; index++) {
      if (str1[index] !== str2[index]) {
        str1[index] = str2[index];
        count++;
      }
    }
  }
  if (str2.length > str1.length) {
    for (let index = 0; index < str2.length; index++) {
      if (str2[index] !== str1[index]) {
        str1[index] = str2[index];
        count++;
      }
    }
  }
  return count;
}

console.log(editDistance("hackerrank", "hackreactor"));
