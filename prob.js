//

//Problem 1---->Reversing the string elements

//.s stands for .split() 
//.r stands for .reverse()
//.j stands for .join()

// var word = "hello";

// var splitWord = word.split(""); // split word  array

//console.log(splitWord)

// var reverseWord = splitWord.reverse();// revers word  array

//console.log(reverseWord)

//joinedWords = reverseWord.join("")

// var word = "MADAM";
// var reverseWord = word.split("").reverse().join("");
// console.log("Reversed str is:", reverseWord);



var word = "hello";
let reverseWord = "";

for (let i = word.length - 1; i >= 0; i--){
  reverseWord += word[i]
}

console.log("Reversed str is:", reverseWord);
console.log(
  "----------------------------------------------------------------------------------------------"
);

//Problem 2---->Fetching highest and lowest number in array

let array = [21, -65, 43, 98, -23, 98, 56, -37];
let highest = 0;
let lowest = array[0];
for (let i = 0; i < array.length; i++) {
  if (array[i] > highest) {
    highest = array[i];
  } else if (array[i] < lowest) {
    lowest = array[i];
  }
}
console.log(`Highest no is:`,highest);
console.log(`Lowest no is:`,lowest);

console.log(
  "----------------------------------------------------------------------------------------------"
);

//Problem 3---->Reversing the string

let strA = "Akshay,amol,amit";
let strB = "";

for (let i = strA.length - 1; i >= 0; i--) {
  strB += strA[i];
}

console.log(strB);

let revStrC = strA.split(",").reverse();
console.log(revStrC);

console.log(
  "----------------------------------------------------------------------------------------------"
);


//Problem 4

let branch = "Tree";
let br = "";
for (let i = 0; i < branch.length; i++) {
  if (i != 0 && i != branch.length - 1) {
    br = br + branch[i];
  }
}
console.log(branch);

console.log(
  "----------------------------------------------------------------------------------------------"
);

//Problem 5---->python.py extract py

let lang = "python.py";
let sep = lang.split(".");
console.log(sep[sep.length - 1]);

//or

let pton = "python.py";
let pyyp = "";
for (let i = 0; i < pton.length; i++) {
  if (i == pton.length - 1 || i == pton.length - 2) {
    pyyp = pyyp + pton[i];
  }
}
console.log(pyyp);

console.log(
  "----------------------------------------------------------------------------------------------"
);

//Problem 6---->

let prack = [
  [1, 2, 5],
  [4, 6, -9],
  [100, -200, -300],
];
let blankArry = [];
for (let i = 0; i < prack.length; i++) {
  for (let j = 0; j < prack[i].length; j++) {
    blankArry.push(prack[i][j]);
  }
}
console.log(blankArry);

let highValue = 0;
let lowValue = blankArry[0];
for (let k = 0; k < blankArry.length; k++) {
  if (blankArry[k] > highValue) {
    highValue = blankArry[k];
  } else if (blankArry[k] < lowValue) {
    lowValue = blankArry[k];
  }
}
console.log(`High value is:`,highValue);
console.log('Low value is:',lowValue);

console.log(
  "----------------------------------------------------------------------------------------------"
);


//Problem 7---->find out count of word in given string

let statementA =
"You say that everything sounds the same-Then You go buy them-There’s no excuses my friend-Let’s push things forward!";
let wordOne = statementA.split(" ");

let count = 0;
for (let a = 0; a < wordOne.length; a++) {
  if (wordOne[a].includes("You")) {
    count++;
  }
}
console.log(count);

console.log(
  "----------------------------------------------------------------------------------------------"
);

//problem 8---->Count the vowels from given string

let song =
"First things first I'ma say all the words inside my head I'm fired up and tired of the way that things have been, oh-ooh";

let counter = 0;
for (let s = 0; s < song.length; s++) {
  if (
    song[s] == "a" ||
    song[s] == "e" ||
    song[s] == "i" ||
    song[s] == "o" ||
    song[s] == "u"
  ) {
    counter++;
  }
}
console.log(counter);

console.log(
  "----------------------------------------------------------------------------------------------"
);

//Problem 9---->Sorting the array have differant type of elements

let multiArray = [
  67,
  "Amol",
  "akshay",
  -22,
  "amit",
  4,
  "abhi",
  
];
let digits = [];
let alphabets = [];
for (let m = 0; m < multiArray.length; m++) {
  if (typeof multiArray[m] == "number") {
    digits.push(multiArray[m]);
  } else {
    alphabets.push(multiArray[m]);
  }
}
digits.sort(function (a, b) {
  return a - b;
});

alphabets.sort();

let newArray = digits.concat(alphabets);
console.log(newArray);

console.log(
  "----------------------------------------------------------------------------------------------"
);


//Problem 10---->Compresing the string

function compress(string) {
  let stringC = "";
  let countC = 1;
  let index = 0;
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === string.charAt(i + 1)) {
      countC += 1;
    } else {
      stringC += `${string.charAt(i)}${countC}`;
      countC = 1;
    }
  }
  console.log(stringC);
}

compress("aaaabbbccd");

//or

function Compressed2(stringA) {
  let CompressedString = "";
  let countU = 0;
  for (let i = 0; i < stringA.length; i++) {
    countU++;
    if (stringA[i] != stringA[i + 1]) {
      CompressedString += stringA[i] + countU;
      countU = 0;
    }
  }
  console.log(CompressedString);
}
Compressed2("aaaabbbccd");

console.log(
  "----------------------------------------------------------------------------------------"
);

//Problem 11---->

let h = "4a3c2b";

let even = [];
let odd = [];

for (let i = 0; i < h.length; i++) {
  if (i % 2 == 0) {
    even.push(h[i]);
  } else {
    odd.push(h[i]);
  }
}
console.log(even);
console.log(odd);

newString = " ";

for (let i = 0; i < even.length; i++) {
  newString = newString + odd[i].repeat(Number(even[i]));
}
console.log(newString);

console.log(
  "------------------------------------------------------------------------"
);

//Problem 12---->

let numString = [123];
let newstr = "";
for (let i = numString.length - 1; i >= 0; i--) {
  newstr += numString[i];
}
console.log(`ans${newstr}`);