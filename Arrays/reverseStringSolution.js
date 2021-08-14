// Create a function that reverses a string input.
// Ex. "Yo wassup?" should return "?pussaw oY"

function reverse(str){
    if (!str || str.length < 2 || typeof str !== 'string' ) {
        console.log("This aint a string...");
    }

    const backwards = [];
    const totalItems = str.length - 1;

    for(let i = totalItems; i >= 0; i--) {
        backwards.push(str[i])
    }

    return backwards.join('');
}

console.log("@@@ For Loop @@@",reverse("Yo wassup my name is Andy."));

// ***

function reverse2(str) {
    return str.split('').reverse().join('');
}

console.log("@@@ JavaScript Reverse Method @@@", reverse2("Yo wassup my name is Andy."));


// ***

const reverse3 = str => str.split('').reverse().join('');

console.log("@@@ ES6 Arrow Fn @@@", reverse3("Yo wassup my name is Andy."));

// ***

const reverse4 = str => [...str].reverse().join('');

console.log("@@@ ES6 Spread Operator @@@", reverse4("Yo wassup my name is Andy."));
