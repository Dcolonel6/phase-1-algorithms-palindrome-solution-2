function isPalindrome(word) {
  // Write your algorithm here
}

/* 
  Add your pseudocode here
   get the length of the string and divided into two
   iterate from the beginning of the string  upto the middle
   while iterating compare the first to the last letter
*/
for (const startIndex = 0; strartIndex < word.length / 2, startIndex++){
  const endIndex = word.length - 1 -startIndex
  if(word[startIndex !== word[endIndex]]){ 
    return false
  }
  return true
}

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
