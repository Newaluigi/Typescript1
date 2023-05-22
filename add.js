// function add(a: number, b: number) {
//   return a + b;
// }
// console.log(add(4, 2));
// function add(a: number, b: number) {
//   return a + b;
// }
// console.log(add("4", "2"));
function hello(name) {
    console.log("Hello " + name);
}
var firstName = "bob";
hello(firstName);
hello(firstName + " marley");
function concat(a, b) {
    return a + b;
}
var wcs = concat("Wild", concat("Code", "School"));
console.log(wcs);
