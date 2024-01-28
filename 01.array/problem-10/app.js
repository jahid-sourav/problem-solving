function countOccurrences(arr) {
    const occurrences = {};

    // Loop through the array and count occurrences
    arr.forEach(element => {
        occurrences[element] = (occurrences[element] || 0) + 1;
    });

    return occurrences;
}

const numbers = [1, 2, 3, 4, 1, 2, 3, 1, 4, 5];

const occurrences = countOccurrences(numbers);

console.log(occurrences);
