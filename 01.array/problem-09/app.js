function rotateArrayRight(arr, positions) {
    // Calculate the effective number of positions based on array length
    const effectivePositions = positions % arr.length;

    // Rotate the array using slicing and concatenation
    const rotatedArray = arr.slice(-effectivePositions).concat(arr.slice(0, -effectivePositions));

    return rotatedArray;
}

const originalArray = [1, 2, 3, 4, 5];
const rotatedArray = rotateArrayRight(originalArray, 2);

console.log(rotatedArray);
