// 01. Access the golden rod color value in output.
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
console.log(colors['golden rod']);

// 02 For this object below add a property named passenger capacity with value 5.
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    passengerCapacity : 5,
};
console.log(car.passengerCapacity);

// 03. Display the physics marks as output.
const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
console.log(student.physics.marks);

// 04 Count the number of properties.
let student2 = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
console.log(Object.keys(student2).length);

// 05 Loop through an object and print the key-value pairs with their types
let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};
for(let key in myObject) {
    const value = myObject[key];
    const type = typeof value;
    console.log(`key: ${key} | type: ${type}`);
}