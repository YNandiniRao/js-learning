function sayMyName(){
    console.log("N");
    console.log("A");
    console.log("N");
    console.log("D");
    console.log("I");
    console.log("N");
    console.log("I");
}

//sayMyName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2)
}
addTwoNumbers(1,2)
//addTwoNumbers(1,"5")
//addTwoNumbers(1,"a")
//addTwoNumbers(1,null)
const result  = addTwoNumbers(1,2)
console.log("Result: ",result);




function addtwonumbers(number1,number2){
    let result = number1 + number2
    return result
    // return number1 + number2
}
const result2 = addtwonumbers(4,5)
console.log("Result: ", result2);


function loginUserMessage(username){
    if(username===undefined) {     //if(!username){} we can use this also
         console.log("Please enter username")
         return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("nandini"))
console.log(loginUserMessage())

