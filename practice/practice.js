"use strict";
// keywords
// datatypes(primitive,non-primitive -datatype)
//functions 1.function statement/declaration, 2.function expression,3.arrow function,4.call back function
// array methods  1.map, 2.filter, 3.find,4.splice,5.reduce
// string methods 1.input form handling,2.searching and validation 
//object methods 1.has own ,2.assign,3.entries,4.fromentries,5.keys([]),6.values([]),7.immutable\
//Number methods 1.round,2.floor,3.tofixed fixed after decimal points digits,4.parseInt returns string,5.isNaN,6.Boolean,7.String
//ternary operator
// strict and loose equal to
//spread and rest operator and destructuring
// And and or operator 
// In And operator if x is truthy returns y value and if x is falsy returns x value )(In or operatir if  is truthy returns x value and if x is falsy returns y value )
//hoisting
//map deep dive
//type conversions 
//implicit conversions
//explicit conversions
// closure 
// data privacy (one variable share the multiple functions)
//state tracking (one variable shrea the single function)
// event handlers (single variable with single function)
//dynamic functions (single variable can access with single function)
//promise
//resolve(then)
//reject(.catch)
//resolve/reject(.finally)
//async and await 
// async and await using fetch method
//async and await with promise
//fetch method
//callstack
//settimeout
// (input and button)
// setinterval 
// (count and id)
// call method
//apply method
//bind method
//Browser storage
// (local storage and sesssion storage and cookies)
// prototype
// (older version of sharing the variables across the methods)
//(string)
// map and set
// regex
// math object
// innerhtml
// (we will add elements to the dom)
// sort,split,join,reverse
// html collection(classname and tagname)
// nodelist(query and query all with for each)
// string literals
// dynamic input string
// classes and constructor
class Harish {
    fname;
    lname;
    age;
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
}
class Kumar extends Harish {
    Ismarried;
    constructor(Ismarried) {
        super("harish", "kumar", 27);
        this.Ismarried = Ismarried;
        console.log("greet");
    }
    greet() {
        console.log("This is the greeting function");
    }
}
const result = new Kumar(false);
console.log(result);
result.greet();
