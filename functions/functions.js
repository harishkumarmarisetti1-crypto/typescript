"use strict";
// function greet()
// {
//     console.log("hello typescript");
// }
// greet()
// function add(a: number | string, b: number | string): number | string {
//     if (typeof a === "number" && typeof b === "number") {
//         return a + b;
//     }
//     if (typeof a === "string" && typeof b === "string") {
//         return a + b;
//     }
//     return "Invalid Input";
// }
// console.log(add(2, 3));
// console.log(add("harish", "kumar"));
// console.log(add(2, "3"));
// function add(a:number,b:number)
// {
//     return a+b
// }
// // console.log(add(10,20))
// console.log(add("harish","kumar"))
// let result=(a:number,b:number):number=>
// {
//     return a+b
// }
// console.log(result(10,20));
// let result=function(a:number,b:number):number
// {
//     return a+b
// }
// console.log(result(20,40))
// function m1(a:number,c:Function):number
// {
//     c(20)
//     console.log(a);
// }
// function m2(b:number)
// {
//     console.log(b);
// }
// m1(10,m2)
// function m1(a: number, c: (value: number) => number): number {
//     console.log(a);
//     const result = c(20);
//     return result;
// }
// function m2(b: number): number {
//     return b * 2;
// }
// console.log(m1(10, m2));
// function m1(a:number, c:(value:number)=>number): number 
// {
//     console.log(a);      // Prints 10
//     const result = c(20); // Calls m2
//     console.log(result); // Prints 20
//     return result;
// }
// function m2(b:number): number 
// {
//     return b;
// }
// console.log(m1(10, m2));
function m1(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    return "invlid output";
}
console.log(m1(10, 20));
console.log(m1("harish", "kumar"));
