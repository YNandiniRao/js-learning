let score = 33
let score1 = "23"
let score2 = "45abc"
let score3 = null
let score4 = undefined
let score5 = true
let score6 = "nandini"


console.log(typeof score);
console.log(typeof(age));


let valueInNumber1 = Number(score1);
console.log(typeof valueInNumber1);

let valueInNumber2 = Number(score2);
console.log(valueInNumber2); //not a number (NaN)


let valueInNumber3 = Number(score3);
console.log(valueInNumber3);


let valueInNumber4 = Number(score4);
console.log(valueInNumber4); 

let valueInNumber5 = Number(score5);
console.log(valueInNumber5); 

let valueInNumber6 = Number(score6);
console.log(valueInNumber6); 



//"33" => 33
// "33abc" => Nan
// true => 1; false =>0


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


let  Logged = ""
let booleanLogged = Boolean(Logged)
console.log(booleanLogged);


let Log = "megha"
let booleanLog = Boolean(Log)
console.log(booleanLog);

// 1 => true; 0 => false
// "" => false
//"megha" => true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber);
