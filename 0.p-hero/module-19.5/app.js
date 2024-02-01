// 01 Write a JavaScript code to reverse the array colors without using the reverse method.
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// ['orange', 'yellow', 'green', 'blue', 'red'] => Output

function reverseArrayColors(array){
    const reversedColors = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedColors.push(array[i]);
    }
    return reversedColors;
}
const reversedColors = reverseArrayColors(colors);
console.log(reversedColors);
console.log('-----------------------');

// 02 Write a JavaScript code to get the even numbers from an array using any looping technique.
const numbers = [12, 98, 5, 41, 23, 78, 46]; // Output => [12, 98, 78, 46]
function evenNumbers(array){
    const evenNumbersArray = [];
    for (number of numbers){
        if(number % 2 === 0){
            evenNumbersArray.push(number);
        }
    }
    return evenNumbersArray;
}
const evenNumbersArray = evenNumbers(numbers);
console.log(evenNumbersArray);
console.log('-----------------------');

// 03 Use a for...of loop to concatenate all the elements of an array into a single string.
var numbs = ['Tom', 'Tim', 'Tin', 'Tik'] // Output => 'TomTimTinTik'
console.log(numbs.join(''));


// 04 Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
const statement = 'I am a hard working person'; // Output => 'person working hard a am I'

function reverseWords(sentence){
    const wordsArray = sentence.split(' ');
    const reverseWordsArray = wordsArray.reverse();
    return reverseWordsArray.join(' ');
}

const reversedStatement = reverseWords(statement);
console.log(reversedStatement);