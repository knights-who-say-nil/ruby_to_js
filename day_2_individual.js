





// function selectEvenItems(strings) {
//   var result = [];
//   var index = 0;
//   strings.forEach(function(string) {
//     if (index % 2 === 0) {
//       result.push(string);
//     }
//     index = index + 1;
//   });
//   return result;
// }

// console.log(selectEvenItems(["a", "b", "c", "d", "e", "f"]));





// function max(numbers) {
//   var currentMax = numbers[0];
//   numbers.forEach(function(number) {
//     if (number > currentMax) {
//       currentMax = number;
//     }
//   });
//   return currentMax;
// }
// console.log(max([5, 4, 8, 1, 2]));





// function factorial(number) {
//   var result = 1;
//   var currentNumber = number;
//   for (var i = 0; i < number; i++) {
//     result = result * currentNumber;
//     currentNumber = currentNumber - 1;
//   }
//   return result;
// }
// console.log(factorial(5));


// for loop explaination

// for (var index = 0; index < 10; index++) {
//   console.log(index);
// }

// var index = 0;

// while (index < 10) {
//   console.log(index);
//   index = index + 1;
// }





// function descending(numbers) {
//   var result = [];
//   for (var index = numbers.length - 1; index >= 0; index--) {
//     result.push(numbers[index]);
//   }
//   return result;
// }
// console.log(descending([1,3,5,7]));








function sumCombinations(numbers1, numbers2) {
  var result = [];
  numbers1.forEach(function(number1) {
    numbers2.forEach(function(number2) {
      result.push(number1 + number2);
    });
  });
  return result;
}
console.log(sumCombinations([1, 5, 10], [100, 500, 1000]));