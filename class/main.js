"use strict";
// Type Annotations / Defining types for variables so that no other data type is updated
// let city: string = "Hyd";
// city = "Klb";
// let age: number = 44;
// let isMarried: boolean = false;
// let salary: undefined;
// let property: null;
// const person: {
//   fname: string;
// } = {
//   fname: "John",
// };
// person.fname = "King";
// const nums: number[] = [1, 2, 3, 4, 5];
// ============================================
// API Call - > returns a unknown data
// const my_data: unknown = 4;
// ("hello"); // 5
// console.log((my_data as string).toUpperCase()); // undefined
// ===============================================
// any
// let weatherData: string = "hello";
// weatherData = "32 Degree";
// ==============================================
// const userRoles: readonly string[] = ["user", "admin", "dev", "superAdmin"];
// userRoles.push('gkugkug');
// [false, string, number]
// Tuple
// const userData: readonly [string, boolean, number] = ["John", false, 0]; // Tuple
// userData.push(true);
// userData;
// console.log(userData);
// userData.push(undefined);
// userData.unshift();
// ==============================================
// type
// interface
// type LastName = string;
// let lname: LastName = "string";
// interface Person {
//   fname: string;
//   lname: string;
//   age: number;
//   isMarried: boolean;
// }
// interface Employee extends Person {
//   department: string;
//   buildingNo: number;
//   officePincode: number;
//   isWFH: boolean;
// }
// const rahul: Person = {
//   fname: "Rahul",
//   lname: "Singh",
//   age: 25,
//   isMarried: false,
// };
// const suraj: Employee = {};
// props : Employee
// unknown
// tuple
// type
// interface
// any
// readonly
// events
// typescript in React
// generics
// Typescript in backend or nodejs or expressjs
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// [1, 2, 3, 4, 5, 6].map((val: number) => console.log(val));
