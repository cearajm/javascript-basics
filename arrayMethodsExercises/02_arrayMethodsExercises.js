

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





// get average age
// create keyed object from array