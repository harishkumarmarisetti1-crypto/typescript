// Data Types
// Primitive and Non Primitive Data Types in TypeScript

// string, number, boolean, null, undefined, symbol, bigint
let first_name: string = "John";

let age: number = 56;

let isLoading: boolean = false;

let data: null;

let last_name = "Doe";

// Array, Objects

// const nums = [1, 2, 3, 4, 5, "string", false];

// nums.push();

const nums: number[] = [1, 2, 3, 4, 5];

nums.push(56);

// Objects
const person: {
  fname: string;
  lname: string;
  age: number;
  skill: string;
} = {
  fname: "John",
  lname: "Snow",
  age: 29,
  skill: "backend",
};

console.log(person);

person.skill = "React";

console.log(person);

// string, number, boolean, undefined, null
// array -> string[], number[], boolean[],  undefined[], null[]
// Objects -> {lname: string}

let my_name: string | number = "Shiv";

my_name = 67;

let users_data: null | string[];

let my_class: undefined | string;

my_class = "TypeScript";

// =============================================
const employee: {
  full_name: string;
  age: number;
  department: string;
  salary: number;
  isServingNoticePeriod: boolean;
  isMarried?: boolean;
} = {
  full_name: "John Doe",
  age: 45,
  department: "Software",
  salary: 500000,
  isServingNoticePeriod: false,
  isMarried: true,
};
