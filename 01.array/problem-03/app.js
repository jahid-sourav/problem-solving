const numbers = [10, 20, 40, 60, 100, 10, 40, 20];
const uniqueNumbersArray = numbers.filter(
    (value, index, array) => array.indexOf(value) === index
);
console.log(uniqueNumbersArray);
