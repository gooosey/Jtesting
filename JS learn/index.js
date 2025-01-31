// /* Comment 
// comment 
// */

// // console statement
// console.log("hello");
// console.error("this is error");
// console.warn("This is a warning");

// // Popup window
// window.alert("This is alert");

// // Variables var (people dont use mainly), let (reassign values), const (cant be directly reassigned) 
// const score = 30;
// let num = 10;
// num = 21; 
// console.log(score);
// console.log(num)

// // Data types String, Number, Boolean, null, undefined 
// const name = "John";
// const age = 40;
// const rate = 4.5;
// const isGoose = true;
// const x = null; // Means empty
// const y = undefined; // exmaple let z; 

// console.log(typeof name); // typeof; what values

// // Concatenation 
// console.log("My name is " + name + "and I am " + age);

// // Template String
// const hello = `My name is ${name} and I am ${age}`;
// console.log(hello);

// // String manipulation
// const s = "hello wolrd";

// console.log(s.length);
// console.log(s.toLowerCase());
// console.log(s.toUpperCase());
// console.log(s.substring(0, 5)); // Beginning to End 
// console.log(s.split('')); // Turn into array

// // Turn into array
// const turn = "Goose, Honk, Quack"
// console.log(turn.split(", ")) // ['Goose', 'Honk', 'Quack']

// // Arrays - Holding multiple values
// const newArr = new Array(1,2,3,4,5);
// console.log(newArr);

// const fruits = ["apples", "oranges", 10, false];
// console.log(fruits);

// console.log(fruits[1]); // Accessing array
// fruits.push("mangos"); // Adding to last index
// fruits.unshift("Goose"); // Adding item to first index
// fruits.pop() // Removing last index
// fruits[3] = "grapes"; // Adding item to array

// console.log(Array.isArray(fruits)); // Checks if Arrays
// console.log(fruits.indexOf('oranges')); // finds index of # item

// console.log(fruits);

// // Object Literals

// const person = {
//     firstName: 'Goose', 
//     lastName: 'Quack',
//     age: 200,
//     hobbies: ['quacking', 'honking', 'flying'],
//     address: {
//         street: 'lake',
//         city: 'town of goose',
//         state: 'NA'
//     }
// }

// const { firstName, lastName, address: {city}} = person; // nested objects

// person.email = "goose@gmail.com" // Adding properties

// console.log(person.email)
// console.log(lastName, city);
// console.log(person.hobbies[2]); // printing index #
// console.log(person.age, person.firstName); // Taking values

// // Arrays Of Objects & JSON
// const todo = [
//     {
//         id: 1,
//         text: "Do a Honk",
//         isDone: false
//     },
//     {
//         id: 2,
//         text: "Do a Quack",
//         isDone: true
//     },
//     {
//         id: 3,
//         text: "Do a flip",
//         isDone: true
//     }
// ];

// console.log(todo[1].text);

// // Convert Json 
// const todoJson = JSON.stringify(todo);
// console.log(todoJson);

// // For loops
// for(let i = 0; i < 10; i++) {
//     console.log(`For loop Number: ${i}`);
// }

// for (let i = 0; i < todo.length; i++) {
//     console.log(todo[i].text);
// }

// for(let todos of todo) {
//     console.log(todos.text)
// }

// // forEach, map, filter
// todo.forEach(function(todo) { // iterates through array
//     console.log(todo.text);
// });

// const todoText = todo.map(function(todo) { // creates new array 
//     return todo.text;
// });

// // console.log(todoText)

// const todoComp = todo.filter(function(todo) { // creates new array that satisfy condition
//     return todo.isDone === true;
// }).map(function(todo) { // remove map part (this is for adding another condidtion) which are isDone === true && create a new arr with todo.text
//     return todo.text;
// })

// console.log(todoComp)

// // While loops
// let i = 0;
// while(i < 10) {
//     console.log(`While loop ${i}`);
//     i++; // Add or else inf loop
// }

// // Conditions 

// const p = 11;
// const o = 5;

// if(p === 10) {
//     console.log(`p is 10`);
// } else if(p > 10) {
//     console.log("p is greater than 10")

// } else {
//     console.log(`p is less than 10`);
// };

// if(p > 10 || o > 4) { // One or the other has to be true
//     console.log("p & o are >10 or >4");
// };

// if(p > 10 && o > 4) { // both has to be true
//     console.log("both are higher");
// };

// // Ternary operation ? then : else
// const q = 10;
// const col = q > 10 ? 'red' : 'blue';

// // Switch Case
// const color = "blue"

// switch(color) {
//     case "red":
//         console.log("this is red");
//         break;
//     case "blue":
//         console.log("this is blue");
//         break;
//     default:
//         console.log("this isnt blue or red");
//         break;
// }       

// // Functions
// function addNums(num1 = 1,num2 = 2) {
//     return num1 + num2;
// }
// console.log(addNums(5, 5));

// // Arrow Functions
// const add = (a, b) => a + b;
// console.log(add(2,3));

// // Constructor Functions & Prototypes
// function people(firstname, lastname, dob) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.dob = new Date(dob);

// }
// // Prototypes
// people.prototype.getBY = function() {
//     return this.dob.getFullYear();
// }
// people.prototype.getFN = function() {
//     return `${this.firstname} ${this.lastname}`;
// }

// // Classes ES6
// class peoples {
//     constructor(firstname, lastname, dob) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.dob = new Date(dob);
//     }
//     getBY() {
//         return this.dob.getFullYear();
//     }
//     getFN() {
//         return `${this.firstname} ${this.lastname}`
//     }       
// }

// // // Instantiate Obj
// const person1 = new people('JOhn', 'Doe', 4-1-300);
// const person2 = new peoples('Goose', 'Honk', 12-34-200);

// console.log(person1);
// console.log(person1.getBY());
// console.log(person1.getFN());
// console.log(person1.firstname);


// console.log(person2);
// console.log(person2.getBY());
// console.log(person2.getFN());
// console.log(person2.firstname);

