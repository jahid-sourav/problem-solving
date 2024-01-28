const numbers = [10, 20, 40, 60, 100];
const evenNumbers = numbers.filter(function(number){
    return number % 2 === 0;
});
// const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);