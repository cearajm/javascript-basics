

// map to names
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];  // array of user objects, convert to array of names

let names = users.map(getName);
alert( names ); // John, Pete, Mary


function getName(name) {
    return name["name"];
};

// map to objects
// sort users by age
// get average age
// create keyed object from array