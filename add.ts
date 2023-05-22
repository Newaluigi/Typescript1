// function add(a: number, b: number) {
//   return a + b;
// }

// console.log(add(4, 2));

// function add(a: number, b: number) {
//   return a + b;
// }

// console.log(add("4", "2"));

function hello(name: string) {
  console.log("Hello " + name);
}

const firstName = "bob";

hello(firstName);

hello(firstName + " marley");

function concat(a: string, b: string) {
  return a + b;
}

const wcs = concat("Wild", concat("Code", "School"));

console.log(wcs);
