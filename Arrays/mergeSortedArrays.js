// Take two ordered arrays and create a single array that contains all the values in order.
// mergeSortedArrays([0,3,4,31], [3,4,6,30]);

// I: Two sorted arrays.
// O: Single array with values from 2 arrays sorted.

// arr1
// for each item in arr2, push to arr 1.
// then use sort() on arr1.

// O(n)
const mergeSortedArrays = (arr1, arr2) => {
    if(!arr1 || typeof arr !== "array" ) {
        console.log("Issue!");
    }

    for (let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i])
    }

    return arr1.sort((a,b) => a - b)
}

console.log(mergeSortedArrays([-6,0,3,4,31,100,800], [3,4,-5,6,30]))

// Learnings:
// -    If there's a scenario where either of the arrays are empty, you can simply just return the other array which is less work.
