//initialize array to store numbers
var numbers = [];
var numbersUnique = [];
let numbersPicked = [55, 32, 68, 55, 13, 55, 96, 55, 32, 13];
randomizeNumbers(numbers);
console.log(numbers);
numbersUnique = checkForDuplicates(numbersPicked);
console.log(numbersPicked);
console.log(numbersUnique);

descendingOrder(numbersPicked);
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

//function to return the max value in a array and strips it from array
function arrmin(arr) {
    let max = arr[0];
    let index;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            index = i;                     
        }        
    }
    arr.splice(index, 1);   
    return max; 
}

//function to sort the number selection in descending order
function descendingOrder(arr) {
    let len = arr.length;
    let sortedArr = [];
    for (let i=0; i<len; i++) {
        //the max value is added to the sorted array at every cycle creating descending order
        sortedArr.push(arrmin(arr));
    }
    console.log(sortedArr);
}