// TypeScript for JS functions
function greet() {
  console.log("Hi");
}

greet();

function add(a: number, b?: number): number {
  if (b) {
    return a + b;
  } else {
    return a;
  }
}

function fetchData(): string[] {
  return ["val1", "val2"];
}

add(5);
