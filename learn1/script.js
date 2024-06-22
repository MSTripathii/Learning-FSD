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

//==============================================Data Conversion=========================================

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


//===================================Date Types - Primitive and Non-Primitive====================================== 

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

// =========================================objects=========================================

// When we make a object from constructor then the object is known as singleton object

// when we declare the object as literal then the object is not singleton

//object literals

// Object.create  // this is known as singleton because it is made from constructor

// const mySym = Symbol("Key1") // This is a symbol which uniquellly identifies the valriable and declared in this way

// const user = { 
//     name : "Madhu", //by default name is treated as string
//     age : 19,
//     [mySym] : "hello", //Symbol is used within square bracket otherwise it is treted as String
//     loc : "Kanpur",
//     email : "google.com",
//     isloggedIn : false,
//     lastseen : ["Monday", "Saturday"]
// }

// console.log(typeof user[mySym]);

// console.log(typeof user[mySym]);//and symbol is also accessed using this format

// user.age = 20 //you can easily update the value of any key by overwriting it
// console.log(user["age"]);
// Object.freeze(user) // use can freeze an object means no value be overwritten
// user.age = 21 //it will not overwrite because object is freezed
// console.log(user); // only that updated value of age is shown here which is updated before freeze

// user.myFunction = function(){
//     console.log("Hello User");
// }

// user.myFunction2 = function(){
//     console.log(`Hello ${user.name}`);
// }

// console.log(user.myFunction); //if you print a functon like this it means function is not executed yet only the reference of functin is came
// console.log(user.myFunction());
// console.log(user.myFunction2());

// const user1 = new Object() // Singleton object
// const user = {} // Literal Object

// user.id = 123
// user.name = "Madhu"
// user.age = 19

// const newUser = {
//     email:"hello@123",
//     fullname: {
//         username: {
//             firstname: "Madhusudan",//Nested object is possible to ant number of level and can be accessed by followed dots 
//             lastname: "Tripathi"
//         }
//     }
// }

// console.log(newUser.fullname.username.lastname); // nested objects can be accessed like this

// console.log(user);
// console.log(user1);

//===================================Object Merging=====================================

// const user1 = {1:"a",2:"b"}
// const user2 = {3:"c",4:"d"}

// const user3 = {user1, user2} // Normal way
// console.log(user3);

// const user4 = {...user1, ...user2}// to merge object we use spread operator
// console.log(user1);
// console.log(user4); // Spread operator is also used to merge objects

// const user4 = Object.assign(user1, user2) // This is the second method of merging he object here curly backets are used to 
//confirm the output that the output must be a combined object

// console.log(user1);
// console.log(user4);  //In this case both the objects are same because the assign function takes first parameter as Target and all other as source
//Thats why changes are also reflected in user1 and user4 also
//TO AVOID THIS PROBLEM WE USE AN EMPTY OBJECT AS THE FIRST PARAMETER OF ASSIGN FUNCTION THIS IS KNOWN AS GOOD PRACTICE

// const user5 = Object.assign({}, user1, user2)
// console.log(user5);

// to find some property of an object we use hasOwnProperty function with the help of dot operator

//============================Destructuring==========================

// const Course  = {
//      Course : "FSD",
//      CourseTeacher : "Madhusudan",
//      Duration : "twoMonths"
// }

// console.log(Course.CourseTeacher);// Instead of using this again and again in the code we simply destructure the object

// const {CourseTeacher} = Course// this tells us that we have to take extract Corse teacher from the object Course
// const {CourseTeacher : konPdhaRha} = Course// here you can also change the name as per your need in object destructuring

// console.log(konPdhaRha);
// console.log(CourseTeacher); 

// ==================API -> apna kaam kishi aur ke sir pr dalna

// all values nowdays comes from database are in the form json and json is nothing but object with no name

// {
//     "name": "Madhu",
//     "age": 19,
//     "email": "abc@123" // this is the actual format of json where all the key value pair are in the form of string
// } // other datatypes not seen as strings like numbes, boolean, null, etc.

//in some cases api are also found in the form of array

//json are just javascript object Notations

//===========================Function- to hadle multiple parameter we use rest operator '...'================

//assignment of argument to parameter is moved from left to right for functions

//{} this is known as scope if comes with conditionals and functions
//and in scopes var creates problem thats why we dont use var

// ===============================hoisting==============================

// console.log(addone(1)); // output - 2
// function addone(num){ // declaring function in this way without holding them we can call that function before decleration because in js
//     return num + 1//there is a concept of hoisting where when function is called before declaration then js initialize the function definition
// }//above the function call invisibly this is known as hoisting
// console.log(addone(1)); // output -> 2


// console.log(result(1)); // and if we call a function before initialization which is stored in a variable then it throws error
// const result = function addtwo(num){
//     return num + 2
// }
// console.log(result(1)); // outpu-> 3

//===============================This Keyword========================================

// before arrow function we will study this pointer

// const user = {
//     name: " Madhusudan",
//     age: 19,
//     welcomemsg: function(){
//         console.log(`${this.name}, Welcome Sir.`); // here this used to represent the current context(you can we in block)
//         console.log(this);
//     }
// }

// user.welcomemsg();
// user.name = "sunny"
// user.welcomemsg()

// console.log(this); // this is a global this here in node environment their is nothing as global object that's why this is showing empty object
// but when we print this in brower their the global object is window so in browser this shows window object
//if you print this even inside a function the output will be multiple objects because in that case this is representing thta function context
//this will only print some global object of function but we want to use this for function (both arrow & normal)variables then the out will be undefined.
//and we are in node environment then the this keyword will refer to empty object

//=====================================Arrow Function================================================

// () => {
//     body //we can declare arrow function like this it is the syntax of arrow function 
// }

// we can hold arrow function inside a variable
// const fun = () => {
//     let a = 10
//     console.log(a); // This arrow function in explicit return arrow function
// }
// fun() // in fun the arrow function is stored and using fun we can call that arrow function

//Here is the example of implicit arrow function which is only written in one line

// const result = (num1, num2) => console.log(num1 + num2); // this is implicit return arrow function
// result(10, 10) 

// if we wrap the function output in curly brackets then we have to write return and if the function body is wrapped in paranthesis the no return
//even if we use to return object from implicit function then also we have to wrap the object in paranthesis

//=========Immediately invoked function expressions(IIFE)================================

//SYNTAX OF IIFE

// (
//     FUNCTION DEFINITION
// )(EXECUTION OF FUNCTION); //here two paranthesis are used for IIFE and semicolon for termination
//TO REMOVE THE POLUTION AND VARIABLE OF GLOBAL SCOPE WE USE IIFE

/* 
Global Scope Pollution

Global scope pollution occurs when too many variables or functions are added to the global namespace. This can lead to various issues, such as:

Naming Conflicts: If multiple scripts define variables or functions with the same name in the global scope,
they can overwrite each other, causing unexpected behavior.

Maintenance Challenges: With many global variables, it becomes harder to track and manage the state of the application.

Security Risks: Global variables can be accessed and modified from any part of the code,
 increasing the risk of unintended changes and security vulnerabilities.

Memory Leaks: Variables in the global scope are not garbage collected until the application is closed, 
potentially leading to memory leaks if not managed properly. 
*/
//we can use both normal and arrow function in iife
//In this type of functions they immediately execute themselves but hey dont know when to terminate themselves then we use semicolon at end

// ( function hello(){  //This is known as named IIFE
//     console.log(`Hello Madhu`);
// })();
// //Examples of IIFE functions
// ( ()=>{  //This is known as Unnamed IIFE
//     console.log(`Hello Sunny`);
// })();

//And we pass parameters in function and argument for them are passed in the execution paranthesis of IIFE

//============================JavaScript Execution Context==================================

/* Java script runs the code in two phase 

Three types of execution context are thier 
1-> Global execution context
2-> function execution context
3-> eval execution context

*/

//===================================Projects with Async javascrit======================================