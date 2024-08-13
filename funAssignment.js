// //Part 1: Thinking Functionally

//Take an array of numbers and return the sum.
function sumOfArray(a, b, c) {
  let sum = a + b + c;
  console.log(`Sum of array:${sum}`);
}
sumOfArray(2, 4, 4);

//Take an array of numbers and return the average.
function averageOfArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  // console.log(`sum of array: ${sum}`);
  console.log(`Average of Arrays:${sum / array.length}`);
}
averageOfArray([4, 4, 4]);

//Take an array of strings and return the longest string.

let arrString = [
  "I am doing an Assignment",
  "Submit",
  "About Functions",
  "Complete",
];
function longestString() {
  let longestString = "";
  for (let i = 0; i < arrString.length; i++) {
    if (arrString[i].length > longestString.length) {
      longestString = arrString[i];
    }
  }
  console.log(`Longest string in the array:${longestString}`);
}

longestString();

//Take an array of strings, and a number and return an array of the strings that are longer than the given number.
function stringsLongerThan(arr, num) {
  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > num) {
      finalArr.push(arr[i]);
      console.log(
        `Array of strings that are longer than the given number: ${arr[i]}`
      );
    }
  }
  return finalArr;
}
stringsLongerThan(["Functions", "Array", "LongerString", "Str"], 5);

//Take a number, n, and print every number between 1 and n without using loops. Use recursion.
function recursive(num, currentVal) {
  if (currentVal > num) {
    return;
  }
  console.log(currentVal);
  recursive(num, currentVal + 1);
}
recursive(10, 1);
