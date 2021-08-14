const strings = ['a', 'b', 'c', 'd'];
console.log("$ Original Array $", strings);

// Lookup = Find a value at index of n
console.log(strings[3]);

// Push = Add something to the end of the array.
strings.push('e') // O(1) because you're adding 1 value. Can be O(n) if this is a dynamic array since it maps through the entire array before adding a new item.
console.log("$ Push $", strings);

// Pop = Remove something to the end of the array.
strings.pop() // O(1) because you're removing 1 value.
console.log("$ Pop $", strings);

// Unshift = Add something to the beginning of the array.
strings.unshift('x') // O(n) because you're shifting the values by reassigning all the indexes and values.
console.log("$ Unshift $", strings);

// Splice = Add/delete something to the middle of the array. [startingIndex, deleteCount (0 if adding) , itemToAdd]
strings.splice(2, 0, 'y') // O(n) because you're shifting the values by reassigning all the indexes and values.
console.log("$ Splice $", strings);
