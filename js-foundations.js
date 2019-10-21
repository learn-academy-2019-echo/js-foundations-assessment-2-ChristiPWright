// ASSESSMENT 2: JAVASCRIPT FOUNDATIONS
// Coding practical questions

// // 1. Write a function that takes a number as an argument and decides if the number is evenly divisble by three or not. Use the test cases 15, 0, 385, -7. Expected output: "15 is divisible by three", "0 is divisible by three", "385 is not divisble by three", "-7 is not divisble by three".
const divisibleBy = (num) => {
    if(num%3 === 0){
        return `${num} is divisble by 3`
    } else {
        return `${num} is not divisibleBy`
    }
}
console.log(divisibleBy(15))
console.log(divisibleBy(0))
console.log(divisibleBy(385))
console.log(divisibleBy(-7))
console.log(divisibleBy(-9))

// // 2. Create an object called helloMe. Include your firstName, lastName and TWO OTHER properties of you. Add a method to your object that will return a sentence using the object properties to describe you.
const helloMe = {
    firstName: 'Christi', 
    lastName: 'Wright', 
    origin: 'Bay Area', 
    alum: 'UCSD',
    getData: function () {return `${helloMe.firstName} ${helloMe.lastName} is from the ${helloMe.origin} and went to college at ${helloMe.alum}.`}
}

console.log(helloMe.getData())

// ------------------------------------- Consider the variable:

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]

// // 3a. Write a function that returns every other item from the array as one string. Expected output: "streetlamp teeth nephew database"
 
//filter - need to update to function, currently returning the whole array
// const arrayToString = (array) => {
//     return array.filter(word => word ).join(" ") 
//  }
// console.log(arrayToString(randomNouns))

const arrayToString2 = (array) => {
    let newArray = []
    for (let i = 0; i<array.length; i++){
        if (i%2 === 0){
        newArray.push(array[i])
        }    
    }
    return newArray.join(" ")
}
console.log(arrayToString2(randomNouns))

// // 3b. Create a function that takes in the variable and returns the array with all the words capitalized. Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]
// //why is my array printing each element on a new line?
const capitalizer = (array) => {
    newArray = []
    for(let i = 0; i<array.length; i++){
        newArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1))
    }
    return newArray
}

console.log(capitalizer(randomNouns))

// // option... returns undefined currently....why? this iteration should have cleared up comp's call confusion..
// function capitalizer2(array) {
//     return array.forEach(function(element) {element.charAt(0).toUpperCase() + element.slice(1)})
// }

// console.log(capitalizer2(randomNouns))

// const capitalizer2 = (array) => {
//     return array.forEach(element => {element.replace(element[0], element[0].toUpperCase()})
// }

// console.log(capitalizer2(randomNouns))

// // 3c. STRETCH: Create a function that returns the length of each string from the randomNouns variable. Expected output: [10, 6, 5, 10, 6, 11, 8]




// // -------------------------------------- Consider the variables:
var testString1 = "learn"
var testString2 = "academy"
var testString3 = "sandiego"

// // 4a. Write a function called alphabetSoup that takes one argument and returns a string with all the letters in alphabetical order. Use each of the varibales as test cases. Expected output: "aelnr" "aacdemy" "adeginos"
const alphabetSoup = (arg) => {
    let newArray = arg.split("")
    return newArray.sort().join("")
}

console.log(alphabetSoup(testString1))
console.log(alphabetSoup(testString2))
console.log(alphabetSoup(testString3))

// // 4b. Write a function that takes in all three variables and returns a string with all the letters in alphabetical order. Expected output: "aaaacddeeegilmnnorsy"
const alphabetSoupCombo = (var1, var2, var3) => {
    let newArray = (var1+var2+var3).split("")
    return newArray.sort().join("")
}

console.log(alphabetSoupCombo(testString1,  testString2, testString3))

// with the spread operator - wasn't more efficient b/c inherently returns an array that then still has to be merged and sorted - but hey it works for any # of variables
// function arrayifier(...args){
//      let newArray = args
//      newArray = newArray.join("")
//      newArray = newArray.split("")
//      return newArray.sort().join("")
// }
// console.log(arrayifier(testString1, testString2, testString3))

// // ------------------------------------- Consider the variables:
var amounts = [9, 1, 8, 16, 5, 1, 42]
var animals = ["ducks", "elephants", "pangolins", "zebras", "giraffes", "penguins", "llamas"]

// // 5a. Write a function that takes the two variables and returns a combined string. Expected output: "9 ducks 1 elephants 8 pangolins 16 zebras 5 giraffes 1 penguins 42 llamas"
const stringCombo =(var1,var2) => {
     let newArray = []
     let length
     if (var1.length >= var2.length){
         length = var1.length
     } else {
         length = var2.length
     }
     for(let i = 0; i<length; i++){
         newArray.push(var1[i])
         newArray.push(var2[i])
     }
     return newArray.join(" ")
 }
console.log(stringCombo(amounts, animals))

//currently throwing an error
// const stringCombo =(var1,var2) => {
//     let newArray = []
//     for(let i = 0; i<var1.length; i++){
//         newArray.push(var1[i])
//         for (let j = 0; j<var2.length; j++){
//             if (!newArray.includes(var2[j]){
//                 newArray.push(var2[j])
//             }
//         }
//     }
//     return newArray.join(" ")
// }
// console.log(stringCombo(amounts, animals))

// 5b. STRETCH: Create a function that combines the two variables and updates the animal to be singular if the animal's corresponding number is 1. Expected output: "9 ducks 1 elephant 8 pangolins 16 zebras 5 giraffes 1 penguin 42 llamas"

