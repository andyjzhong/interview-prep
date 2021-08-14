// Create a function that reverses a string input.
// Ex. "Yo wassup?" should return "?pussaw oY"

let str = "Yo wassup homie?"; // length = 9
let newArr = [];
let reversedStr;

function reverse(str){
    let arr = str.split("")
    // console.log(arr);

    // for each letter in the array, take the last letter and push it to a new array
    for(let i = (arr.length - 1); i >= 0; i--) {
        newArr.push(arr[i])
    }

    // console.log("$ newArr $", newArr);
    reversedStr = newArr.join("");
    // console.log("@ reversedStr @", reversedStr);
    console.log(reversedStr);
}

reverse(str);


// Learnings:
// Do a check on the input first to see if it exists, the length is less than 2, and the data type.
// str[i] works without having to do a split() because JavaScript recognizes that strings are an array of characters.
