var SarahObject = new Object();
SarahObject["firstName"] = "Sarah";
SarahObject.lastName = "Abdelwhab";

// another way to define object
var person2 = {
    firstName:'dodo',
    lastName:'Abdo',
    address:{
        street:'444 Main st.',
        City:'Alex',
        flat:'46'
    }
};

person2.address2={
    street:"22 b st."
}

var FirstNameProp = "firstName";

// same same
console.log(SarahObject[FirstNameProp]);
console.log(SarahObject.firstName);

console.log(SarahObject);

SarahObject.address = new Object();
SarahObject.address.street = "222 Main st.";
SarahObject.address.flat = "28";
SarahObject.address.City = "Cairo";

console.log(SarahObject);

// same same
console.log(SarahObject.address.City);
console.log(SarahObject['address']['City']);


function greet(person){
    console.log('Hi ' + person.firstName);
}

greet(SarahObject);
greet({firstName:'zoz', lastName:'Mo'});


// function Constructor & 'new'
function Person(firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greet = function() {
    console.log('Hello ' + this.firstName + " " + this.lastName);
    
}

var John = new Person('john', 'Ali');
var Jane = new Person('Jane', 'Doe');

John.greet();    
// JS will search into the obj then its proto
console.log(John.__proto__);
console.log(Jane.__proto__);
console.log(John.__proto__ === Jane.__proto__);