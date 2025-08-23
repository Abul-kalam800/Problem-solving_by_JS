// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.

// Example:

// Input: "hello"
// // Output: "olleh"

function revString() {
  const s = "Mohammad Abul kalam azad";
  const ans = s.split("").reverse().join("");
  return console.log(ans);
}

// revString();

// Problem 2: Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

// Example:

// Input: "programming"
// Output: 3

function countVowel(v) {
const vowel = 'aeiouAEIOU';
  let count = 0;
  
  for(const char of v ){
    if(vowel.includes(char)){
        count++;
    }
  }
  console.log(count)
}
const hero = 'Programming'
countVowel(hero);
