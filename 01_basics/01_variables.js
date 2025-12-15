const accountId = 144553
let accountEmail = "nandini@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

//accountId = 2 //not allowed

/* 
prefer not to use var 
because of issue in block scope and functional scope
*/

accountEmail = "hc2hc.com"
accountPassword = "153"
accountCity = "delhi"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])