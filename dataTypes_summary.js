// Primitive(call by call(copy))

// 7 types: String , Number , Boolean , Null , undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn  = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
// Non-Primitive(call by reference) 

// Array , Objects , Function