//initialize array to store numbers
var numbers = [];
var numbersUnique = [];
let numbersPicked = [55, 32, 68, 55, 13, 55, 96, 55, 32, 13];
randomizeNumbers(numbers);
console.log(numbers);
numbersUnique = checkForDuplicates(numbersPicked);
console.log(numbersPicked);
console.log(numbersUnique);


//function to select 10 random numbers in range
function randomizeNumbers(arr) {

    for (let i=0; i<10; i++) {
        let num = Math.floor(Math.random() * 100);
        arr.push(num);
    }

}

//function to check for duplicates values in an array
function checkForDuplicates(arr) { 
    //initialize new array to store unique numbers   
    let newArr = []; 
    for (let i=0; i<arr.length; i++) {
        //if the value is not included in the unique array is added
        if (!newArr.includes(arr[i])) {              
            newArr.push(arr[i]); 
        }
    }
    // returns the new selection with no duplicates
    return newArr; 
}