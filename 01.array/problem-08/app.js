const arrayOne = [1, 2, 3, 4, 5];
const arrayTwo = [4, 5, 6];
const commonElements = arrayOne.filter(number => arrayTwo.includes(number));
console.log(commonElements);