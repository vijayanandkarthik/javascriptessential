// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
console.log(blockVar);
console.log(blockConst);
console.log(blockLet);
}
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);


