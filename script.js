//Alaways to Investigation Study

// "use strict" // used to treat the code as per js new versions.

// const accountId = 10
// let accountEmail = "mst@123"
// var accountPass = "12345"
// accountCity = "Kanpur"
// let accountState;

// console.table([accountId, accountEmail, accountPass, accountCity, accountState]);

// accountEmail = "mstri@1234";
// accountPass = "9876";
// accountCity = "los angles";

// console.table([accountId, accountEmail, accountPass, accountCity]);

// //null - A stanalonre value as well as datatype and it is a object in js
// //undefined - Is defined the variable is declared but not assigned
// //symbol - it is used to identify uniqueness of a component mostly used in react

//Data Conversion

//33 => number
// 33abs => NaN
// NUMBER -> STRING -> ITS SHOWN AS NUMBER BUT CONVERTED TO STRING
//TRUE -> 1, 

// let a = 33;
// let changed = String(a);
// console.log(changed);
// console.log(typeof changed);

// changed[0] = "1"
// changed[1] = "1"

// console.log(changed);

// console.log("1" + 1); // => 11
// console.log(1 + "1");// => 11
// console.log("1" + 1 + 1);// => 111
// console.log(1 + 1 + "1");// => 21

// // Always use paranthesis for complex arithmatic operations

// console.log(+true);
// console.log(+"");// dont use these types of conversions in real world

// console.log("2" > 1);
// console.log(1 < "1"); //For this type of comparision always try to use same datatype by your own

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);
/* For This the reason is that js treat null as a number and sees it as 0 thats's why 3 line is true and 1 is false */


//Date Types - Primitive and Non-Primitive 

// Primitive => 7types -> Number, String, Boolean, Null , Undefined, Symbol, BigInt

//Non-Primitive => 3types -> Array, Objects, Functions

// x = 10
// console.log(x);
// x = "hello"
// console.log(x); //javascript is a dynamically typed language

// const new_Array = [1, 2, 3]
// const anotherArray = [4, 5, 6]

// const bothArray = [...new_Array, ...anotherArray];

// console.log(bothArray);

// objects

// When we make a object from constructor then the object is known as singleton object

// when we declare the object as literal then the object is not singleton

//object literals

// Object.create  // this is known as singleton because it is made from constructor

const mySym = Symbol("Key1") // This is a symbol which uniquellly identifies the valriable and declared in this way

const user = { 
    name : "Madhu", //by default name is treated as string
    age : 19,
    [mySym] : "hello", //Symbol is used within square bracket otherwise it is treted as String
    loc : "Kanpur",
    email : "google.com",
    isloggedIn : false,
    lastseen : ["Monday", "Saturday"]
}

// console.log(typeof user[mySym]);//and symbol is also accessed using this format

user.age = 20 //you can easily update the value of any key by overwriting it
console.log(user["age"]);
Object.freeze(user) // use can freeze an object means no value be overwritten
user.age = 21 //it will not overwrite because object is freezed
console.log(user); // only that updated value of age is shown here which is updated before freeze