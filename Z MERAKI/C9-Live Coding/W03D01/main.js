/* START CODE UNDER THIS LINE */

console.log("21/10");

/* 
1. Starting Point
2. Step
3. Run Condition (true)
*/

// create a starting point
let i = 0;

// Run Condition (true)
while (i < 2) {
  console.log(i);

  // Step
  i = i + 1;
  // i+=1
  // i++
  // ++i (extra to read about but don't use)
}

// ===================

console.clear();

let num = 0;
let notFound = true;
const randomNumber = Math.floor(Math.random() * 100);

console.log(randomNumber); // => ? 17

while (notFound) {
  if (num === randomNumber) {
    notFound = false;
    console.log("The number is:", num);
  } else {
    num += 1;
  }
}

console.clear();

//                     k = k - 1
//Starting point | Run condition | Step
for (let k = 5; k > 3; k -= 1) {
  console.log("K: ", k);
}

/*
let k = 5;

while (k > 3) {
  console.log(k);
  k -= 1;
}
*/

console.clear();

//! ---------- Continue & Break ----------

// Yazan | Baker | Alshami

for (let i = 0; true; i++) {
  if (i === 2) {
    console.log("Continue");
    continue;
  }

  console.log("A:", i);

  if (i === 4) {
    console.log("Break");
    break;
  }

  console.log("B:", i);
}

// =======

console.clear();

// Array
//! ---------- While Loop over Array ----------

// Amal | Rashed | Kamal

// Yasmeen | Khaleel | Zebdieh
//      index     0    1    2
const letters = ["A", "B", "C"];

// Starting Point
let index = 0;

//  Run Condition
while (index < letters.length) {
  //  YES: -1     NO: without
  console.log(index, letters[index]);
  //             0        "A"

  // Step
  index++;
}

const students = ["Yazan", "Ahmad", "Kamal"];

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

//

/* 
Write a function called 'positiveOnly'
that takes an array of numbers
and print the number which is positive only
*/

//                          array
const positiveOnly = function (nums) {
  console.log("HERE");
  // iterate over the `num`
  for (let l = 0; l < nums.length; l++) {
    // check if the num => elem positive
    // positive: bigger than zero
    // one number is `nums[l]`
    if (0 < nums[l]) {
      // print the number => elem nums[l]
      console.log(nums[l]);
    }
  }
};

//  K | O | Y
const arr_2 = [5, -8, -6, 9];
positiveOnly(arr_2);

console.clear();
// string | number | function
// array  | object | boolean

//             01234
const str_2 = "Hello";

for (let u = 0; u < str_2.length; u++) {
  // print the letter but capital
  console.log(str_2[u].toUpperCase());
}

/* 
150 => YES
152 => << gray
return => NO
Other => >> blue
*/

/* 
1. Starting Point
2. Run Condition (to stop at a specific time become false)
3. Steps (to make the starting point make the run condition false)
*/

//! ---------- Problems in Loops ----------
/* 
Logical error
let index_2 = 0;
while (index_2 < -10) {
  console.log(index_2);
  index_2++;
}
*/
// ===================
/*
Infinite Loop
*/
let index_3 = 0;
while (index_3 < 10) {
  console.log(index_3);
  index_3--; // i++  i--
}

// ==============
/*
let index_4 = 0;    
while (index_4 < 10) {
  console.log(index_4);
  index_4++;
}
while (index_4 < 9) {
  console.log(index_4);
  index_4++;
}
*/
// B | R | K
