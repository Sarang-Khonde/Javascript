let score = "sarang";

console.log(typeof (score));

let valueInNumber = Number(score);

console.log(typeof (valueInNumber));

console.log(valueInNumber);

// "22" => 22
// "22abc" => NaN (Not a number)
// ture => 1 ; false => 0

let isLoggedIn = "sarang";

booleanIsLoggedIn = Boolean(isLoggedIn);

console.log( booleanIsLoggedIn);

// 1 => true
// "" => false
// "sarang" => true

let anyNumber = 43;

let stringNumber = String(anyNumber);

console.log(stringNumber);

console.log(typeof stringNumber);

// ########################################### OPERATIONS ############################################

let value = 5;
let negValue = -value;
console.log(negValue);
console.log(typeof negValue);

let str1 = "hello"
let str2 = " sarang"
let str3 = str1 + str2;
console.log(str3);

console.log(1 + "2");
console.log("1" + 2);
console.log(1 + 2 + "2");

console.log(true);


// Prefix and postfix increment operator
let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
