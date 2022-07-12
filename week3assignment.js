// added the question number under every code block. 

let ages = [3, 9, 23, 64, 2, 8, 28, 93, 29];
function subtractArrayElements(array1) {
    var element1 = ages[0];
    var element2 = ages[ages.length - 1];
    var subtractedArrayElements = element1 - element2;
    return subtractedArrayElements;
}
console.log(subtractedArrayElements);
 // 1. a. b.



var totalAmount = 0;
for (i = 0, i = ages.length(); i++;) {
    totalAmount += ages[i];
}
var average = totalAmount / ages.length;
return average;
console.log(average);
// 1. c.


let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
// 2.

let nameLength = names.map(function (element) {
    return element.length;
});
let totalAmountOfCharacters = 0;
for (i = 0; i = nameLength; i++) {
    totalAmountOfCharacters += nameLength[i];
}
var averageAmountOfCharacters = totalAmountOfCharacters / name.length();
console.log(averageAmountOfCharacters);
// 2. a.



for (i = 0; i;)
    console.log(nameLength);
// 2. b.



let shapesArray = ['square', 'circle', 'triangle'];
let firstShape = shapesArray.length - 1;
// 3.


let lastShape = shapesArray[0];
// 4.



let nameLengths = [];

 for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log(nameLengths);
// 5.




var x = 0;

for (let i = 0; i < nameLengths.length; j++) {
    x = x += nameLengths[j]
}
//6. 




function repeatThisString(word, n) {
    var repeat = "";
    while (n > 0) {
      repeat += word;
      n--;
    }
    return repeat;
  }
  console.log(repeatThisString("Hello", 3));
// 7.





function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
// 8.




let numbersArray = [1,7,9,14,3,75,34]

const sumOfArr = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
            }

    if (sum > 100) {
        return true
    } else {
        return false
    }
}
// 9.





function average (arr) {
    var averageInArray = 0;
  for (let i = 0; i < arr.length; i++) {
     var averageInArray = averageInArray += arr[i]
     if (averageInArray > 100) {
        return true
     }
  }}
//10. 





let array1 = [10, 12, 6, 8, 19];
let array2 = [11, 65, 15, 48, 49];

function compareTwoArrays(a,b){
   return average(a) > average(b);
};
console.log(compareTwoArrays(array1, array2));
//11.



const willBuyDrink = (isHotOutside, moneyInPocket) => {
    if (isHotOutside == true && moneyInPocket > 10.50) {
        return true
    } else {
    return false
}}
//12.





let goodWavesForSurf = false;

function goSurfing () {
   if (goodWavesForSurf == true) {
      return "Let's go surfing!"
   } else {
      return "based on today's waves, this is not a good day for surfing."
   }
}
console.log(goodWavesForSurf());
//13.
// created a function that lets me know if there are good waves for surfing. 
