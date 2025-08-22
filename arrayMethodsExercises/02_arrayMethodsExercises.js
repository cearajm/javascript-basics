

// map to names
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];  // array of user objects, convert to array of names
let names = users.map(getName);
// alert( names ); // John, Pete, Mary

function getName(name) {
    return name["name"];
};



// map to objects
let leon = { name: "Leon", surname: "Smith", id: 1 };
let cione = { name: "Cione", surname: "Hunt", id: 2 };
let puppet = { name: "Puppet", surname: "Key", id: 3 };

let friends = [ leon, cione, puppet ];

let friendsMapped = friends.map(item => ({  // returns new array, original array untouched
    fullName: `${item.name} ${item.surname}`,
    id: item.id,
}));

// console.log(friendsMapped);
// alert( friendsMapped[0].id ) // 1
// alert( friendsMapped[0].fullName ) // John Smith


// sort users by age
let cel = { name: "Cel", age: 25 };
let meringue = { name: "Meringue", age: 24 };
let howl = { name: "Howl", age: 28 };


let arr = [ cel, meringue, howl ];
let object = {};  // 3 objects
let sortedByAge = [];
sortByAge(arr);

// turn friends into 3 values of a new object using friend.age as a key.
// use for...in on the new object, to iterate in order of key value.
// push each friend to an array. the array is now sorted by age.
function sortByAgeBAD(arr) {
    arr.forEach(friend => {
        let key = friend.age;
        console.log(key);
        object[key] = friend;
        console.log(object[key]);
    });
    console.log(object);
    for (let key in object) {
        console.log("key: " + key);
        let friend = object[key];
        sortedByAge.push(friend);
    }
}

// actual solution lol. forgot this is about array functions.
function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
}

// now: [john, mary, pete]
// alert(sortedByAge[0].name); // Meringue
// alert(sortedByAge[1].name); // Cel
// alert(sortedByAge[2].name); // Howl

alert(arr[0].name); // Meringue
alert(arr[1].name); // Cel
alert(arr[2].name); // Howl



// get average age
// create keyed object from array