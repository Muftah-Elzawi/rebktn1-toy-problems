/*
Words within Words

Given an array of unique words, find the word that contains the greatest number of other words. A word must be at least two letters long.

nestedWordCount([ "gray", "grays", "ray", "rays", "strays" ]) // 'grays'

*/

function nestedWordCount(words) {
  // your code here...
  var count = {};
  for (let index = 0; index < words.length; index++) {
    var element = words[index];

    for (let i = 0; i < words.length; i++) {
      if (element.includes(words[i])) {
        if (!count[element]) {
          count[element] = 1;
        } else {
          count[element]++;
        }
      }
    }
  }
  var max = 0;
  var keyindex;
  for (let index = 0; index < Object.values(count).length; index++) {
    if (max < Object.values(count)[index]) {
      max = Object.values(count)[index];
      keyindex = Object.values(count).indexOf(Object.values(count)[index]);
    }
  }
  var key = Object.keys(count)[keyindex];

  console.log(key);
}
