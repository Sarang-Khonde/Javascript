console.log(null > 0); // False - null is converted to '0' due to comparision check
console.log(null == 0); // False - null is not converted into anything bcoz it is not an comparision check
console.log(null >= 0); // True - because in this case the null is converted to '0' due to comparision check

console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);

// === Strict Comparision

console.log("2" === 2); // first of all checks if both the values are of same type or not, if not then do not compare . output - false