const generateUniqueId = require("../src/index");

console.log(generateUniqueId(5, { uppercase: true, alphaNumeric: true })); // Example: "9ZL1X3T2"
console.log(generateUniqueId(8, { uppercase: true, alphaNumeric: false })); // Example: "XQPTLZYA"
console.log(generateUniqueId(8, { uppercase: false, alphaNumeric: false })); // Example: "azxqptly"
//unique_id
