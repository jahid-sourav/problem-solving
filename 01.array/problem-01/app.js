const numbers = [10, 20, 40, 60, 100];
const initialValue = 0;
const sumWithInitial = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue,
);
/* without Arrow Function
const sumWithInitial = numbers.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
}, initialValue);
*/ 
console.log(sumWithInitial);
