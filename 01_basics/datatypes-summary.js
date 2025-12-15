// primitive - 7 types
//string, number , boolean, null, undefined, symbol, bigint

const score1 = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//big number
const bigNumber = 34458555n


// reference (non-primitive) 
//array, objects, functions

const heros = ["shaktiman", "naagraj", "doga"]
let myobj = {
    name: "nandini",
    age: 23,

}


const myFunction = function(){
     console.log("hello world");
}


//JAVA SCRIPT IS DYNAMICALLY TYPED LANGUAGE

//onsole.log(typeof bigNumber); //undefined
//consle.log(typeof outsideTemp); //object
console.log(typeof myFunction)
console.log(typeof heros)
console.log(typeof anotherId)




