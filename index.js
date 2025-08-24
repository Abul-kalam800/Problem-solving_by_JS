// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.



function revString() {
  const s = "Mohammad Abul kalam azad";
  const ans = s.split("").reverse().join("");
  return console.log(ans);
}

// revString();

// Problem 2: Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

/
function countVowel(v) {
  const vowel = "aeiouAEIOU";
  let count = 0;

  for (const char of v) {
    if (vowel.includes(char)) {
      count++;
    }
  }
  //   console.log(count)
}
const hero = "Programming";
countVowel(hero);

// Problem 3 Check palindrom

function panlidromCheck(s) {
  let ans = s.split("").reverse().join("");
  console.log(typeof ans);
  return s === ans;
}
// console.log(panlidromCheck("madam"));
// Problem 4: Find the Maximum Number

function maximumNum(arr) {
  const ans = Math.max(...arr);
  return ans;
}
const arr = [1, 8, 3, 4, 5, 6];
const output = maximumNum(arr);
// console.log(output)

// Problem 5: Remove Duplicates from an Array

function removeDuplicat(arry) {
  const ans = arry.filter((item, index) => arry.indexOf(item) === index);
  return ans;
}

// console.log(removeDuplicat([1,2,3,4,5,4,3,2,1,3,4]))

// Problem 6: Sum of All Numbers in an Array
function sumAllnum(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
}
// console.log(sumAllnum([2,3,4,4,2]))

// Problem 7: Find Even Numbers in an Array
function evenNum(arry) {
  let even = [];
  for (let i = 0; i < arry.length; i++) {
    if (arry[i] % 2 == 0) {
      even.push(arry[i]);
    }
  }
  return even;
}
// console.log(evenNum([1, 2, 3, 5, 6,7,12,15,16,18]));

// Problem 8: Capitalize First Letter of Each Word
function capitalWord(str) {
  const ans = str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return ans;
}
// console.log(capitalWord("my name is abul kalam azad"));

// Problem 9: Find the Factorial of a Number

function fuctrialNum(num) {
  if (num < 0) return "Not factrial number please enter factriol number";
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
// console.log(fuctrialNum(0));

// Problem 10: PingPong Challenge
// Write a function that prints numbers from 1 to 20.
function pingPong() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else {
      console.log(i);
    }
  }
}
pingPong();
