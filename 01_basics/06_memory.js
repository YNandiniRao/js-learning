// stack(primitive), heap(non-primitive)

let myUserName = "nandinirao"
let anotherUserName = myUserName
anotherUserName = "megharao"
console.log(myUserName);
console.log(anotherUserName);

let userOne= {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "nandini@google.com"

console.log(userOne.email);
console.log(userTwo.email);
