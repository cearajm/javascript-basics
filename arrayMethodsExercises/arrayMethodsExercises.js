
function camelize(str) {
    // remove dashes
    let strArray = str.split("-");
   
    // capitalize letter after dash
    let newArr = [];
    strArray.forEach((element, i) => {
        if (i === 0) {
            newArr.push(element);
            return;
        }
        let capital = element[0].toUpperCase();
        let newWord = element.replace(element[0], capital);
        newArr.push(newWord);
    });
    console.log(newArr);

    let camelized = newArr.join("");
    return camelized;
}

function camelize2(str) {
    return str
        .split('-')          // if not first word, then return first letter capitalized plus rest of word
        .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join('');
}


function filterRange(arr, a, b) {
    let filtered = [];
    for (let i = 0; i <= arr.length; i++) {
        let num = arr[i];
        if (num >= a && num <= b) {
            filtered.push(num);
        }
    }
    return filtered;
}

function filterRange2(arr, a, b) {
    return arr.filter(item => item >= a && item <= b)
}

function filterRangeInPlace(arr, a, b) {
    arr.forEach((item, index) => {
        if (item <= a || item >= b) {
            arr.splice(index, 1);
        };
    });
};

function sortDecreasing(arr) {
    arr.sort().reverse();
}

function copySorted(arr) {
    // sort alphabetical

    // let copy = [];
    // arr.forEach(item => copy.push(item));
    // copy.sort();
    // return copy;

    return arr.slice().sort();
}

function shuffle(array) {

}

// if item not between a and b, pop item

// Translate border-left-width to borderLeftWidth
let str = "hello-i-am-yon";
let camelized = camelize2(str);
// alert(camelized);

// Filter range
let arr = [5, 3, 8, 1];
let filtered = filterRange2(arr, 1, 4);
// alert(filtered);
// alert(arr);

// Filter range "in place"
// filterRangeInPlace(arr, 1, 4);
// alert(arr);

// Sort in decreasing order
arr = [5, 2, 1, -10, 8];
sortDecreasing(arr);
// alert(arr);

// Copy and sort array
arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
// alert(sorted);
// alert(arr);

// Shuffle an array -- SKIIIIIPPPP

function unique(arr) {

    let unique = [];

    let x;
    for (x of arr) {
        if (!unique.includes(x)) {
            unique.push(x);
    }};
    
    return unique;
}

// Filter unique array members
let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O