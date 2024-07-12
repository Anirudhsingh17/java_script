const accountID = 144553
let accountEmail = "anirudh@gmail.com"
var acountpassword = "12345"
accountcity = "jaipur"
let accountState;

// accountID = 2 // not allowed

accountEmail = "hc@hc.com"
acountpassword = "212121"
accountcity = "bengaluru"

console.log(accountID);

/*
prefer not to use var
because of issue in block scope and function  scope

*/

//in the format of table
console.table([accountEmail,accountcity,accountID,acountpassword,accountState]);
