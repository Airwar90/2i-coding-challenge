//initialize the array that will store the numbers
var numbers = []; 
//tries the functions with a selection that has duplicates
let pickedArr = [12, 55, 45, 12, 55, 45, 68, 2, 68, 2];
numberSort(pickedArr);

//function to select 10 random numbers in range
function randomizeNumbers() {
    for (let i=0; i<10; i++) {
        let num = Math.floor(Math.random() * 100);
        numbers.push(num);
    }
    //checks for duplicates in the selection
    numberSort(numbers)
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
//final function that provides a sorted array in descending order without duplicates
function numberSort(arr) {
    arr = checkForDuplicates(arr);
    descendingOrder(arr);
}