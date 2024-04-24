
////====Chapter=no-15====////// 
//========Arrays========

//1. Declare an empty array using JS literal notation to store
//student names in future.
//let futureStudentNames = [];

//2. Declare an empty array using JS object notation to store
//student names in future.
/*let futureStudents = {
    names: []
};*/

//3. Declare and initialize a strings array.
//let stringsArray = ["apple", "banana", "orange"];

//4. Declare and initialize a numbers array.
//let numbersArray = [1, 2, 3, 4, 5];

//5. Declare and initialize a boolean array.
//let booleanArray = [true, false, true, true];

//6. Declare and initialize a mixed array.
//let mixedArray = ["apple", 3, true, "banana", false];

//7. Declare and Initialize an array and store available
//education qualifications in Pakistan (e.g. SSC, HSC, BCS,
   // BS, BCOM, MS, M. Phil., PhD). Show the listed
   // qualifications in your browser like:
/*let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

/document.write("<h2>Educational Qualifications in Pakistan:</h2>");
document.write("<ul>");
qualifications.forEach(function(qualification) {
    document.write("<li>" + qualification + "</li>");
});
document.write("</ul>");*/

/*8. Write a program to store 3 student names in an array.Take
another array to store score of these three students.
Assume that total marks are 500 for each student, display
the scores & percentages of students like:*/
// Array to store student names
/*let studentNames = ["Alice", "Bob", "Charlie"];

// Array to store scores of students
let scores = [420, 380, 450];

// Calculate percentages
let percentages = [];
for (let i = 0; i < scores.length; i++) {
    percentages.push((scores[i] / 500) * 100);
}

 Display scores and percentages
document.write("<h2>Student Scores and Percentages:</h2>");
document.write("<ul>");
for (let i = 0; i < studentNames.length; i++) {
    document.write("<li>" + studentNames[i] + " - Score: " + scores[i] + ", Percentage: " + percentages[i] + "%</li>");
}
document.write("</ul>");*/

/*9. Initialize an array with color names. Display the array
elements in your browser.
a. Ask the user what color he/she wants to add to the
beginning & add that color to the beginning of the array.
Display the updated array in your browser.
b. Ask the user what color he/she wants to add to the end
& add that color to the end of the array. Display the
updated array in your browser.
c. Add two more color to the beginning of the array.
Display the updated array in your browser.
d. Delete the first color in the array. Display the updated
array in your browser.
e. Delete the last color in the array. Display the updated
array in your browser.
f. Ask the user at which index he/she wants to add a color
& color name. Then add the color to desired
position/index. . Display the updated array in your
browser.
g. Ask the user at which index he/she wants to delete
color(s) & how many colors he/she wants to delete. Then
remove the same number of color(s) from user-defined
position/index. . Display the updated array in your
browser.
// Initialize array with color names
let colors = ["red", "green", "blue"];

// Display original array
document.write("<h3>Original Array:</h3>");
document.write("<p>" + colors.join(", ") + "</p>");

// a. Add color to the beginning
let colorToAddBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddBeginning);

// Display updated array after adding color to the beginning
document.write("<h3>Updated Array after adding color to the beginning:</h3>");
document.write("<p>" + colors.join(", ") + "</p>");

// b. Add color to the end
let colorToAddEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddEnd);

// Display updated array after adding color to the end
document.write("<h3>Updated Array after adding color to the end:</h3>");
document.write("<p>" + colors.join(", ") + "</p>");

// c. Add two more colors to the beginning
colors.unshift("yellow", "purple");

// Display updated array after adding two colors to the beginning
document.write("<h3>Updated Array after adding two colors to the beginning:</h3>");
document.write("<p>" + colors.join(", ") + "</p>");

// d. Delete the first color in the array
colors.shift();

// Display updated array after deleting the first color
document.write("<h3>Updated Array after deleting the first color:</h3>");
document.write("<p>" + colors.join(", ") + "</p>");

// e. Delete the last color in the array
colors.pop();

// Display updated array after deleting the last color
document.write("<h3>Updated Array after deleting the last color:</h3>");
document.write("<p>" + colors.join(", ") + "</p>");

// f. Add a color at a specific index
let indexToAdd = prompt("Enter the index where you want to add a color:");
let colorToAdd = prompt("Enter the color you want to add:");
colors.splice(indexToAdd, 0, colorToAdd);

// Display updated array after adding a color at a specific index
document.write("<h3>Updated Array after adding a color at a specific index:</h3>");
document.write("<p>" + colors.join(", ") + "</p>");

// g. Delete color(s) from a specific index
let indexToDelete = prompt("Enter the index from which you want to delete color(s):");
let numberOfColorsToDelete = prompt("Enter the number of colors you want to delete:");
colors.splice(indexToDelete, numberOfColorsToDelete);

// Display updated array after deleting color(s) from a specific index
document.write("<h3>Updated Array after deleting color(s) from a specific index:</h3>");
document.write("<p>" + colors.join(", ") + "</p>");*/

/*10. Write a program to store student scores in an array &
sort the array in ascending order using Array’s sort
method.
// Array to store student scores
let studentScores = [78, 92, 85, 65, 70];

// Display original array
document.write("<h3>Original Student Scores:</h3>");
document.write("<p>" + studentScores.join(", ") + "</p>");

// Sort the array in ascending order
studentScores.sort(function(a, b) {
    return a - b;
});

// Display sorted array
document.write("<h3>Sorted Student Scores (Ascending Order):</h3>");
document.write("<p>" + studentScores.join(", ") + "</p>");*/

/*11. Write a program to initialize an array with city names.
Copy 3 array elements from cities array to selectedCities
array.
// Initialize an array with city names
let cities = ["New York", "London", "Paris", "Tokyo", "Sydney"];

// Initialize an empty array to store selected cities
let selectedCities = [];

// Copy 3 elements from cities array to selectedCities array
selectedCities = cities.slice(0, 3);

// Display selectedCities array
document.write("<h3>Selected Cities:</h3>");
document.write("<p>" + selectedCities.join(", ") + "</p>");*/

/*13. Create a new array. Store values one by one in such a way
that you can access the values in the order in which they
were stored. (FIFO-First In First Out)
// Initialize an empty array
let fifoArray = [];

// Add values to the array
fifoArray.push("Value 1");
fifoArray.push("Value 2");
fifoArray.push("Value 3");

// Access and remove values in FIFO order
let firstValue = fifoArray.shift(); // Removes "Value 1"
let secondValue = fifoArray.shift(); // Removes "Value 2"
let thirdValue = fifoArray.shift(); // Removes "Value 3"

// Display the values
console.log(firstValue); // Output: "Value 1"
console.log(secondValue); // Output: "Value 2"
console.log(thirdValue); // Output: "Value 3"*/

/*14. Create a new array. Store values one by one in such a way

that you can access the values in reverse order. (Last In-
First Out)
// Initialize an empty array
let lifoArray = [];

// Add values to the array
lifoArray.push("Value 1");
lifoArray.push("Value 2");
lifoArray.push("Value 3");

// Access and remove values in LIFO order
let lastValue = lifoArray.pop(); // Removes "Value 3"
let secondLastValue = lifoArray.pop(); // Removes "Value 2"
let thirdLastValue = lifoArray.pop(); // Removes "Value 1"

// Display the values
console.log(lastValue); // Output: "Value 3"
console.log(secondLastValue); // Output: "Value 2"
console.log(thirdLastValue); // Output: "Value 1"*/

/*15. Write a program to store phone manufacturers (Apple,
Samsung, Motorola, Nokia, Sony & Haier) in an array.
Display the following dropdown/select menu in your
browser using document.write() method:
// Array of phone manufacturers
let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Write HTML code to display dropdown/select menu
document.write("<select>");

// Write options for each manufacturer
manufacturers.forEach(function(manufacturer) {
    document.write("<option value='" + manufacturer + "'>" + manufacturer + "</option>");
});

// Close the select element
document.write("</select>");*/









